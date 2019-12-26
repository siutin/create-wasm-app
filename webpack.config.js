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
          "src/const.js",
          "src/config.js",
          "src/io.js",
          "src/main.js",
          "src/lib.js",
          "src/fpu.js",
          "src/ide.js",
          "src/pci.js",
          "src/floppy.js",
          "src/memory.js",
          "src/dma.js",
          "src/pit.js",
          "src/vga.js",
          "src/ps2.js",
          "src/pic.js",
          "src/rtc.js",
          "src/uart.js",
          "src/hpet.js",
          "src/acpi.js",
          "src/apic.js",
          "src/ioapic.js",
          "src/state.js",
          "src/ne2k.js",
          "src/sb16.js",
          "src/virtio.js",
          "src/bus.js",
          "src/log.js",
          "src/cpu.js",
          "src/translate.js",
          "src/modrm.js",
          "src/string.js",
          "src/arith.js",
          "src/misc_instr.js",
          "src/instructions.js",
          "src/debug.js",
          "src/elf.js"
        ],
        "lib.js": [
          "lib/9p.js",
          "lib/filesystem.js",
          "lib/jor1k.js",
          "lib/marshall.js",
          "lib/utf8.js"
        ],
        "browser.js": [
          "src/browser/screen.js",
          "src/browser/keyboard.js",
          "src/browser/mouse.js",
          "src/browser/speaker.js",
          "src/browser/serial.js",
          "src/browser/network.js",
          "src/browser/lib.js",
          "src/browser/starter.js",
          "src/browser/worker_bus.js",
          "src/browser/dummy_screen.js"
        ]
      }
})
  ],
};
