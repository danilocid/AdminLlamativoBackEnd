import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { In, Not, Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from '../common/entities/regions.entity';
import { Comuns } from '../common/entities/comuns.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly client: Repository<Client>,
    @InjectRepository(Region)
    private readonly region: Repository<Region>,
    @InjectRepository(Comuns)
    private readonly commune: Repository<Comuns>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    console.log(createClientDto);
    console.log(createClientDto.rut);
    //validate if client exist, where rut = rut or name = name
    let client = await this.client.findOne({
      where: [{ rut: createClientDto.rut }, { name: createClientDto.name }],
    });
    console.log(client);
    if (client) {
      throw new NotFoundException('Client already exist');
    }
    //validate RUT
    console.log(this.esRutValido('18109289-0')); // true
    console.log(this.esRutValido(createClientDto.rut));
    if (!this.esRutValido(createClientDto.rut)) {
      throw new NotFoundException('RUT is not valid');
    }

    //validate commune exist
    let commune = await this.commune.findOne({
      where: { id: createClientDto.commune },
      relations: ['region'],
    });
    if (!commune) {
      throw new NotFoundException('Commune not found');
    }

    //validate region exist
    let region = await this.region.findOne({
      where: { id: createClientDto.region },
    });
    if (!region) {
      throw new NotFoundException('Region not found');
    }
    console.log(region);
    console.log(commune);

    //validate region and commune match
    if (region.id != commune.region.id) {
      throw new NotFoundException('Region and commune not match');
    }

    //create client
    let newclient = {
      activity: createClientDto.activity,
      rut: createClientDto.rut,
      name: createClientDto.name,
      address: createClientDto.address,
      phone: parseInt(createClientDto.phone),
      email: createClientDto.email,
      region: region,
      commune: commune,
    };
    console.log(newclient);
    client = await this.client.create(newclient);
    await this.client.save(client);
    return client;
  }

  async findAll() {
    let client = await this.client.find({
      relations: ['region', 'commune'],
    });
    return client;
  }

  async findOne(id: string) {
    let client = await this.client.findOne({
      where: { rut: id },
      relations: ['region', 'commune'],
    });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async update(rut: string, updateClientDto: UpdateClientDto) {
    console.log(updateClientDto);
    //validate RUT
    console.log(this.esRutValido('18109289-0')); // true
    console.log(this.esRutValido(rut));
    if (!this.esRutValido(rut)) {
      throw new NotFoundException('RUT is not valid');
    }
    //validate if client exist, where rut = rut
    let client = await this.client.findOne({
      where: { rut: rut },
    });
    if (!client) {
      throw new NotFoundException('Client not found');
    }

    //validate if another client exist with same name
    let client2 = await this.client.findOne({
      where: { name: updateClientDto.name },
    });
    if (client2 && client2.rut != rut) {
      throw new NotFoundException('Client already exist');
    }

    //validate commune exist
    let commune = await this.commune.findOne({
      where: { id: updateClientDto.commune },
      relations: ['region'],
    });
    if (!commune) {
      throw new NotFoundException('Commune not found');
    }

    //validate region exist
    let region = await this.region.findOne({
      where: { id: updateClientDto.region },
    });
    if (!region) {
      throw new NotFoundException('Region not found');
    }
    console.log(region);
    console.log(commune);

    //validate region and commune match
    if (region.id != commune.region.id) {
      throw new NotFoundException('Region and commune not match');
    }

    //update client
    let newclient = {
      activity: updateClientDto.activity,
      rut: rut,
      name: updateClientDto.name,
      address: updateClientDto.address,
      phone: parseInt(updateClientDto.phone),
      email: updateClientDto.email,
      region: region,
      commune: commune,
    };
    console.log(newclient);
    client = await this.client.merge(client, newclient);
    await this.client.save(client);
    return client;
  }

  esRutValido(rut: string): boolean {
    // Eliminar puntos y guiones del RUT
    rut = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();

    // Validar que el RUT tenga el formato correcto
    if (!/^\d{1,8}[0-9K]$/.test(rut)) {
      return false;
    }

    // Calcular el dígito verificador esperado
    const rutNumero = parseInt(rut.slice(0, -1), 10);
    const verificadorEsperado = rut.slice(-1);

    // Calcular el dígito verificador real utilizando algoritmo "módulo 11"
    let suma = 0;
    let multiplicador = 2;
    for (let i = rutNumero.toString().length - 1; i >= 0; i--) {
      suma += parseInt(rutNumero.toString()[i], 10) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const digitoVerificadorReal = (11 - (suma % 11)).toString();
    const digitoVerificadorCalculado =
      digitoVerificadorReal === '11'
        ? '0'
        : digitoVerificadorReal === '10'
        ? 'K'
        : digitoVerificadorReal;

    // Comparar el dígito verificador esperado con el real
    return verificadorEsperado === digitoVerificadorCalculado;
  }
}
