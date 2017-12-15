import { default as hello } from './hello';
import { default as goodbye } from './goodbye';
import { default as whatIs } from './what-is';
import { default as your } from './your';
import { default as youAre } from './you-are';
import { default as math } from './math';
import { default as time } from './time';
import { default as exclamations } from './exclamations';
import { default as iAm } from './i-am';
import { default as howAreYou } from './how-are-you';
import { default as my } from './my';

const answers = Object.assign({},
    hello,
    goodbye,
    whatIs,
    your,
    youAre,
    math,
    time,
    exclamations,
    iAm,
    howAreYou,
    my,
);

export default answers;
