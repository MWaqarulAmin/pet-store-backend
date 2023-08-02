import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './pet.model';
import { PetDto } from './dto/pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async getAllPets(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async getPetById(id: string): Promise<Pet> {
    return this.petModel.findById(id).exec();
  }
  
  async getImageById(id: string): Promise<Pet> {
    return this.petModel.findById(id).exec();
  }

  async createPet(petDto: PetDto): Promise<Pet> {
    const createdPet = new this.petModel(petDto);
    return createdPet.save();
  }

  async updatePet(id: string, petDto: PetDto): Promise<Pet> {
    return this.petModel.findByIdAndUpdate(id, petDto, { new: true }).exec();
  }

  async deletePet(id: string): Promise<Pet> {
    return this.petModel.findByIdAndRemove(id).exec();
  }
}
