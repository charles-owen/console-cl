<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/console';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<link href="../../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>

<p>The cl/console component is the CourseLib site console. It will install at cl/console
    relative to the site root and provides management functions. The console is only
    accessible to staff or better users. cl/console must be installed with
    <a href="../users/use">cl/users</a>.</p>

<?php echo $view->footer(); ?>
</body>
</html>
