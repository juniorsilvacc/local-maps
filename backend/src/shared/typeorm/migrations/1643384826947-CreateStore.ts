import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStore1643384826947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'contact',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'numeric',
          },
          {
            name: 'longitude',
            type: 'numeric',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stores');
  }
}
