/**
 * Create a type CssStyle that accepts the a valid Css Style for margins and paddings. e.g. padding-top: 420px;
 * Include all possible directions. So margin should accept margin-top, margin-right, margin-bottom & margin-left
 *
 * Make sure that the size of the padding or margin can be either px, rem or %
 */

type CssStyle = 'margin' | 'padding';

// Should Work
const myValidCssStyle1: CssStyle = 'margin-top: 20px';
const myValidCssStyle2: CssStyle = 'margin-right: 2rem';
const myValidCssStyle3: CssStyle = 'margin-bottom: 400000px';
const myValidCssStyle4: CssStyle = 'margin-left: 20%';
const myValidCssStyle5: CssStyle = 'padding-top: 1px';
const myValidCssStyle6: CssStyle = 'padding-right: 99%';
const myValidCssStyle7: CssStyle = 'padding-bottom: 160px';
const myValidCssStyle8: CssStyle = 'padding-left: 7rem';

// Should NOT work
const myInvalidCssStyle1: CssStyle = 'margin: 200px';
const myInvalidCssStyle2: CssStyle = 'margin-top:200px';
const myInvalidCssStyle3: CssStyle = 'padding-top: 200';
const myInvalidCssStyle4: CssStyle = 'display: flex';

export {}
