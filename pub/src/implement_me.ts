
import get_location_info from "./private/get_location_info"

/**
 * use this function as a placeholder when you want to compile but have not fully developed all functionality yet.
 * 
 * this function should only be called from code that is in the development phase,
 * before publishing, the usages should be removed
 * @param message the string to be printed to stderr
 */
export function implement_me(marker: string): never {
    const location = get_location_info(1)
    throw new Error(`IMPLEMENT ME ${marker
        ? `: '${marker
        }'`
        : ''
        } @ ${location['document resource identifier']
        }:${location.line
        }:${location.column
        }`)
}