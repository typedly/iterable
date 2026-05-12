/**
 * @description Iterable constructor, defining how to create instances of iterables.
 * @export
 * @template T The type of the iterable instance.
 * @template E The type of elements in the iterable.
 */
export type IterableConstructor<T, E> = new (items?: Iterable<E>) => T;