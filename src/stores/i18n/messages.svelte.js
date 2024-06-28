import { derived } from 'svelte/store';
import allMessages from './allMessages.svelte.js';
import namespaces from './namespaces.svelte.js';

export default derived([allMessages, namespaces], ([$allMessages, $namespaces]) => {
  const availableMessages = $namespaces.reduce(
    (messages, namespace) => ({ ...messages, ...$allMessages[namespace] }),
    {}
  );
  return {
    get(messageId, interpolated) {
      const message = availableMessages[messageId]
      return interpolated ? message(interpolated) : message
    }
  };
});
