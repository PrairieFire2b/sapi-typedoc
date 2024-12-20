/* IMPORT */ import { ClipboardChangeAfterEventSignal, CurrentThemeChangeAfterEventSignal, CurrentThemeColorChangeAfterEventSignal, CursorPropertyChangeAfterEventSignal, ModeChangeAfterEventSignal, PrimarySelectionChangeAfterEventSignal } from '../index';

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}