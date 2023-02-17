function bingo(ticket, win) {
  let wins = 0;
  for (const item of ticket) {
    let mini_win = false;
    for (i = 0; i < item[0].length; i++) {
      const char = item[0].charCodeAt(i);
      if (char === item[1]) {
        mini_win = true;
      }
    }
    if (mini_win === true) {
      wins++;
    }
  }
  if (wins >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}
