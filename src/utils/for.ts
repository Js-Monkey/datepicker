export default function _for<T>(cb: (idx: number) => T, number: number): T[] {
    return Array.from({length: number}).map((_, idx) => cb(idx))
}
