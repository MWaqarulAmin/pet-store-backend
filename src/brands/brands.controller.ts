import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandDto } from './dto/brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  async getAllBrands() {
    return this.brandsService.getAllBrands();
  }

  @Get(':id')
  async getBrandById(@Param('id') id: string) {
    return this.brandsService.getBrandById(id);
  }

  @Get(':id/images/pets')
  async findImageById(@Param('id') id: string): Promise<any> {
    const brand = await this.brandsService.getImageById(id);
    return brand.imageUrl;
  }

  @Post()
  async createBrand(@Body() brandDto: BrandDto) {
    return this.brandsService.createBrand(brandDto);
  }

  @Put(':id')
  async updateBrand(@Param('id') id: string, @Body() brandDto: BrandDto) {
    return this.brandsService.updateBrand(id, brandDto);
  }

  @Delete(':id')
  async deleteBrand(@Param('id') id: string) {
    return this.brandsService.deleteBrand(id);
  }
}
