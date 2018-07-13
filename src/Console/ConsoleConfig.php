<?php
/**
 * @file
 * Site configuration object for the Site Console system
 */

namespace CL\Console;

use CL\Site\Components\InstalledConfig;

/**
 * Site configuration object for the Site Console system
 */
class ConsoleConfig extends InstalledConfig {

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

	private $plugins = [];   ///< Javascript to install for console
	private $closures = [];  ///< Closures called when view is instantiated
}