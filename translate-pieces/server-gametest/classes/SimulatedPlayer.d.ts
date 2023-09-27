/**
 * A simulated player can be used within GameTests to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link @minecraft/server.Player} type. Note that
 * many types of events that may be available for entities more
 * broadly, such as item use events, may not fire in the same
 * capacity for simulated players.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SimulatedPlayer extends minecraftserver.Player {
    private constructor();
    /**
     * @remarks
     * Rotation of the head across pitch and yaw angles.
     *
     * @throws This property can throw when used.
     */
    readonly headRotation: minecraftserver.Vector2;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    isSprinting: boolean;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /**
     * @remarks
     * Simulates and performs a disconnection of the simulated
     * player from the world.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /**
     * @remarks
     * Drops the simulated player's selected item
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fly(): void;
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * Item to give.
     * @param selectSlot
     * Whether to set the selected slot once given.
     * @throws This function can throw errors.
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     *
     * This function can't be called in read-only mode.
     *
     * @param entity
     * Entity to interact with.
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks
     * Causes the simulated player to jump.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: minecraftserver.Entity): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtLocation(location: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveToLocation(location: minecraftserver.Vector3, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): minecraftserver.NavigationResult;
    /**
     * @remarks
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult;
    /**
     * @remarks
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * This function can't be called in read-only mode.
     *
     * @param locations
     * A list of locations to use for routing.
     * @param speed
     * Net speed to use for doing the navigation.
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /**
     * @remarks
     * Respawns the particular simulated player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * Sets the game mode that the simulated player is operating
     * under.
     *
     * This function can't be called in read-only mode.
     *
     * @param gameMode
     * Game mode to set.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode: minecraftserver.GameMode): void;
    /**
     * @remarks
     * Sets a particular item for the simulated player.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * Item to set.
     * @param slot
     * Slot to place the given item in.
     * @param selectSlot
     * Whether to set the selected slot once set.
     * @throws This function can throw errors.
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /**
     * @remarks
     * Stops using the currently active item.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopUsingItem(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swim(): void;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Index of the slot to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * Item to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * @throws This function can throw errors.
     */
    useItemOnBlock(
        itemStack: minecraftserver.ItemStack,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
}