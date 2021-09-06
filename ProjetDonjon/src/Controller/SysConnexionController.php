<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SysConnexionController extends AbstractController
{
    /**
     * @Route("/sys/connexion", name="sys_connexion")
     */
    public function index(): Response
    {
        return $this->render('sys_connexion/index.html.twig', [
            'controller_name' => 'SysConnexionController',
        ]);
    }
}
