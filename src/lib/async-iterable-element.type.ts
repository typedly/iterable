/**
 * @description The async iterate element type.
 * @export
 * @template T The type of the async iterable.
 * @template F The fallback type if T is not an async iterable.
 */
export type AsyncIterableElement<T, F = never> = T extends AsyncIterable<infer U> ? U : F;