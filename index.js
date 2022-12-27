import { notify } from "https://deno.land/x/notifier/mod.ts"
import { readKeypress } from "https://deno.land/x/keypress@0.0.8/mod.ts";
Deno.setRaw = Deno.stdin.setRaw

async function Input_Observer () {
  // Keep the script alive
  setInterval(() => {}, 1 << 30)

  for await (const keypress of readKeypress()) {
    console.log(keypress);

    if (keypress.ctrlKey && keypress.key === 'c') {
        Deno.exit(0);
    }
  }

  await notify("This is a title", "This is a message")
}

Input_Observer()