/**
 * @file
 * Main object for the Console
 */

import {ConsoleFactory} from './ConsoleFactory.js';

const Console = ConsoleFactory.create(Site.Site);
export {Console};

const components = Console.components;
export {components};

const tables = Console.tables;
export {tables};

console.log('Console');