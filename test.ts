// tests go here; this will not be compiled when this package is used as a library
let a=logicalFunction.hex2number("3451f");
logicalFunction.ShowNumber(a);
basic.pause(3000);
basic.clearScreen();
basic.showString(logicalFunction.number2hex(a));
basic.pause(3000);
basic.clearScreen();
basic.showNumber(logicalFunction.char2number("a"));
