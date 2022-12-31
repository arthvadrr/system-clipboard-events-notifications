# system-clipboard-events-notifications
Sends notifications to the os for clipboard events. Meant to provide an audio and/or visual confirmation of clipboard keyboard shortcuts globally.

## Requirements
1. possibly osascript. The notifier declares this as a dependency, however the notification is working on my machine without it, so this needs further testing.

## Installation

### MacOS

## Settings (settings.json)
### "sound"

## Notes
1. Process runs under name "deno"

## TODO
1. Create a settings bash script
1. Add more sounds
1. Find out why the shell isn't closing after launching
1. Create installation bash script
1. Refactor interval loop (performance is too high, I think writing a sleep function to work with await will be more performant)
1. Test on Linux and Windows
1. Figure out how to hack a custom process name (since deno has no API I know of for this)
