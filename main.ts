/**
 * logic
 */
//% weight=100 color=#0fbc11 icon=""
namespace logic {
    export enum lFunc{
        //% block=xor
        xor=0,
        //% block=or
        or=1,
        //% block=and
        and=2,
        //% block="<<"
        shiftLeft=4,
        //% block=">>"
        shiftRight=5
    }
    /**
     * convert hex strings to number
     * @param hex hex strings。, eg: 1f
     */
    //% blockid="hex_Strings_To_Number" block="hexToNumver %s"
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
     * 数値の指定位置のビットの01を論理で返す
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
     * 数値の指定位置のビットの01を数値で返す
     * @param n 数値。, eg: 0x0010
     * @param b ビット位置。, eg: 2
     */
    //% block
    export function bittestN(n: number, b: number): number {
        if ((n & 1 << b) != 0)
            return 1;
        else
            return 0;
    }
    /**
     * 論理積
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function and(a: number, b: number): number {
        return a & b
    }
    /**
     * 論理和
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function or(a: number, b: number): number {
        return a | b
    }
    /**
     * 排他的論理和
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function xor(a: number, b: number): number {
        return a ^ b
    }
    /**
     * 否定
     * @param a 数値。, eg: 0x3221
     */
    //% block
    export function not(a: number): number {
        return ~a
    }
    /**
     * 左シフト
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function lshift(a: number, b: number): number {
        return a << b
    }
    /**
     * 右シフト
     * @param a 数値。, eg: 0x3221
     * @param b 数値。, eg: 0xff33
     */
    //% block
    export function rshift(a: number, b: number): number {
        return a >>> b
    }
    /**
     * 論理計算
     * @param a 数値。, eg: 0x3221
     * @param f 演算子。, eg: func.xor
     * @param b 数値。, eg: 0xff33
     */
    //% block="%a %f %b"
    export function func(a: number,f: lFunc, b: number): number {
        switch(f){
            case lFunc.xor:return xor(a,b);break;
            case lFunc.or: return or(a, b); break;
            case lFunc.and: return and(a, b); break;
            case lFunc.shiftLeft: return lshift(a, b); break;
            case lFunc.shiftRight: return rshift(a, b); break;
        }
        return a >>> b
    }
    /**
     * 数値を16進形式で表示する
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
