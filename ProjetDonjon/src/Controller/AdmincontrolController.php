<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\EditUserType;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
/**
 * @Route("/admincontrol", name="admincontrol_")
 *  @IsGranted("ROLE_ADMIN")
 */
class AdmincontrolController extends AbstractController
{
    /**
     * 
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('admincontrol/index.html.twig', [
            'controller_name' => 'AdmincontrolController',
        ]);
    }
    /**
     * 
     * @Route("/utilisateur", name="utilisateur")
     */
    public function usersList(UsersRepository $users): Response
    {
        return $this->render('admincontrol/users.html.twig', [
            'users' => $users->findAll(),
        ]);
    }
    /**
     * 
     * @Route("/utilisateur/modifier/{id}", name="utilisateur_modif")
     */
    public function editUser(Users $user, Request $request): Response
    {
        $form = $this->createForm(EditUserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('admincontrol_utilisateur');
        }

        return $this->render('admincontrol/edituser.html.twig', [
            'usersform' => $form->createView(),
        ]);
    }
}
