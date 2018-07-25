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
	 * Install the console plugin
	 * @param Site $site The Site object
	 */
	public function install(Site $site) {
		$this->site = $site;
		$site->install("console", $this);
	}

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
				return $view->vue('console');
			});
		}
	}


	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * Properties supported:
	 * db Database configuration object
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'plugins':
				return $this->plugins;

			default:
				return parent::__get($key);
		}
	}

	/**
	 * Property set magic method
	 * @param $key Property name
	 * @param $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {


			default:
				parent::__set($key, $value);
				break;
		}
	}

	public function addPlugin($js, $depends) {
		$this->plugins[$js] = $depends;
	}

	public function addClosure($closure) {
		$this->closures[] = $closure;
	}

	public function execClosures(ConsoleView $view) {
		foreach($this->closures as $closure) {
			if(is_callable($closure)) {
				$closure($view);
			}
		}
	}

	private $site;
	private $plugins = [];   ///< Javascript to install for console
	private $closures = [];  ///< Closures called when view is instantiated
}