import {ConsoleFactory} from './js/ConsoleFactory';

const Console = ConsoleFactory.create(Site.Site);
export {Console};

const components = Console.components;
export {components};

const tables = Console.tables;
export {tables};

console.log('Console');