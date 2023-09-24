import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async dashboard() {
    let products = await this.productRepository.find();
    let totalUnits = 0;
    let totalCost = 0;
    let totalSale = 0;
    let totalProfit = 0;
    let totalProfitPercentage = 0;
    products.forEach((product) => {
      totalUnits += product.stock;
      totalCost += product.stock * (product.netCost + product.taxCost);
      totalSale += product.stock * (product.netSale + product.taxSale);
      totalProfit +=
        product.stock *
        (product.netSale + product.taxSale - product.netCost - product.taxCost);
    });
    totalProfitPercentage = (totalProfit / totalCost) * 100;

    return {
      totalUnits,
      totalCost,
      totalSale,
      totalProfit,
      totalProfitPercentage,
    };
  }
}
