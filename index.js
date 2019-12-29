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

// ----------------------------------------------------------------

import { FPU } from './src/fpu.js';
window.FPU = FPU;

import { PIT } from './src/pit.js';
window.PIT = PIT;

import { PIC } from "./src/pic.js";
window.PIC = PIC;

import * as RTC from './src/rtc.js';
window.RTC = RTC.RTC;
window.CMOS_RTC_SECONDS  = RTC.CMOS_RTC_SECONDS;
window.CMOS_RTC_SECONDS_ALARM  = RTC.CMOS_RTC_SECONDS_ALARM;
window.CMOS_RTC_MINUTES  = RTC.CMOS_RTC_MINUTES;
window.CMOS_RTC_MINUTES_ALARM  = RTC.CMOS_RTC_MINUTES_ALARM;
window.CMOS_RTC_HOURS  = RTC.CMOS_RTC_HOURS;
window.CMOS_RTC_HOURS_ALARM  = RTC.CMOS_RTC_HOURS_ALARM;
window.CMOS_RTC_DAY_WEEK  = RTC.CMOS_RTC_DAY_WEEK;
window.CMOS_RTC_DAY_MONTH  = RTC.CMOS_RTC_DAY_MONTH;
window.CMOS_RTC_MONTH  = RTC.CMOS_RTC_MONTH;
window.CMOS_RTC_YEAR  = RTC.CMOS_RTC_YEAR;
window.CMOS_STATUS_A  = RTC.CMOS_STATUS_A;
window.CMOS_STATUS_B  = RTC.CMOS_STATUS_B;
window.CMOS_STATUS_C  = RTC.CMOS_STATUS_C;
window.CMOS_STATUS_D  = RTC.CMOS_STATUS_D;
window.CMOS_RESET_CODE  = RTC.CMOS_RESET_CODE;
window.CMOS_FLOPPY_DRIVE_TYPE  = RTC.CMOS_FLOPPY_DRIVE_TYPE;
window.CMOS_DISK_DATA  = RTC.CMOS_DISK_DATA;
window.CMOS_EQUIPMENT_INFO  = RTC.CMOS_EQUIPMENT_INFO;
window.CMOS_MEM_BASE_LOW  = RTC.CMOS_MEM_BASE_LOW;
window.CMOS_MEM_BASE_HIGH  = RTC.CMOS_MEM_BASE_HIGH;
window.CMOS_MEM_OLD_EXT_LOW  = RTC.CMOS_MEM_OLD_EXT_LOW;
window.CMOS_MEM_OLD_EXT_HIGH  = RTC.CMOS_MEM_OLD_EXT_HIGH;
window.CMOS_DISK_DRIVE1_TYPE  = RTC.CMOS_DISK_DRIVE1_TYPE;
window.CMOS_DISK_DRIVE2_TYPE  = RTC.CMOS_DISK_DRIVE2_TYPE;
window.CMOS_DISK_DRIVE1_CYL  = RTC.CMOS_DISK_DRIVE1_CYL;
window.CMOS_DISK_DRIVE2_CYL  = RTC.CMOS_DISK_DRIVE2_CYL;
window.CMOS_MEM_EXTMEM_LOW  = RTC.CMOS_MEM_EXTMEM_LOW;
window.CMOS_MEM_EXTMEM_HIGH  = RTC.CMOS_MEM_EXTMEM_HIGH;
window.CMOS_CENTURY  = RTC.CMOS_CENTURY;
window.CMOS_MEM_EXTMEM2_LOW  = RTC.CMOS_MEM_EXTMEM2_LOW;
window.CMOS_MEM_EXTMEM2_HIGH  = RTC.CMOS_MEM_EXTMEM2_HIGH;
window.CMOS_BIOS_BOOTFLAG1  = RTC.CMOS_BIOS_BOOTFLAG1;
window.CMOS_BIOS_DISKTRANSFLAG  = RTC.CMOS_BIOS_DISKTRANSFLAG;
window.CMOS_BIOS_BOOTFLAG2  = RTC.CMOS_BIOS_BOOTFLAG2;
window.CMOS_MEM_HIGHMEM_LOW  = RTC.CMOS_MEM_HIGHMEM_LOW;
window.CMOS_MEM_HIGHMEM_MID  = RTC.CMOS_MEM_HIGHMEM_MID;
window.CMOS_MEM_HIGHMEM_HIGH  = RTC.CMOS_MEM_HIGHMEM_HIGH;
window.CMOS_BIOS_SMP_COUNT  = RTC.CMOS_BIOS_SMP_COUNT;

import { IO } from './src/io.js';
window.IO = IO;

import { PCI } from "./src/pci.js";
window.PCI = PCI;

import { DMA } from './src/dma.js';
window.DMA = DMA;

import { Bus } from "./src/bus.js";
window.Bus = Bus;

import { VGAScreen } from "./src/vga.js";
window.VGAScreen = VGAScreen;

import { PS2 } from "./src/ps2.js";
window.PS2 = PS2;

import { FloppyController } from "./src/floppy.js";
window.FloppyController = FloppyController;

import { IDEDevice } from './src/ide.js';
window.IDEDevice = IDEDevice;

import * as Log from "./src/log.js";
window.dbg_log = Log.dbg_log;
window.dbg_trace = Log.dbg_trace;
window.dbg_assert = Log.dbg_assert;
window.dbg_assert_failed = Log.dbg_assert_failed;

import "./vendor/src/translate.js";

import "./vendor/src/elf.js";

import './src/debug.js';

