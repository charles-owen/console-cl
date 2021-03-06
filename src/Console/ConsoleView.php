<?php
/**
 * @file
 * View class for the site console
 */

/// Classes in the Console subsystem
namespace CL\Console;

use CL\Site\Site;
use CL\Users\View;
use CL\Site\Util\TopologicalSort;

/**
 * View class for the site console
 */
class ConsoleView extends View {
	/**
	 * ConsoleView constructor.
	 * @param Site $site Site object
	 */
	public function __construct(Site $site) 	{
		parent::__construct($site, [
			'at-least'=>['console-access', \CL\Users\User::STAFF],
			'resource'=>'console']);

		$this->title = "Site Console";
		$this->addJS('users');
		$this->addJS('console');

		$this->addJSON('cl-permissions', json_encode($site->users->permissions));

		$site->amend($this);
	}
}