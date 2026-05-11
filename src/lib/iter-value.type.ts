// Type.
import { IterableElement } from "./iterable-element.type";
/**
 * @description The iterated value type.
 * @export
 * @template T The type of iterated value constrained by the `Iterable` type.
 * @template F The fallback type if T is not an iterable.
 */
export type IterValue<T, F = never> = IterableElement<T, F>;