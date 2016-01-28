import Translator from 'nucleus-text/translate/Translator';

const translator = new Translator('en');

export default translator;
export const translate = translator.translate;
export const currency = translator.currency;
