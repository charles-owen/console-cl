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
	public function install(Site $site) {
		$site->install("console", new ConsoleConfig());

		$site->addRoute(['console', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
			$view = new ConsoleView($site);
			return $view->vue('console');
		});

	}

}