<?php
require __DIR__.'/vendor/autoload.php';

use PhpParser\ParserFactory;
use PhpParser\Lexer;

$lexer = new Lexer(array(
    'usedAttributes' => array(
        'comments',
        'startLine',
        'endLine',
        'startTokenPos',
        'endTokenPos',
        'startFilePos',
        'endFilePos',
    )
));
$parser = (new ParserFactory)->create(ParserFactory::PREFER_PHP7, $lexer);

echo json_encode($parser->parse(file_get_contents('php://input')), JSON_PRETTY_PRINT);