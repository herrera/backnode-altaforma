import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Table,
} from 'typeorm';
import { Produto } from './produto';
import { PostosTrabalho } from './postoTrabalho';

@Entity()
export class Fluxo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ordemExecucao: number;

  @Column()
  tempoExecucao: number;

  @Column()
  status: boolean;

  // @ManyToOne
  // @JoinColumn(name="produto_id", nullable=false)
  // private ProdutoModel produto;

  @ManyToOne(() => Produto)
  produto: Produto;

  // @ManyToOne
  // @JoinColumn(name="posto_trabalho_id", nullable=false)
  // private PostoTrabalhoModel postoTrabalho;

  @ManyToOne(() => PostosTrabalho)
  postosTrabalho: PostosTrabalho;
}
