import * as pi from 'pareto-core-internals'

export function logDebugMessage() {

    console.warn(`${pi.getLocationInfo(1)}: 'IMPLEMENT ME' statement`)
    return (message: string) => {
        console.log("DEBUG", message)
    }
}