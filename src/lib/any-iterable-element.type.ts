/**
 * @description The element type of an iterable or async iterable.
 * @export
 * @template T The type of the iterable or async iterable.
 * @template F The fallback type if T is not an iterable or async iterable.
 */
export type AnyIterableElement<T, F = never> = T extends Iterable<infer E> ? E : T extends AsyncIterable<infer E> ? E : F;