const readline = require('readline');
const utf8Bar = require('./index');

// const chars = 10;
// const max = 100;
// for (let i = 0; i <= max; i++) {
// console.log(utf8Bar(chars, i / max));
// }

const stream = process.stdout;

const draw = (percentage) => {
  readline.cursorTo(stream, 0, null);

  // write output
  stream.write(utf8Bar(21, percentage));

  // clear to the right of cursor
  readline.clearLine(this.stream, 1);
};

let cnt = 0;
let int = setInterval(() => {

  draw(cnt / 100);

  cnt++;
  if (cnt > 100) {
    clearInterval(int);
  }
}, 40);



