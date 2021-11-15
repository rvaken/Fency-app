<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Exception\HttpNotFoundException;
use Fency\DB\DB;
use Slim\Factory\AppFactory;
use  DI\Container;

require __DIR__ . '/../vendor/autoload.php';

$container = new Container();
AppFactory::setContainer($container);
$app = AppFactory::create();

// CONTAINERS
// database-container
$container->set('db', function () {
    return new DB();
});

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

/* ======================
// Fences
=======================*/
$app->get('/api/fences', \Fency\Controller\FenceController::class . ":getFences");

/* ======================
//        CORS
=======================*/
$app->map(
    ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    '/{routes:.+}',
    function ($request, $response) {
        throw new HttpNotFoundException($request);
    }
);

/* ======================
//      MIDDLEWARE
=======================*/
$app->addErrorMiddleware(true, true, true, $logger);

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


$app->run();
