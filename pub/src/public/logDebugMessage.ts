
/**
 * logs a debug message
 * this function should only be called from code that is in the development phase,
 * before publishing, the usages should be removed
 * @param message the string to be printed to stdout
 */
export function logDebugMessage(message: string) {
    console.log("DEBUG", message)
}