import { notify } from "https://deno.land/x/notifier/mod.ts"
import { read } from "https://deno.land/x/copy_paste/mod.ts"

const textDecoder = new TextDecoder();
let previous = undefined

async function Input_Observer () {
  let utf8 = await read()
  const current = textDecoder.decode(utf8);

  if (previous === undefined) {
    previous = current
    return
  }

  if (current !== previous) {
    await notify({
      title: "Copied the following:",
      message: `"${current}"`,
      sound: "Frog"
    })

    console.table(notify);
    previous = current
  }
}

setInterval(Input_Observer, 200);