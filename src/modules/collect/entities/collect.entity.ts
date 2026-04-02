import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('collect')
export class Collect {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100, comment: '카카오 채널 사용자 식별값' })
  channelUserId: string;

  @Column({ type: 'text', comment: '사용자 메시지' })
  message: string;

  @CreateDateColumn({
    type: 'datetime',
    comment: '생성일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    comment: '수정일시',
  })
  updatedAt: Date;
}