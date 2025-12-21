// var num1 = prompt("inter number1");
// var num2 = prompt("inter number2");

// var typenumber1=Number (num1);
// var typenumber2=Number (num2);

// var result=typenumber1*typenumber2;

// alert (result);

// //

// var x = prompt("inter number1");
// var y = prompt("inter number2");

// alert(Number(x) % Number(y) == 0);

// //

// //

// var x =prompt("عدد رو وارد کنید")
// var xtype=Number(x)

// if (xtype%2==0) {
//     alert("زوج")
// } else {
//     alert("فرد")
// }

//

// var wight = prompt("وزن خود را وارد کنید:");
// var height = prompt("قد خود را وارد کنید:");

// var wightType = Number(wight);
// var heightType = Number(height);

// var resultheight = heightType * heightType;
// var BMI = wightType / resultheight;

// if (BMI > 30) {
//   alert("چاقی");
// } else {
//   alert("خوب");
// }

//

// var x = prompt("سنتو وارد کن:");
// var xType = Number(x);

// if (xType >= 18) {
//   alert("سن قانونی داری");
// } else if (xType >= 12) {
//   alert("نوجوانی");
// } else if (xType < 12) {
//   alert("کودکی");
// } else {
//   alert("خردسالی");
// }

//

// var weight = prompt("سن خود را وارد کنید:");
// var weightType = Number(weight);

// if (weightType < 25) {
//   alert("ایده آل");
// } else if (weightType < 30) {
//   alert("اضافه وزن");
// } else if (weightType < 40) {
//   alert("چاق");
// } else {
//   alert("چاقی مفرط");
// }

//

// var x = prompt("inter x");
// var a = Number(x);
// var y = prompt("inter y");
// var b = Number(y);
// var z = prompt("inter z");
// var c = Number(z);

// if (a < b + c && b < a + c && c < a + b) {
//   alert("مثلث");
// }
// if (a <= 0 || b <= 0 || c <= 0) {
//   alert("اعداد باید بزرگتر از صفر باشند");
// } else {
//   alert("دوباره سعی کن");
// }

//

// var myName = prompt("نام را وارد کنید:");

// if (myName === null) {
//   alert("چیزی وارد نکردی");
// } else {
//   myName = myName.trim();

//   switch (myName) {
//     case "علی":
//       alert("علی بزرگتر از همه است.");
//       break;
//     case "سعید":
//       alert("سعید دومیه.");
//       break;
//     case "رضا":
//       alert("رضا سومیه.");
//       break;
//     case "نیما":
//       alert("ته تقاریه.");
//       break;
//     default:
//       alert("اسمش نبود");
//   }
// }

//

// var myNumber=Math.round(4.50);
// alert(myNumber)

//

// for (x = 1; x <= 10; x++) {
//   for (y = 1; y <= 10; y++) {
//     document.write("<div>");
//     document.write(x * y);
//     document.write("</div>");
//   }
//   document.write("<br/>");
// }

// 120

// var x = 0;
// var y = 0;

// while (x < 10) {
//   while (y < 10 - x) {
//     document.write(" * ");
//     y++;
//   }
//   y=0;
//   document.write("<br>");
//   x++;
// }

//

// var x=1;
// while(x<=7){

//     var y =1;
//     while(y<=x){

//         document.write(" * ");
//         y++;
//     }

//     document.write("<br>");
//     x++;
// }

//
// 123

// var userName = [
//   "ali",
//   "mmd",
//   "sara",
//   "fatemeh",
//   "saeid",
//   "reza",
//   "nima",
//   "zahra",
//   "marzi",
// ];
// var userFamily = [
//   "ahmadi",
//   "mokhtari",
//   "barati",
//   "goli",
//   "ahmadi",
//   "ahmadi",
//   "ahmadi",
//   "zahedi",
//   "goli",
// ];
// document.write("<table border='1' width='300'>");
// document.write("<tr><th>master</th><th>name</th><th>family</th></tr>");
// for (i = 0; i < userName.length; i++) {
//   document.write(
//     "<tr>    <td>" +
//       (1 + i) +
//       "</td>   <td>" +
//       userName[i] +
//       "</td>      <td>" +
//       userFamily[i] +
//       "</td>           </tr>"
//   );
// }
// document.write("</table>");

//

// 123 دوباره

// var firstName = [
//   "hosien",
//   "marziyeh",
//   "ali",
//   "fatemeh",
//   "saeid",
//   "zahra",
//   "reza",
//   "marzi",
//   "nima",
// ];
// var lastName = [
//   "ahmadi",
//   "mohajeri",
//   "ahmadi",
//   "goli",
//   "ahmadi",
//   "zahedi",
//   "ahmadi",
//   "goli",
//   "ahmadi",
// ];
// document.write("<table border='1' width='300' >");
// document.write(
//   "<tr> <th>number</th> <th>firstName</th> <th>lastName</th> </tr>"
// );
// for (i = 0; i < firstName.length; i++) {
//   document.write(
//     " <tr>  <td> " +
//       (1 + i) +
//       " </td>   <td> " +
//       firstName[i] +
//       " </td>   <td> " +
//       lastName[i] +
//       " </td>         </tr>   "
//   );
// }
// document.write("</table>");

//

// 124

// var showFullName=[["ali","ahmadi","39"],["fatemeh","goli","38"]];
// document.write(showFullName[1][1]);

//

// var myList=[9,4,8,1,44,71,54,7,2];
// var a=myList.sort(function(b,c){return b-c});
// document.write(a);

//

// var myList = [];
// var userNumber = 0;

// while (userNumber != -1) {
//   userNumber = Number(prompt("inter number"));
//   if (userNumber != -1) myList.push(userNumber);
// }
// var a = myList.sort(function (b, c) {
//   return b - c;
// });

// document.write(a);

//

// var myList = [];
// var userName = 0;

// while (userName != "ok") {
//   userName = prompt("inter name");
//   if (userName !="ali") {
//     myList.push(userName);
//   }
// }
// var mysort = myList.sort();
// document.write(mysort);

// 


// 134 مونده


