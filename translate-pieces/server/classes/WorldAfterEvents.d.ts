/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity dies.
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when an entity is loaded.
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is spawned.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     *
     */
    readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a projectile hits a block.
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A target block was hit.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A trip wire was tripped.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     *
     */
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}