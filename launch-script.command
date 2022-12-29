SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
lsappinfo setinfo --name "system-clipboard-events-notifications"
echo $$
echo $0
if [[ `pgrep -f $0` != "$$" ]]; then
        echo "Another instance of shell already exist! Exiting"
        exit
fi
cd $SCRIPT_DIR
nohup deno run --allow-run index.js &
echo $$
exit 0