<?php
/**
 * @file
 * Site configuration object for the Site Console system
 */

namespace CL\Console;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Router;

/**
 * Site configuration object for the Site Console system
 */
class ConsolePlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'console';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['users'];}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;
			$router->addRoute(['console', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new ConsoleView($site);
				return $view->vue('cl-console');
			});
		}
	}
}