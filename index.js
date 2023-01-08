import {ConsoleFactory} from './js/ConsoleFactory';

import ConsoleComponentBase from './js/ConsoleComponentBase.vue';
Site.ConsoleComponentBase = ConsoleComponentBase;

if(!Site.Console) {
    const Console = ConsoleFactory.create(Site);
    Site.Console = Console
}

export {ConsoleComponentBase}

