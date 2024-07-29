import { building } from '$app/environment';
import allMessages from '$messages/index.js';
import { derived } from 'svelte/store';
import namespaces from './namespaces.svelte.js';

export default building ? derived(namespaces, $namespaces => {
  const availableMessages = $namespaces.reduce(
    (messages, namespace) => ({ ...messages, ...allMessages[namespace] }),
    {}
  );
  return {
    get(messageId, param) {
      const message = availableMessages[messageId];
      const ret = param ? message?.(param) : message;
      if (ret === undefined) {
        throw new Error(
          `Message '${messageId}' not found in namespaces: ${$namespaces.map(namespace => `'${namespace}'`).join(', ')}`
        );
      }
      return ret;
    },
  };
}) : derived(namespaces, $namespaces => {
  const availableMessages = $namespaces.reduce(
    (messages, namespace) => ({ ...messages, ...allMessages[namespace] }),
    {}
  );
  return {
    get(messageId, param) {
      const message = availableMessages[messageId];
      return param ? message?.(param) : message;
    },
  };
});
