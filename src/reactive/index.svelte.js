import { page } from '$app/state';
import mkDateUtils from '$reactive/i18n/date-utils.js';
import mkMessage from '$reactive/i18n/message.js';
import mkNamespaces from '$reactive/i18n/namespaces.js';
import mkSelectedLanguage from '$reactive/language/selected.js';
import mkResolve from '$reactive/navigation/resolve.js';
import { getContext, setContext } from 'svelte';

const SELECTED_LANGUAGE = Symbol('SELECTED_LANGUAGE');
const RESOLVE = Symbol('RESOLVE');
const MESSAGE = Symbol('MESSAGE');
const DATE_UTILS = Symbol('DATE_UTILS');

export function setupReactiveContext() {
  const selectedLanguage = $derived(mkSelectedLanguage(page));
  const resolve = $derived(mkResolve(page, selectedLanguage));
  const namespaces = $derived(mkNamespaces(page, resolve));
  const message = $derived(mkMessage(namespaces));
  const DateUtils = $derived(mkDateUtils(selectedLanguage, message));

  setContext(SELECTED_LANGUAGE, () => selectedLanguage);
  setContext(RESOLVE, () => resolve);
  setContext(MESSAGE, () => message);
  setContext(DATE_UTILS, () => DateUtils);
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
