// Type.
import { AnyIterable } from "./any-iterable.type";
/**
 * @description Any iterable constructor, defining how to create instances of any iterables, including both synchronous and asynchronous iterables.
 * @export
 * @template T The type of the iterable instance.
 * @template E The type of elements in the iterable.
 */
export type AnyIterableConstructor<T, E> = new (items?: AnyIterable<E>) => T;