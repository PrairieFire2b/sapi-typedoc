/* IMPORT */ import { EffectAddBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}