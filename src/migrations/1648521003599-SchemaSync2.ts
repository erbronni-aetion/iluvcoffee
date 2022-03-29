import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync21648521003599 implements MigrationInterface {
  name = 'SchemaSync21648521003599';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "coffee" RENAME COLUMN "title" to "name"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "coffee" RENAME COLUMN "name" to "title"',
    );
  }
}
