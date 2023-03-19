import * as pi from 'pareto-core-internals'

export function implementMe() {
    console.warn(`${pi.getLocationInfo(1)}: 'IMPLEMENT ME' statement`)
    return (message: string): never => {
        throw new Error(`IMPLEMENT ME: ${message}`)
    }
}