<?php

namespace App\Entity;

use App\Repository\QueteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QueteRepository::class)
 */
class Quete
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $filename;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $typeQuete;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $quetesoustitre;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quetetitre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="text", length=500, nullable=true)
     */
    private $resume;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $duree;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $statut;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $etatpartie;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $maitre;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFilename()
    {
        return $this->filename;
    }

    public function setFilename($filename): self
    {
        $this->filename = $filename;

        return $this;
    }

    public function getTypeQuete(): ?string
    {
        return $this->typeQuete;
    }

    public function setTypeQuete(?string $typeQuete): self
    {
        $this->typeQuete = $typeQuete;

        return $this;
    }

    public function getQuetesoustitre(): ?string
    {
        return $this->quetesoustitre;
    }

    public function setQuetesoustitre(?string $quetesoustitre): self
    {
        $this->quetesoustitre = $quetesoustitre;

        return $this;
    }

    public function getQuetetitre(): ?string
    {
        return $this->quetetitre;
    }

    public function setQuetetitre(?string $quetetitre): self
    {
        $this->quetetitre = $quetetitre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getResume(): ?string
    {
        return $this->resume;
    }

    public function setResume(?string $resume): self
    {
        $this->resume = $resume;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(?int $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getStatut(): ?bool
    {
        return $this->statut;
    }

    public function setStatut(?bool $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getEtatpartie(): ?string
    {
        return $this->etatpartie;
    }

    public function setEtatpartie(?string $etatpartie): self
    {
        $this->etatpartie = $etatpartie;

        return $this;
    }

    public function getMaitre(): ?string
    {
        return $this->maitre;
    }

    public function setMaitre(?string $maitre): self
    {
        $this->maitre = $maitre;

        return $this;
    }
}
