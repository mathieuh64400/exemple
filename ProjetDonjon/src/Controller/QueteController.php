<?php

namespace App\Controller;

use App\Entity\Quete;
use App\Form\QueteType;
use App\Repository\QueteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * 
 * @Route("/quete")
 * @IsGranted("ROLE_ADMIN")
 */
class QueteController extends AbstractController
{
    /**
     * @Route("/", name="quete_index", methods={"GET"})
     */
    public function index(QueteRepository $queteRepository): Response
    {
        return $this->render('quete/index.html.twig', [
            'quetes' => $queteRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="quete_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $quete = new Quete();
        $form = $this->createForm(QueteType::class, $quete);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file=$quete->getFilename();
            $fileName= md5(uniqid()).'.'.$file->guessExtension();
            $file->move($this->getParameter('upload_directory'),$fileName);
            $quete->setFilename($fileName);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($quete);
            $entityManager->flush();

            return $this->redirectToRoute('quete_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('quete/new.html.twig', [
            'quete' => $quete,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="quete_show", methods={"GET"})
     */
    public function show(Quete $quete): Response
    {
        return $this->render('quete/show.html.twig', [
            'quete' => $quete,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="quete_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Quete $quete): Response
    {
        //  $quete = new Quete();
        $form = $this->createForm(QueteType::class, $quete);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $file=$quete->getFilename();
            // $fileName= md5(uniqid()).'.'.$file->guessExtension();
            // $file->move($this->getParameter('upload_directory'),$fileName);
            // $quete->setFilename($fileName);

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('quete_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('quete/edit.html.twig', [
            'quete' => $quete,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="quete_delete", methods={"POST"})
     */
    public function delete(Request $request, Quete $quete): Response
    {
        if ($this->isCsrfTokenValid('delete'.$quete->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($quete);
            $entityManager->flush();
        }

        return $this->redirectToRoute('quete_index', [], Response::HTTP_SEE_OTHER);
    }
}
