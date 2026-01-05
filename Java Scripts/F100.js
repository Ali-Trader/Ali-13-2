// تمرین if

// var teuori= prompt("نمره تئوری خودت رو وارد کن:");
// var amali= prompt("نمره عملی خودت رو وارد کن");

// if (teuori>=10 && amali>=10) {
//     alert("دمت گرم قبولی")
// }

// else if(teuori>=8 || amali>=12){
//     alert(" با این حال بازم دمت گرم قبولی")
// }

// else {
//     alert("ای بابا مردود شدی که")
// }

//

// تمرین ماشین حساب

// var number1=prompt("یک عددی رو وارد کن");
// var number2=prompt("عدد  دیگه ای هم وارد کن");

// var sum=(number1+number2);
// var menha=(number1-number2);
// var taghsim=(number1/number2);
// var zarb=(number1*number2);

// alert("sum")

//

// BMI

// var weight = prompt("لطفا وزن خود را به کیلوگرم وارد کنید:");

// var height = prompt("لطفا قد خود را به سانتیمتر وارد کنید:");
// var gender = prompt("لطفا جنسیت خودتان را وارد کنید ، آقا یا خانم:");

// var uweight = Number(weight);
// var uheight = Number(height) / 100;

// var BMI = uweight / uheight ** 2;

// alert(BMI);

// if (gender == "آقا") {
//   if (BMI >= 18 && BMI < 25) {
//     alert("وزن شما متناسب است");
//   } else if (BMI < 18) {
//     alert("شما کمبود وزن دارید");
//   } else {
//     alert("شما دارای اضافه وزن هستید");
//   }
// } else if (gender == "خانم") {
//   if (BMI >= 20 && BMI < 28) {
//     alert("وزن شما متناسب است");
//   } else if (BMI < 20) {
//     alert("شما کمبود وزن دارید");
//   } else {
//     alert("شما دارای اضافه وزن هستید");
//   }
// }

//

//

// function nam() {
//     alert("salam ali");
// }

// nam();

//

// var yourName = prompt("please enter your name");
// var age = prompt("please enter your age");
// var bool = confirm("enter ok or cancel");

// function myName(a, b, c) {
//   if (c === true) {
//     alert(`my name is ${a} and my age is ${b} years old`);
//   } else {
//     alert("error............!");
//   }
// }

// myName(yourName, age, bool);

// chatGPT

// var yourName = prompt("please enter your name:");
// var age = Number(prompt("please enter your age:"));
// var bool = confirm("enter ok or cancel:");

// function myName(a, b, c) {
//   if (c === true) {
//     if (b >= 18) {
//       alert(`welcome ${a}, you are adult`);
//     } else {
//       alert(`sorry ${a}, you are under 18 years old`);
//     }
//   } else {
//     alert("operation canceled");
//   }
// }

// myName(yourName, age, bool);

//

// var num1 = Number(prompt("enter number1 :"));

// var sumstring = "+";
// var mintring = "-";
// var mulstring = "*";
// var divstring = "/";

// var operator = prompt(`please type operator :

// ${sumstring}
// ${mintring}
// ${mulstring}
// ${divstring}

// `);

// var num2 = Number(prompt("enter number2 :"));

// function result(a) {
//   return `your answer is ${a}`;
//   if (operator == sumstring) {
//     alert(result(num1 + num2));
//   } else if (operator == mintring) {
//     alert(result(num1 - num2)); // برای تفریق
//   } else if (operator == mulstring) {
//     alert(result(num1 * num2)); // برای ضرب
//   } else if (operator == divstring) {
//     if (num2 !== 0) {
//       // چک کردن تقسیم بر صفر
//       alert(result(num1 / num2)); // برای تقسیم
//     } else {
//       alert("Cannot divide by zero!"); // جلوگیری از تقسیم بر صفر
//     }
//   } else {
//     alert("your tyoe is wrong...!"); // اگر اپراتور اشتباه وارد بشه
//   }
// }

// var num1 = Number(prompt("Enter number 1:")); // اصلاح به Number(prompt(...))

// var sumstring = "+";
// var minstring = "-";
// var mulstring = "*";
// var divstring = "/";

// var operator = prompt(`Please type operator :

// ${sumstring}
// ${minstring}
// ${mulstring}
// ${divstring}
// `);

// var num2 = Number(prompt("Enter number 2:")); // اصلاح به Number(prompt(...))

// function result(a) {
//   return `Your answer is ${a}`;
// }

// // حالا عملیات مختلف رو بررسی می‌کنیم:
// if (operator == sumstring) {
//   alert(result(num1 + num2)); // برای جمع
// } else if (operator == minstring) {
//   alert(result(num1 - num2)); // برای تفریق
// } else if (operator == mulstring) {
//   alert(result(num1 * num2)); // برای ضرب
// } else if (operator == divstring) {
//   if (num2 !== 0) {
//     // چک کردن تقسیم بر صفر
//     alert(result(num1 / num2)); // برای تقسیم
//   } else {
//     alert("Cannot divide by zero!"); // جلوگیری از تقسیم بر صفر
//   }
// } else {
//   alert("Your type is wrong...!"); // اگر اپراتور اشتباه وارد بشه
// }










// 



113

