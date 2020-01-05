// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.

import * as Const from './src/const.js'

for (let key of Object.keys(Const)) {
  window[key] = Const[key]
}

var LOG_LEVEL = LOG_ALL & ~LOG_PS2 & ~LOG_PIT & ~LOG_VIRTIO & ~LOG_9P & ~LOG_PIC &
                          ~LOG_DMA & ~LOG_SERIAL & ~LOG_NET & ~LOG_FLOPPY & ~LOG_DISK;

window.LOG_LEVEL = LOG_LEVEL
                          
import * as Config from './src/config.js'

for (let key of Object.keys(Config)) {
  window[key] = Config[key]
}

import("./index.js")
  .catch(e => console.error("Error importing `index.js`:", e));
