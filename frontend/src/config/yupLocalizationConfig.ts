/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

// Yup is per default in english so german needs to be added for default validation
// Error messages are shortened as they are always displayed next to the form element or table cell and thus display a label
yup.setLocale({
  mixed: {
    default: 'ungültig', // '${path} ungültig',
    required: 'benötigt', // '${path} benötigt',
    oneOf: 'benötigt: ${values}',
    notOneOf: 'ungültig: ${values}',
  },
  string: {
    length: 'benötigt Länge: ${length}',
    min: 'zu kurz', // 'benötigt Länge >= ${min}',
    max: 'benötigt Länge <= ${max}',
    matches: 'benötigt Format: ${regex}',
    email: '${path} ungültig',
    url: '${path} ungültig',
    trim: 'Keine äußeren Leerzeichen',
    lowercase: 'benötigt Kleinschreibung',
    uppercase: 'benötigt Großschreibung',
  },
  number: {
    min: 'benötigt >= ${min}',
    max: 'benötigt <= ${max}',
    lessThan: 'benötigt < ${less}',
    moreThan: 'benötigt > ${more}',
    // @ts-ignore
    notEqual: 'benötigt ${path} ander als "${notEqual}"',
    positive: 'benötigt >= 0',
    negative: 'benötigt < 0',
    integer: 'benötigt ganze Zahl',
  },
  date: {
    min: 'benötigt: nach ${min}',
    max: 'benötigt: vor ${max}',
  },
  array: {
    min: 'benötigt Einträge >= ${min}',
    max: 'benötigt Einträge <= ${max}',
  },
});

export default yup;
