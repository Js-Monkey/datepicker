/** @format */

export default function extend<T, U>(sourceObj: T, targetObj: U): T & U {
  for (const key in sourceObj) {
    // es5
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(targetObj as T & U)[key] = sourceObj[key] as any
  }
  return targetObj as T & U
}
