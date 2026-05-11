/**
 * @description The element type of an iterable.
 * @export
 * @template T The type of the iterable.
 * @template F The fallback type if T is not an iterable.
 */
export type IterableElement<T, F = never> = T extends Iterable<infer U> ? U : F;