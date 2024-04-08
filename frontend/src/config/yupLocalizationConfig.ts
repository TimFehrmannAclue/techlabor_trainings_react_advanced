/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

// Yup is per default in english so german needs to be added for default validation
// Error messages are shortened as they are always displayed next to the form element or table cell and thus display a label
yup.setLocale({
  mixed: {
    default: 'ungültig',
    required: 'benötigt',
    oneOf: 'benötigt: ${values}',
    notOneOf: 'ungültig: ${values}',
  },
  // Validation of text input
  string: {
    length: 'benötigt Länge: ${length}',
    min: 'zu kurz',
    max: 'benötigt Länge <= ${max}',
    matches: 'benötigt Format: ${regex}',
    email: '${path} ungültig',
    url: '${path} ungültig',
    trim: 'Keine äußeren Leerzeichen',
    lowercase: 'benötigt Kleinschreibung',
    uppercase: 'benötigt Großschreibung',
  },
  // Validation of text input that is checked for number formats
  number: {
    min: 'benötigt >= ${min}',
    max: 'benötigt <= ${max}',
    lessThan: 'benötigt < ${less}',
    moreThan: 'benötigt > ${more}',
    // @ts-ignore Eslint does not like yup config
    notEqual: 'benötigt ${path} ander als "${notEqual}"',
    positive: 'benötigt >= 0',
    negative: 'benötigt < 0',
    integer: 'benötigt ganze Zahl',
  },
  // Validation of text input that is checked for date formats or DatePicker input
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
