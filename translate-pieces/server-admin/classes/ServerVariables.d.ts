/**
 * A collection of server variables defined in dedicated server
 * configuration.
 */
export class ServerVariables {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server variables.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     *
     * This function can't be called in read-only mode.
     *
     */
    get(name: string): any | undefined;
}