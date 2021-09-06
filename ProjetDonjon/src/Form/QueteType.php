<?php

namespace App\Form;

use App\Entity\Quete;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QueteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('quetetitre',TextType::class)
            ->add('typequete',TextType::class)
            ->add('quetesoustitre',TextType::class,['label'=>' soustitre (10 caractères max) '])
            ->add('filename',FileType::class)
            ->add('description',TextareaType::class)
            // ->add('resume',TextareaType::class,['label'=>' Resumé (100 caractères max) '])
            // ->add('duree',NumberType::class)
            
            // ->add('maitre',TextType::class)
         
            // ->add('etatpartie',TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Quete::class,
        ]);
    }
}
