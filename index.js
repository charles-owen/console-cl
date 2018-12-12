import {ConsoleFactory} from './js/ConsoleFactory';

const Console = ConsoleFactory.create(Site.site);
export {Console};

// We set it in the global Site object
//Site.Console = Console;

//const components = Console.components;
//export {components};

//const tables = Console.tables;
// export {tables};
