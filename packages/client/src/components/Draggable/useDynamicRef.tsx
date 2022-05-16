import {useMemo, useRef} from "react";

export function useDynamicRef<T>(value: T) {
    const ref = useRef(value);

    useMemo(() => {
        ref.current = value;
    }, [value]);

    return ref;
}
