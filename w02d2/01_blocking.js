// synchronous - code that executes one line after the previous

console.log('top of the file');

for (let i = 0; i < 10; i++) {
  const date = new Date();
  console.log(date);
}

console.log('end of file');
