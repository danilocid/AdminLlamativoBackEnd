import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Region } from '../common/entities/regions.entity';
import { Comuns } from '../common/entities/comuns.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Region, Comuns]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.SECRET,
          signOptions: { expiresIn: '1d' },
        };
      },
      inject: [],
    }),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
