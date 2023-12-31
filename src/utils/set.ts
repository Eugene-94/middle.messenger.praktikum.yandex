import { Indexed } from "@core/types/indexed.type.ts";

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for (const p in rhs) {
        if (!(p in rhs)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch(e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== "object" || object === null) {
        return object;
    }

    const result = path.split(".").reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
    }), value as any);

    return merge(object as Indexed, result);
}

export default set;
