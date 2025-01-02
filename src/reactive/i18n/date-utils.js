const monthFormat = {
  year: 'numeric',
  month: 'long',
};

function parseMonth(monthStr) {
  const [year, month] = monthStr.split('-');
  return new Date(year, month - 1);
}

export default function mkDateUtils(selectedLanguage, message) {
  const formatMonthStr = monthStr =>
    parseMonth(monthStr).toLocaleDateString(selectedLanguage, monthFormat);
  return {
    periodToString(start, end) {
      return end
        ? message('period-from-to', { start: formatMonthStr(start), end: formatMonthStr(end) })
        : message('period-from', formatMonthStr(start));
    },
  };
}
