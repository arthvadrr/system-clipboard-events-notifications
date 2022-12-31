SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR

CURRENT_PROCESS_PID=$(<process.pid)
if ps -p $CURRENT_PROCESS_PID > /dev/null
then
   kill $CURRENT_PROCESS_PID
fi