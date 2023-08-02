import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { BrandModel } from './brand.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Brand', schema: BrandModel }])],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
