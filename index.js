var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
start()
// -----------------------------------------------------------------
const summationOfPrime = number =>{
  let counter = 0;
    let Range = require("range");
    const isPrime = num => {
        for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
        return num > 1;
        }
        const array = Range.range(0,number)
    for (let i = 1; i < array.length; i++) {
        let IsPrime = isPrime(i)
        if (IsPrime == true) {
          counter += i; 
        }
        if ((i > 1) & (IsPrime == false)) {
          i++;
        }
    }
    console.log(counter);
  }
//-----------------------------------------------------------------------
summationOfPrime(10)
console.log(end());