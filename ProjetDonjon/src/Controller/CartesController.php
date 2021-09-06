<?php

namespace App\Controller;

use App\Entity\Carte;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class CartesController extends AbstractController
{
    /**
     * @Route("/cartes", name="cartes")
     */
    public function index(): Response
    {
        return $this->render('cartes/index.html.twig', [
            'controller_name' => 'CartesController',
        ]);
    }

  
}
