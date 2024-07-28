import messages from "$stores/i18n/messages.svelte.js";
import selectedLanguage from "$stores/language/selected.svelte.js";
import { derived } from "svelte/store";

const monthFormat = {
  year: 'numeric',
  month: 'long',
};

function parseMonth(str) {
  const [year, month] = str.split('-');
  return new Date(year, month - 1)
}

export default derived([selectedLanguage, messages], ([$selectedLanguage, $messages]) => {
  const monthToString = date => date.toLocaleDateString($selectedLanguage, monthFormat);
  const formatMonthString = str => monthToString(parseMonth(str));

  return {
    periodToString(start, end) {
      return end
        ? $messages.get('period-from-to', { start: formatMonthString(start), end: formatMonthString(end) })
        : $messages.get('period-from', formatMonthString(start))
    }
  }
});
