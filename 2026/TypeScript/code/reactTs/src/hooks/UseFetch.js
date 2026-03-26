import { useEffect, useState } from "react";
export function useFetch(url) {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });
    //useEffec to make fetch request
    return state;
}
//# sourceMappingURL=UseFetch.js.map