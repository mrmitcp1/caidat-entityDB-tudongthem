import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePhoneBook1686556027205 implements MigrationInterface {
    name = 'UpdatePhoneBook1686556027205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`note\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`phone\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`note\``);
    }

}
