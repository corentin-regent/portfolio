import { page } from '$app/state';
import mkDateUtils from '$runes/i18n/date-utils.js';
import mkMessage from '$runes/i18n/message.js';
import mkNamespaces from '$runes/i18n/namespaces.js';
import mkSelectedLanguage from '$runes/language/selected.js';
import mkResolve from '$runes/navigation/resolve.js';
import mkTheme from '$runes/theme/index.svelte';
import selectedTheme from '$runes/theme/selected.svelte.js';
import systemTheme from '$runes/theme/system.svelte.js';
import { getContext, setContext } from 'svelte';

const SELECTED_LANGUAGE = Symbol('SELECTED_LANGUAGE');
const RESOLVE = Symbol('RESOLVE');
const MESSAGE = Symbol('MESSAGE');
const DATE_UTILS = Symbol('DATE_UTILS');
const THEME = Symbol('THEME');

export function setupReactiveContext() {
  const selectedLanguage = $derived(mkSelectedLanguage(page));
  const resolve = $derived(mkResolve(page, selectedLanguage));
  const namespaces = $derived(mkNamespaces(page, resolve));
  const message = $derived(mkMessage(namespaces));
  const DateUtils = $derived(mkDateUtils(selectedLanguage, message));
  const theme = $derived(mkTheme(systemTheme, selectedTheme));

  setContext(SELECTED_LANGUAGE, () => selectedLanguage);
  setContext(RESOLVE, () => resolve);
  setContext(MESSAGE, () => message);
  setContext(DATE_UTILS, () => DateUtils);
  setContext(THEME, () => theme);
}

export function getSelectedLanguage() {
  return getContext(SELECTED_LANGUAGE)();
}

export function getResolve() {
  return getContext(RESOLVE)();
}

export function getMessage() {
  return getContext(MESSAGE)();
}

export function getDateUtils() {
  return getContext(DATE_UTILS)();
}

export function getTheme() {
  return getContext(THEME)();
}
