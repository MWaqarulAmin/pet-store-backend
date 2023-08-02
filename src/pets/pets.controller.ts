import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetDto } from './dto/pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  async getAllPets() {
    return this.petsService.getAllPets();
  }

  @Get(':id')
  async getPetById(@Param('id') id: string) {
    return this.petsService.getPetById(id);
  }

  @Get(':id/images/pets')
  async findImageById(@Param('id') id: string): Promise<any> {
    const pet = await this.petsService.getImageById(id);
    return pet.imageUrl;
  }

  @Post()
  async createPet(@Body() petDto: PetDto) {
    return this.petsService.createPet(petDto);
  }

  @Put(':id')
  async updatePet(@Param('id') id: string, @Body() petDto: PetDto) {
    return this.petsService.updatePet(id, petDto);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: string) {
    return this.petsService.deletePet(id);
  }
}
