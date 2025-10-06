// String
"Hello world";
"Hello world";
`Hello world`;
// double quote, single quote, backsticks (template literal)
const myName = "quy";
console.log(myName);
console.log(typeof myName);
const newString1 = "My name is " + myName + " and I'm a developer";
const newString2 = `My name is ${myName} and I'm a developer`;
const newString3 = `My name is ${myName} and I'm a developer
I love coding
`;
console.log(newString1 == newString2);
console.log(newString3);
console.log(newString3.length); // index 0 - 48 -> length = 49

// split
const myStr = "Frontend Developer";
console.log(myStr.split(" ")); // ['Frontend', 'Developer']
console.log(myStr.split("")); // ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(myStr.split("/")); // ['Frontend Developer']

// toLowerCase
// toUpperCase
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());

// startWith
console.log(myStr.startsWith("Front")); //true
console.log(myStr.endsWith("Developer")); //true

// includes
console.log(myStr.includes("Developer")); //true

// indexOf
console.log(myStr.indexOf("e")); // 5

//lastIndexOf
console.log(myStr.lastIndexOf("e")); // 16

//replace
console.log(myStr.replace("Developer", "Dev"));

//repeat
console.log(myStr.repeat(5));

//slice
console.log(myStr.slice(0, 7)); //Fronten
console.log(myStr.slice(0)); //Frontend Developer
console.log(myStr.slice(30)); //
console.log(myStr.slice(-1)); //r
console.log(myStr.slice(-2)); //er
console.log(myStr.slice(-30)); //Frontend Developer

//trim() - remove left and right space
//trimStart() - remove left space
//trimRight() - remove right space

//charAt
console.log(myStr.charAt(0));

//substr(index, length)
console.log(myStr.substr(1, 5)); //ronte

//substring(start index, end index)
console.log(myStr.substring(1, 5)); //ront

//multiple methods
const myStr3 = "   Frontend Developer    ";
console.log(
  `Result: ${myStr3.trim().replace("Developer", "Dev").toLowerCase()}`
);
