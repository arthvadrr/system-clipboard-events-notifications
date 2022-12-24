import { notify } from "https://deno.land/x/notifier/mod.ts"
import { keyboardInput, beginListeningToKeyboard, stopListeningToKeyboard } from "https://deno.land/x/deno_input/mod.ts";

async function Input_Observer () {
  // Keep the script alive
  setInterval(() => {}, 1 << 30)

  beginListeningToKeyboard();

  for await ( const hit of keyboardInput() ) {
      console.log( hit );
      if ( hit.type == 'text' && hit.controlPressed && hit.text == 'c' )
          break;
  }

  stopListeningToKeyboard();

  await notify("This is a title", "This is a message")
}

Input_Observer()