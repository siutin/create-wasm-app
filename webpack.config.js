const CopyWebpackPlugin = require("copy-webpack-plugin")
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html']),
    new MergeIntoSingleFilePlugin({
      files: {
        "core.js": [
          "vendor/src/const.js",
          "vendor/src/config.js",
          // "vendor/src/io.js",
          "vendor/src/main.js",
          "vendor/src/lib.js",
          // "vendor/src/fpu.js",
          // "vendor/src/ide.js",
          // "vendor/src/pci.js",
          // "vendor/src/floppy.js",
          // "vendor/src/memory.js",
          // "vendor/src/dma.js",
          // "vendor/src/pit.js",
          // "vendor/src/vga.js",
          // "vendor/src/ps2.js",
          // "vendor/src/pic.js",
          // "vendor/src/rtc.js",
          // "vendor/src/uart.js",
          "vendor/src/hpet.js",
          "vendor/src/acpi.js",
          "vendor/src/apic.js",
          "vendor/src/ioapic.js",
          // "vendor/src/state.js",

          "vendor/src/ne2k.js",
          "vendor/src/sb16.js",
          "vendor/src/virtio.js",
          // "vendor/src/bus.js",
          // "vendor/src/log.js",

          // "vendor/src/cpu.js",
          // "vendor/src/translate.js",
          // "vendor/src/modrm.js",
          // "vendor/src/string.js",
          // "vendor/src/arith.js",
          // "vendor/src/misc_instr.js",
          // "vendor/src/instructions.js",
          // "vendor/src/debug.js",
          // "vendor/src/elf.js"
        ],
        "lib.js": [
          "vendor/lib/9p.js",
          "vendor/lib/filesystem.js",
          "vendor/lib/jor1k.js",
          "vendor/lib/marshall.js",
          "vendor/lib/utf8.js"
        ],
        "browser.js": [
          "vendor/src/browser/screen.js",
          "vendor/src/browser/keyboard.js",
          "vendor/src/browser/mouse.js",
          "vendor/src/browser/speaker.js",
          "vendor/src/browser/serial.js",
          "vendor/src/browser/network.js",
          "vendor/src/browser/lib.js",
          "vendor/src/browser/starter.js",
          "vendor/src/browser/worker_bus.js",
          "vendor/src/browser/dummy_screen.js"
        ]
      }
})
  ],
};
