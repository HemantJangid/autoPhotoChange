// let a = 4,
//   b = 24;

// // 11

// function printPrimes(a, b) {
//   for (let i = a; i <= b; i++) {
//     let isPrime = true;
//     for (let j = 2; j < Math.floor(i / 2); j++) {
//       if (i % j == 0) isPrime = false;
//     }

//     if (isPrime) console.log(i);
//   }
// }

// printPrimes(a, b);

// You are given a number x. 2. You are given another number n. 3. You are required to calculate x raised to the power n.

// let x = 2,
//   n = 6;

// function xRaisedToN(x, n) {
//   let ans = 1;

//   if (n == 1) return x;

//   if (!(n % 2 == 0)) {
//     n = n - 1;
//     ans = ans * x;
//   }

//   let prevAns =
//     xRaisedToN(x, Math.floor(n / 2)) * xRaisedToN(x, Math.floor(n / 2));

//   ans = ans * prevAns;

//   return ans;
// }

// console.log(xRaisedToN(x, n));

function mine(lastName, something) {
  let a = 0;
  console.log(a);
  console.log(this.name, lastName, something);
}

let mine2 = mine.bind({ name: "hemant" });
mine.call({ name: "hemant" }, "jangid", "hello");
mine.apply({ name: "hemant" }, ["jangid", "hello"]);
console.log(mine2("jangid", "hello"));
