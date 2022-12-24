import { notify } from "https://deno.land/x/notifier/mod.ts"

async function Pasteboard_Observer () {
  setInterval(() => {}, 1 << 30)
  
  await notify("This is a title", "This is a message")
}