/**
 * 論理
 */
//% weight=100 color=#0fbc11 icon=""
namespace logic {
    /**
     * TODO: 16進文字列をNUMBERに変換する
     * @param hex 16進文字列。, eg: 1f
     */
    //% block
    export function hex2number(s: string): number {
        let r = 0
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) <= 0x39)
                r = (r << 4) + s.charCodeAt(i) - 0x30
            else if (s.charCodeAt(i) <= 0x46)
                r = (r << 4) + s.charCodeAt(i) - 0x41 + 10
            else
                r = (r << 4) + s.charCodeAt(i) - 0x61 + 10
        }
        return r
    }
    /**
     * TODO: 数値の指定位置簿ビットの01を返す
     * @param n 数値。, eg: 0x0010
     * @param b ビット位置。, eg: 2
     */
    //% block
    export function bittest(n: number, b: number): boolean {
        if ((n & 1 << b) != 0)
            return true
        else
            return false
    }
    /**
     * TODO: 論理積
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function and(a: number, b: number): number {
        return a & b
    }
    /**
     * TODO: 論理和
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function or(a: number, b: number): number {
        return a | b
    }
    /**
     * TODO: 排他的論理和
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function xor(a: number, b: number): number {
        return a ^ b
    }
    /**
     * TODO: 否定
     * @param a 数値。, eg: 0x3221
     */
    //% block
    export function not(a: number): number {
        return ~a
    }
    /**
     * TODO: 左シフト
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function lshift(a: number, b: number): number {
        return a << b
    }
    /**
     * TODO: 右シフト
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function rshift(a: number, b: number): number {
        return a >>> b
    }
    /**
     * TODO: 数値を16進形式で表示する
     * @param n 数値。, eg: 12345
     */
    //% block
    export function ShowNumber(n: number): void {
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 4; x++) {
                if ((n & 1 << (19 - (y * 4 + x))) != 0) led.plot(x + 1, y)
                else led.unplot(x + 1, y)
            }
        }
    }
}
