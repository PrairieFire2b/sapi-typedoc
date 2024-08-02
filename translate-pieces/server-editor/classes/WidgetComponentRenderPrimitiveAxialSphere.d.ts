/* IMPORT */ import { minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveAxialSphere {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    color?: minecraftserver.RGBA;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}