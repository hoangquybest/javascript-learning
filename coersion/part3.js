// Parse to number with parseInt/parse
console.log(parseFloat("4.8"));
console.log(parseInt("4"));
console.log(parseInt(false)); // NaN

// Number parsed from string
console.log(Number("4")); // 4
console.log(Number("4.7")); // 4.7
console.log(Number("abc")); // NaN
console.log(Number("")); //0

// Number parse from null
console.log(Number(null)); // 0

// Number parsed from undefined
console.log(Number(undefined)); // NaN

// Number parsed from boolean
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number parsed from NaN
console.log(Number(NaN)); // NaN

// String(value)
console.log(String(4.5)); // 4.5
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(false)); // "false"

// Boolean(value)
// falsy
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(false)); //false
console.log(Boolean(NaN)); //false
// truthy
console.log(Boolean(true));

// type coercion
// +
console.log(1 + 2);
console.log(10 + 20);
console.log(10 + "20"); // "1020" -> String(10)
console.log("10" + 20); // "2010"
console.log(10 + 10 + "20"); // "2020"
console.log("10" + 10 + 20); // "101020"
console.log(null + "20"); // "null20"

// -
console.log(10 - "20"); // -10 -> Number("20")
console.log(null - "20"); // -20
console.log("20" - null); // 20
console.log(undefined - "20"); // NaN
console.log("20" - undefined); // NaN
console.log("20" - false); // 20
console.log(false - "20"); // -20

// /
console.log(10 / "20"); // 0.5
console.log(null / "20"); // 0
console.log("20" / null); // Infinity -> Number(null)
console.log(undefined / "20"); // NaN
console.log("20" / undefined); // NaN
console.log("20" / false); // Infinity
console.log(false / "20"); // 0

// *
console.log(10 * "20"); // 200
console.log(null * "20"); // 0
console.log("20" * null); // 0
console.log(undefined * "20"); // NaN -> Number(underfined)
console.log("20" * undefined); // NaN
console.log("20" * false); // 0
console.log(false * "20"); // 0
console.log(NaN * "20"); // NaN

// > <
console.log("50" > 20); //true
console.log(null > 20); //false
console.log(undefined > 20); //false
console.log("" > 20); //false
console.log(false > 20); //false
console.log(NaN > 20); //false

console.log("50" < 20); //false
console.log(null < 20); //true
console.log(undefined < 20); //false
console.log("" < 20); //true
console.log(false < 20); //true
console.log(NaN < 20); //false

// == loose equality và === strict equality
console.log(10 == "20"); // Number(20) -> type coersion -> false
console.log(true == 1); // Number(true) -> type coersion -> true
console.log(undefined == 1); // false
console.log(null == 0); // false
console.log(undefined == null); // true
console.log(false == null); // false
console.log(false == 1); // Number(false) -> type coersion -> false

// prompt, confirm, alert
// alert("Your website has been hacked");
// const yourName = prompt("Vui lòng nhập tên của bạn", "");
// console.log(yourName);
// const isYourMoney = confirm("Đây có phải là tiền của bạn hay không?")
// console.log(isYourMoney) // true/false
