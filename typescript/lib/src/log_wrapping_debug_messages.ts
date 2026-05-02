

export default function _p_log_wrapping_debug_messages<T>(
    message: string,
    handler: () => T,
): T {
    console.log()
    console.log("DEBUG BEFORE", message)
    const startTime = Date.now()
    const x = handler()
    const duration = Date.now() - startTime
    console.log("DEBUG AFTER", message.concat(' '.repeat(Math.max(0, 20 - message.length))), `(${duration}ms)`)
    return x

}