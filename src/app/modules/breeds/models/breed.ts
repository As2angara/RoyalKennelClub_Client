import {Measurment} from './measurement';

export interface Breed {
  id: number;
  name: string;
  life_span: string;
  origin: string;
  temperament: string;
  bred_for: string;
  breed_group: string;
  height: Measurment;
  weight: Measurment;
}
