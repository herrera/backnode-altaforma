import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Table,
} from 'typeorm';

@Entity()
export class PostosTrabalho extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  observacao: string;

  @Column()
  status: boolean;

  @Column()
  sigla: string;
}
