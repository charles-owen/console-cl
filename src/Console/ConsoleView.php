<?php
/**
 * Created by PhpStorm.
 * User: charl
 * Date: 7/2/2018
 * Time: 7:35 AM
 */

namespace CL\Console;

use CL\Site\Site;
use CL\Site\View;
use CL\Site\Util\TopologicalSort;

class ConsoleView extends View {
	public function __construct(Site $site) 	{
		parent::__construct($site, [
			'at-least'=>['console-access', \CL\Users\User::STAFF],
			'resource'=>'console']);

		$this->title = "Site Console";
		$this->addJS('users');
		$this->addJS('console');

		$plugins = TopologicalSort::sort($site->console->plugins);
		foreach($plugins as $plugin) {
			$this->addJS($plugin);
		}

		$site->console->execClosures($this);

		$userjson = json_encode($site->users->user->data(true));
		$this->addJSON('cl-user', $userjson);

		$this->script = <<<SCRIPT
Console.start();
SCRIPT;
	}
}