interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
export declare function useFetch<T>(url: string): UseFetchResult<T>;
export {};
//# sourceMappingURL=UseFetch.d.ts.map