// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const lineArray = ['\r|   ', '\r/   ', '\r——  ', '\r\\   ', '\r|   ', '\r/   ', '\r——  ', '\r\\   '];
for (let i in lineArray) {
  setTimeout(() => {
    process.stdout.write(lineArray[i]);
  }, 100 + 200 * i);
};

setTimeout(() => process.stdout.write('\n'), 100 + 200 * lineArray.length);