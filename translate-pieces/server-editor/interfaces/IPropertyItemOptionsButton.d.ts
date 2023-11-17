/* IMPORT */ import { ButtonVariant, IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsButton extends IPropertyItemOptions {
    /**
     * @remarks
     * The variant for the button. By default it is "primary"
     *
     */
    variant?: ButtonVariant;
}