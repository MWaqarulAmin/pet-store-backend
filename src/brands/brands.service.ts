import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand, BrandDocument } from './brand.model';
import { BrandDto } from './dto/brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
  ) {}

  async getAllBrands(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async getBrandById(id: string): Promise<Brand> {
    return this.brandModel.findById(id).exec();
  }

  async getImageById(id: string): Promise<Brand> {
    return this.brandModel.findById(id).exec();
  }

  async createBrand(brandDto: BrandDto): Promise<Brand> {
    const createdBrand = new this.brandModel(brandDto);
    return createdBrand.save();
  }

  async updateBrand(id: string, brandDto: BrandDto): Promise<Brand> {
    return this.brandModel
      .findByIdAndUpdate(id, brandDto, { new: true })
      .exec();
  }

  async deleteBrand(id: string): Promise<Brand> {
    return this.brandModel.findByIdAndRemove(id).exec();
  }
}
