import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  college: string;

}