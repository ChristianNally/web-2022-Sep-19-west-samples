const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

console.log('near the start of the main thread');

rlp.questionAsync('What do you think of Node.js? ')
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your name? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite activity? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What do you listen to while doing that? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which meal is your favourite? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite thing to eat for that meal? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which sport is your absolute favourite? ');
    // throw "error!";
  })
  .then((answer) => {
    answers.push(answer);
    rlp.close();
    const node = answers[0];
    const name = answers[1];
    const activity = answers[2];
    const music = answers[3];
    const meal = answers[4];
    const food = answers[5];
    const sport = answers[6];
    console.log();
    console.log('Your profile is ready!!');
    console.log(`My name is ${name} and I really like ${activity}! I listen to ${music} while eating ${food} during ${meal} and playing ${sport}... and I think Node is ${node}!!`);
    console.log('now the event loop has also run out of code to run.');
  })
  .catch((err)=>{
    console.log(err);
  });

  console.log('end of the main thread');
