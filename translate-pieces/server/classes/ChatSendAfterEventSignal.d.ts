/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @example custom_command.js
     * ```typescript
     * const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {
     *   if (eventData.message.includes("cancel")) {
     *     // Cancel event if the message contains "cancel"
     *     eventData.canceled = true;
     *   } else {
     *     // Modify chat message being sent
     *     eventData.message = `Modified '${eventData.message}'`;
     *   }
     * });
     * ```
     */
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}