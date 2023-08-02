import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetModel } from './pet.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetModel }])],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}
