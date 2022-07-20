// code your solution here

function superbowlWin(record) {
    return (record.find(y => y.result === "W") || {}).year || undefined;
}