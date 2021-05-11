import {ConsoleFactory} from './js/ConsoleFactory';

import ConsoleComponentBase from './js/ConsoleComponentBase.vue';
Site.ConsoleComponentBase = ConsoleComponentBase;

const Console = ConsoleFactory.create(Site);
export {Console};

