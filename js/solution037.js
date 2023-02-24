function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  seconds -= hours * 3600;
  const minutes = Math.floor(seconds / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  seconds -= minutes * 60;
  
  seconds = seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${hours}:${minutes}:${seconds}`;
}

humanReadable(3600);
