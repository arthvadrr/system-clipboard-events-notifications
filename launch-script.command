SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROCESS=$$

cd $SCRIPT_DIR

CURRENT_PROCESS_PID=$(<process.pid)

if ps -p $CURRENT_PROCESS_PID > /dev/null
then
   kill $CURRENT_PROCESS_PID
fi

sleep 1

nohup deno run --allow-run index.js > /dev/null 2>&1 &

sleep 1

echo $! > process.pid

sleep 1

exit $$