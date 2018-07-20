<?php
/**
 * @file
 * Plugin class for the site console
 */

namespace CL\Console;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * Plugin class for the site console
 */
class ConsolePlugin extends \CL\Site\Components\Plugin {
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
	 * Install the console plugin
	 * @param Site $site The Site object
	 */
	public function install(Site $site) {
		$site->install("console", new ConsoleConfig());

		$site->addRoute(['console', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
			$view = new ConsoleView($site);
			return $view->vue('console');
		});

	}

}