export const extract_opcode_name = (opcode) => {
    // Opcode nibbles for matching
    let x = (opcode & 0x0f00) >> 8;
    let y = (opcode & 0x00f0) >> 4;

    // Common parts of opcode
    let nnn = opcode & 0x0fff;
    let nn = opcode & 0x00ff;
    let n = opcode & 0x000f;

    if (opcode === 0x00e0) return "CLS";
    if (opcode === 0x00ee) return "RET";
    if (between(opcode, 0x1000, 0x1fff)) return `JP 0x${nnn.toString(16)}`;
    if (between(opcode, 0x2000, 0x2fff)) return `CALL 0x${nnn.toString(16)}`;
    if (between(opcode, 0x3000, 0x3fff)) return `SE V${n} 0x${nn.toString(16)}`;
    if (between(opcode, 0x4000, 0x4fff))
        return `SNE V${n} 0x${nn.toString(16)}`;
    if (between(opcode, 0x5000, 0x5fff))
        return `SE V${x.toString(16)} V${y.toString(16)}`;
    if (between(opcode, 0x6000, 0x6fff))
        return `LD V${x.toString(16)} 0x${nn.toString(16)}`;
    if (between(opcode, 0x7000, 0x7fff))
        return `ADD V${x.toString(16)} 0x${nn.toString(16)}`;
    if (between(opcode, 0x8000, 0x8fff)) {
        if (n === 0x0) return `LD V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x1) return `OR V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x2) return `AND V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x3) return `XOR V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x4) return `ADD V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x5) return `SUB V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0x6) return `SHR V${x.toString(16)}`;
        if (n === 0x7) return `SUBN V${x.toString(16)} V${y.toString(16)}`;
        if (n === 0xe) return `SHL V${x.toString(16)}`;
    }
    if (between(opcode, 0x9000, 0x9fff))
        return `SNE V${x.toString(16)} V${y.toString(16)}`;
    if (between(opcode, 0xa000, 0xafff)) return `LDI 0x${nnn.toString(16)}`;
    if (between(opcode, 0xb000, 0xbfff)) return `JP V0 0x${nnn.toString(16)}`;
    if (between(opcode, 0xc000, 0xcfff)) return `RND 0x${nn.toString(16)}`;
    if (between(opcode, 0xd000, 0xdfff))
        return `DRW V${x.toString(16)} V${y.toString(16)} ${n}`;
    if (between(opcode, 0xe000, 0xefff)) {
        if (nn === 0x9e) return `SKP V${x.toString(16)}`;
        if (nn === 0xa1) return `SKNP V${x.toString(16)}`;
    }
    if (between(opcode, 0xf000, 0xffff)) {
        if (nn === 0x07) return `LD V${x.toString(16)} DT`;
        if (nn === 0x0a) return `LD V${x.toString(16)} K`;
        if (nn === 0x15) return `LD DT V${x.toString(16)}`;
        if (nn === 0x18) return `LD ST V${x.toString(16)}`;
        if (nn === 0x1e) return `ADD I V${x.toString(16)}`;
        if (nn === 0x29) return `LD F V${x.toString(16)}`;
        if (nn === 0x33) return `LD B V${x.toString(16)}`;
        if (nn === 0x55) return `LD I V${x.toString(16)}`;
        if (nn === 0x65) return `LD V${x.toString(16)} I`;
    }

    return "-";
};

const between = (x, min, max) => {
    return x >= min && x <= max;
};
