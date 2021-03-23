function superbowlWin(record) {
    const that_one_year = record.find(won)

    if (that_one_year) {
        return that_one_year.year
    } else {
        return
    }
}

function won(single_record) {
    return single_record.result === "W"
  }  
