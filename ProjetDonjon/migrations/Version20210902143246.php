<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210902143246 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE quete ADD type_quete VARCHAR(10) DEFAULT NULL, ADD quetesoustitre VARCHAR(30) DEFAULT NULL, ADD quetetitre VARCHAR(10) DEFAULT NULL, ADD description LONGTEXT DEFAULT NULL, ADD resume VARCHAR(150) DEFAULT NULL, ADD duree INT DEFAULT NULL, ADD statut TINYINT(1) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE quete DROP type_quete, DROP quetesoustitre, DROP quetetitre, DROP description, DROP resume, DROP duree, DROP statut');
    }
}
