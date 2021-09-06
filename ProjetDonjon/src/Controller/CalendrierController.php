<?php

namespace App\Controller;

use App\Repository\CalendarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
class CalendrierController extends AbstractController
{
    /**
     * 
     * @Route("/calendrier", name="calendrier")
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(CalendarRepository  $calendar): Response
    {
        $events = $calendar->findAll();
        // dd($events);
        foreach ($events as $event) {
            $rdvs[]=[
                'id' => $event->getId(),
                'title' => $event->getTitle(),
                'start' => $event->getStart()->format('Y-m-d H:i:s'),
                'end' => $event->getEnd()->format('Y-m-d H:i:s'),
                'description' => $event->getDescription(),
                'all_day' => $event->getAllDay(),
                'background-color' => $event->getBackgroundColor()

            ];
        }
        $data=json_encode($rdvs);
        return $this->render('calendrier/index.html.twig', compact('data'));
    }
}
