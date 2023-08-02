import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imageUrl: string;
}

export const BrandModel = SchemaFactory.createForClass(Brand);
