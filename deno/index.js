import { notify } from "https://deno.land/x/notifier/mod.ts"
import { read } from "https://deno.land/x/copy_paste/mod.ts"
//afplay inc/audio/copy-long.mp3

// Shell
const $sh_setCWD = 'SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )'
const $sh_cd = 'cd $SCRIPT_DIR'
const $sh_playAudio = 'afplay inc/audio/copy-long.mp3'
const selectedAudio = 'copy.mp3'
const cmd = ["afplay", `inc/audio/${selectedAudio}`]
const $sh_subprocess = (cmd) => Deno.run({ cmd })

const textDecoder = new TextDecoder()
let previous = undefined
let useNotification = false

async function Input_Observer () {
  let utf8 = await read()
  const current = textDecoder.decode(utf8);

  if (current !== previous) {
    if (useNotification) {
      await notify({
        title: "Copied the following:",
        message: `"${current}"`,
        sound: "Frog"
      })
    }

    if (!useNotification) {
      await $sh_subprocess(cmd)
    }

    previous = current
  }
}

setInterval(Input_Observer, 100);