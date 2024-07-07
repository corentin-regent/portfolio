import { building } from '$app/environment';
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
      const ret = interpolated ? message(interpolated) : message;
      if (ret === undefined && building) {
        throw new Error(
          `Message '${messageId}' not found in namespaces: ${$namespaces.map(namespace => `'${namespace}'`).join(', ')}`
        );
      }
      return ret;
    },
  };
});
