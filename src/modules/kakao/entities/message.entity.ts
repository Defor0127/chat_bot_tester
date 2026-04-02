import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('user_utterances') // 테이블 이름을 '사용자 발화'로 명확히 함
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  kakaoUserId: string; // 카카오 사용자 고유 ID

  @Column({ type: 'text' })
  content: string; // 사용자 발화 내용 (utterance)

  @CreateDateColumn()
  createdAt: Date; // 수집 시간 (Aiven MariaDB가 자동 생성)
}