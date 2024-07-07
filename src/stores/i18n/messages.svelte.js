import allMessages from '$messages/index.js';
import { derived } from 'svelte/store';
import namespaces from './namespaces.svelte.js';

export default derived(namespaces, $namespaces => {
  const availableMessages = $namespaces.reduce(
    (messages, namespace) => ({ ...messages, ...allMessages[namespace] }),
    {}
  );
  return {
    get(messageId, interpolated) {
      const message = availableMessages[messageId];
      return interpolated ? message(interpolated) : message;
    },
  };
});
