<?php

namespace App\Form;

use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EditUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username',TextType::class)
            ->add('roles',ChoiceType::class,[
                'choices'=>[
                    'utilisateur'=>'ROLE_USER',
                    'Editor'=>'ROLE_EDITOR',
                    'ADMINISTRATOR'=>'ROLE_ADMIN'
                ],
                'expanded'=>false,
                'multiple'=>true,
                'label'=>'Rôle'
            ])
            ->add('Valider',SubmitType::class)
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
