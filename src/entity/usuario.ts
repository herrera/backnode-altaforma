import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Perfis } from './perfis';

@Entity()
export class Usuarios extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ type: 'date', name: 'data_ultimo_acesso' })
  dataUltimoAcesso: Date;

  @Column({ type: 'date', name: 'data_criacao' })
  dataCriacao: Date;

  @Column({ type: 'date', name: 'usuario_id_criacao' })
  usuarioIdCriacao: number;

  @Column({ type: 'date', name: 'data_alteracao' })
  dataAlteracao: Date;

  @Column({ name: 'usuario_id_alteracao' })
  usuarioIdAlteracao: number;

  @Column()
  status: boolean;

  @ManyToMany(() => Perfis)
  @JoinTable()
  perfis: Perfis;
}
