import express from 'express';

const app = express();
const a = 10;
console.log('hello world');

console.log(a);

const ramdom = (x: string) => {
  return x;
};

ramdom('samaksh');
 
interface User {
  first: string;
  second: string;
}

app.listen(3000, () => {
  console.log('listening on port 3000');
});
