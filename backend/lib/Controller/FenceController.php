<?php

namespace Fency\Controller;

use Fency\DB\DB;
use DI\Container;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Container\ContainerInterface;

class FenceController
{

    protected $db;
    protected $container;

    public function __construct(ContainerInterface $container)
    {

        $this->container = $container;
        $this->db = $this->container->get('db');
    }

    public function getFences(ServerRequestInterface  $request, ResponseInterface $response, array $args): ResponseInterface
    {

        $db = $this->db;
        $fencesdb = new \Fency\DB\FencesDB($db);
        $fences = $fencesdb->getFences();
        $response->getBody()->write(json_encode($fences));
        return $response;
    }
}
