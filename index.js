import * as wasm from "v86-wasm";
wasm.greet('Martin');


import {
    CPU_LOG_VERBOSE,
    CPU,
    CPU_EX_P,
    CPU_EX_U,
    CPU_EX_O,
    CPU_EX_Z,
    CPU_EX_D,
    CPU_EX_I
} from './src/cpu.js';
window.CPU = CPU
window.CPU_EX_P = CPU_EX_P
window.CPU_EX_U = CPU_EX_U
window.CPU_EX_O = CPU_EX_O
window.CPU_EX_Z = CPU_EX_Z
window.CPU_EX_D = CPU_EX_D
window.CPU_EX_I = CPU_EX_I

import './src/memory.js';
import './src/state.js';
import './src/modrm.js';
import * as String from'./src/string.js';
window.cmpsb = String.cmpsb;
window.cmpsw = String.cmpsw;
window.cmpsd = String.cmpsd;
window.stosb = String.stosb;
window.stosw = String.stosw;
window.stosd = String.stosd;
window.lodsb = String.lodsb;
window.lodsw = String.lodsw;
window.lodsd = String.lodsd;
window.scasb = String.scasb;
window.scasw = String.scasw;
window.scasd = String.scasd;
window.insb = String.insb;
window.insw = String.insw;
window.insd = String.insd;
window.outsb = String.outsb;
window.outsw = String.outsw;
window.outsd = String.outsd;

import './src/arith.js';
import './src/misc_instr.js';

import './src/instructions.js';

import { IO } from './src/io.js';
window.IO = IO;

import { PCI } from "./src/pci.js";
window.PCI = PCI;

import { DMA } from './src/dma.js';
window.DMA = DMA;

import { Bus } from "./src/bus.js";
window.Bus = Bus;

import * as Log from "./src/log.js";
window.dbg_log = Log.dbg_log;
window.dbg_trace = Log.dbg_trace;
window.dbg_assert = Log.dbg_assert;
window.dbg_assert_failed = Log.dbg_assert_failed;

import "./vendor/src/translate.js";

import "./vendor/src/elf.js";

import './src/debug.js';

