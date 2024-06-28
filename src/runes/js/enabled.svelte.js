import { browser } from '$app/environment';

function jsEnabledRune() {
  let isEnabled = $state(browser);
  return { get: () => isEnabled };
}

export default jsEnabledRune();
