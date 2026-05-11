/**
 * @description Represents any iterable collection, either synchronous or asynchronous.
 * @export
 * @template E The type of elements in the iterable.
 */
export type AnyIterable<E> = Iterable<E> | AsyncIterable<E>;
