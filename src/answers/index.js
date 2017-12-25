import { default as hello } from './hello';
import { default as goodbye } from './goodbye';
import { default as whatIs } from './what-is';
import { default as your } from './your';
import { default as youAre } from './you-are';
import { default as math } from './math';
import { default as time } from './time';
import { default as exclamations } from './exclamations';
import { default as iAm } from './i-am';
import { default as howAre } from './how-are';
import { default as my } from './my';
import { default as what } from './what';
import { default as thankYou } from './thank-you';
import { default as yesAndNo } from './yes_and_no';
import { default as fallback } from './fallback';

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
    howAre,
    my,
    what,
    thankYou,
    yesAndNo,
    fallback,
);

export default answers;
