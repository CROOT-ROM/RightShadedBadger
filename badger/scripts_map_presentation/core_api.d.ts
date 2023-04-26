
/**
 * Register a callback for a newly-created map item.
 *
 * @param callback The callback to be called for each entity
 */
declare function onUpdate(callback): void;

/**
 * Create an entity corresponding to the newly-created map item.
 *
 * @param entityName The name to give the newly-created entity
 */
declare function makeEntity(entityName: string): void;

/**
 * Trigger a presentation event for an entity that's been created
 *
 * @param entityName The name of the entity to trigger the event for
 * @param presentationEvent The name of the presentation event for `entityName`.
 *
 * @see The `makeEntity` function
 */
declare function presentation(entityName: string, presentationEvent: string): void;

/**
 * Get a property for a newly-created map item.
 *
 * @param property The property to return.
 */
declare function get(property: string): string;

/**
 * Check if a property exists on a map item.
 *
 * @param property The property to check if it exists or not.
 */
declare function exists(property: string): boolean;

/**
 * Send a message to the console output
 *
 * @param message The message to send
 * @param logLevel 0 - 4
 */
declare function debugLog(message: string, logLevel: Number): void;
