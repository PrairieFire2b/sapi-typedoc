/* IMPORT */ import { CursorPropertiesChangeAfterEvent } from '../index';

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: CursorPropertiesChangeAfterEvent) => void,
    ): (arg: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}