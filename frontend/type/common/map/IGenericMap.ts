export type IGenericMap<KEYS extends string, VALUE> = {
    [key in KEYS]: VALUE;
}
