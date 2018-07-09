<?php
require __DIR__ . '/../../site.php';
$view = new CL\Console\ConsoleView($site);
echo $view->vue('console');



