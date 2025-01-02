import { building } from '$app/environment';
import allMessages from '$messages/index.js';

export default function mkMessage(namespaces) {
  const availableMessages = namespaces.reduce(
    (messages, namespace) => ({ ...messages, ...allMessages[namespace] }),
    {}
  );
  return building
    ? (messageId, param) => {
        const message = availableMessages[messageId];
        const ret = param ? message?.(param) : message;
        if (ret === undefined) {
          throw new Error(
            `Message '${messageId}' not found in namespaces: ${namespaces.map(namespace => `'${namespace}'`).join(', ')}`
          );
        }
        return ret;
      }
    : (messageId, param) => {
        const message = availableMessages[messageId];
        return param ? message?.(param) : message;
      };
}
