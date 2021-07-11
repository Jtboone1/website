/*  Keypad:
 *  1 2 3 4
 *  q w e r
 *  a s d f
 *  z x c v
 */

export const handleKeyDown = (e, chip8) => {
    switch (e.key) {
        case "1":
            chip8.set_key_down(0x1);
            break;
        case "2":
            chip8.set_key_down(0x2);
            break;
        case "3":
            chip8.set_key_down(0x3);
            break;
        case "4":
            chip8.set_key_down(0xc);
            break;
        case "a":
            chip8.set_key_down(0x7);
            break;
        case "s":
            chip8.set_key_down(0x8);
            break;
        case "d":
            chip8.set_key_down(0x9);
            break;
        case "f":
            chip8.set_key_down(0xe);
            break;
        case "q":
            chip8.set_key_down(0x4);
            break;
        case "w":
            chip8.set_key_down(0x5);
            break;
        case "e":
            chip8.set_key_down(0x6);
            break;
        case "r":
            chip8.set_key_down(0xd);
            break;
        case "z":
            chip8.set_key_down(0xa);
            break;
        case "x":
            chip8.set_key_down(0x0);
            break;
        case "c":
            chip8.set_key_down(0xb);
            break;
        case "v":
            chip8.set_key_down(0xf);
            break;
        default:
            break;
    }
};

export const handleKeyUp = (e, chip8) => {
    switch (e.key) {
        case "1":
            chip8.set_key_up(0x1);
            break;
        case "2":
            chip8.set_key_up(0x2);
            break;
        case "3":
            chip8.set_key_up(0x3);
            break;
        case "4":
            chip8.set_key_up(0xc);
            break;
        case "a":
            chip8.set_key_up(0x7);
            break;
        case "s":
            chip8.set_key_up(0x8);
            break;
        case "d":
            chip8.set_key_up(0x9);
            break;
        case "f":
            chip8.set_key_up(0xe);
            break;
        case "q":
            chip8.set_key_up(0x4);
            break;
        case "w":
            chip8.set_key_up(0x5);
            break;
        case "e":
            chip8.set_key_up(0x6);
            break;
        case "r":
            chip8.set_key_up(0xd);
            break;
        case "z":
            chip8.set_key_up(0xa);
            break;
        case "x":
            chip8.set_key_up(0x0);
            break;
        case "c":
            chip8.set_key_up(0xb);
            break;
        case "v":
            chip8.set_key_up(0xf);
            break;
        default:
            break;
    }
};
