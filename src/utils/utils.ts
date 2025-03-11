/**
 * Convert a const to a type
 * example
 * const var = { key: 'value' } as const;
 *
 * type TypeVar = ObjectValues<typeof var>
 *
 */
export type ObjectValues<T> = T[keyof T];
