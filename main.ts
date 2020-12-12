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
     * Convert hexadecimal string to number
     * @param s hex strings, eg: 1f
     */
    //% blockid="hex_strings_To_number" block="hexToNumver %s"
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
     * Logical value of the bit at the specified position
     * @param n number, eg: 0x0010
     * @param b bit position, eg: 2
     */
    //% block="%b in %a"
    export function bittest(n: number, b: number): boolean {
        if ((n & 1 << b) != 0)
            return true
        else
            return false
    }
    /**
     * 数値の指定位置のビットの01を数値で返す
     * @param n number, eg: 0x0010
     * @param b bit position, eg: 2
     */
    //% block
    export function bittestN(n: number, b: number): number {
        if ((n & 1 << b) != 0)
            return 1;
        else
            return 0;
    }
    /**
     * logical and
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a and %b"
    export function and(a: number, b: number): number {
        return a & b
    }
    /**
     * logical or
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a or %b"
    export function or(a: number, b: number): number {
        return a | b
    }
    /**
     * exclusive or
     * @param a number。, eg: 0x3221
     * @param b number。, eg: 0xff33
     */
    //% blockId="xor" block="%a xor %b"
    export function xor(a: number, b: number): number {
        return a ^ b
    }
    /**
     * invert
     * @param a number。, eg: 0x3221
     */
    //% blockID="invert" block="invert %a"
    export function invert(a: number): number {
        return ~a;
    }
    /**
     * shift left
     * @param a number。, eg: 0x3221
     * @param b number。, eg: 0xff33
     */
    //% blockID="shift_left" block="%a << %b"
    export function lshift(a: number, b: number): number {
        return a << b
    }
    /**
     * shift right
     * @param a number。, eg: 0x3221
     * @param b number。, eg: 0xff33
     */
    //% blockId="shift_right" block="%a >> %b"
    export function rshift(a: number, b: number): number {
        return a >>> b
    }
    /**
     * logic function
     * @param a number。, eg: 0x3221
     * @param f func。, eg: func.xor
     * @param b number。, eg: 0xff33
     */
    //% blockID="func" block="%a %f %b"
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
     * show number for hexDecimal format
     * @param n number。, eg: 12345
     */
    //% blockId="show_number" block="show number %n"
    export function ShowNumber(n: number): void {
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 4; x++) {
                if ((n & 1 << (19 - (y * 4 + x))) != 0) led.plot(x + 1, y)
                else led.unplot(x + 1, y)
            }
        }
    }
}
