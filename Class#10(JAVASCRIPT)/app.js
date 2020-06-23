// Ch:09  PROMPT
//USED FOR TAKING INPUT



// var name=prompt("Enter your name","your name");
// var age =parseInt(prompt("Enter your age","your age"));
// document.write("My name is: "+name+"<br>"+"I am "+age+"years old" );

// var a =prompt("Enter your number","your value")
// var b= a + 10;
// alert(b)
//output:310 (both concatenate )

// var a =parseInt(prompt("Enter your number","your value"))//(76)
// //parseInt used for number declaration
// //parsefloat used for Float number declaration
// var b= a + 10;
// alert(b)
// //output:86

// var x ="Enter your num";
// var y ="Enter your age";
// var a= +prompt(x,y);
// //+prompt is used to take input as number
// var b= a+10;
//document.write(b);


 //-----ch:10,11,12 if else-----


 //= (Assigning operator)
 // == (Actual Equal to  JavaScript)
// var age =16;
// if(age == 28){
//     alert("your age is less")
// }
// else{
//     alert("yo are not with this age")
// }

// var age =+prompt("Enter your age is:  ","your age is");
// if(age == 14 ){
//     alert("your age is equal")
// }
// else if(age < 14){
//     alert("you age is less")
// }
// else{
//     alert("your age is more ")
// }

// var age =+prompt("Enter your age");
// var gender=prompt("Enter your gender")
// if(age > 18 && gender =="male"){
//     alert("You are allow to ride")
// }
// else {
//     alert("your are not allow to ride")
// }

// var age =+prompt("Enter your age");
// var gender=prompt("Enter your gender")
// if(age > 18 || gender =="male"){
//     alert("You are allow to ride")
// }
// else {
//     alert("your are not allow to ride")
// }

// var a = "5";
// // ==== triple is used to check data type
// if(a === 5){
//     alert("True")
// }
// else {
//     alert("False")
// }


// var x =5;
// var y=10;
// var a=30;
// var b=15;
// if(x+y === a-b){
//     alert("Correct")
// }
// else{
//     alert("Incorrect")
// }


// var a = 10;
// if(a !== 25){
//     document.write("Correct")
// }
// else {
//     document.write("Incorrect")
// }

// var yourTicketNumber = 48720

// if(yourTicketNumber !== 487208){
//      alert("Better luck next time.");
// }
// else{
//     alert("Good Luck")
// }


// var a="Ali" ,b=a;
// if(b === a){
//     document.write("Your name "+ b)

// }
// else{
//     document.write("No name found")
// }

//Marksheet
// var percent =+prompt(" Enter your percent");
// if(percent >= 80 && percent <= 100){
//     alert("A+")
// }
// else if(percent >= 70 && percent <= 80){
//     alert("A")
// }
// else if(percent >= 60 && percent <= 70){
//     alert("B")
// }
// else if(percent >= 50 && percent <= 60){
//     alert("C")
// }
// else if(percent >= 40 && percent <= 500){
//     alert("D")
// }
// else if(percent >= 0 && percent <= 33){
//     alert("F")
// }
// else{
//     alert("You did not write corrct percentage");
// }

//Array

// var students = ["ghous","basit" ,"ali"];
// alert(students[0]);
// document.write("Welcome " + students[0]);

// var students = ["ghous","basit" ,"ali"];
// alert("Welcome "+students);
// document.write("Welcome " + students);


// var names =[];
// names[0]="ghous";
// names[1]="basit"
// document.write(names)



// var students = ["ghous","basit" ,"ali"];
// //.pop() is used delete the element on last index of array
// students.pop()
// document.write(students)


// var students = ["ghous","basit" ,"ali"];
// //.push() is used Add the element on last  of array
// students.push("Raza")
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// //.push() is used Add the element on last  of array
// students.push("Raza","john")
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// //.shift() is used delete the element on first index of array
// students.shift()
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// //.unshift() is used Add the element in first of array
// students.unshift("Raza","john")
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// //.shift() is used Add the element in first  of array
// students.unshift("Raza","john")
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// //splice is used to insert element at any place of array
// students.splice(0,0,"Ali")
// // here first value you write index number from you want to start
// //second value you  write how many element you want to delete
// //third value is which value you want to write on start point
// document.write(students)


// var students = ["ghous","basit" ,"ali"];
// //splice is used to insert element at any place of array
// students.splice(2,1,"Ali")
// // here first value you write index number from you want to start
// //second value you  write how many element you want to delete
// //from selecting starting point
// //third value is which value you want to write on start point
// document.write(students)

// var students = ["ghous","basit" ,"ali"];
// // agr ma koi element insert nhi krna chata sirf delete krna chataho
// students.splice(1,1)
// // yani basit ko select krlo or basit ko delete bhi
// document.write(students)



// var students = ["ghous","basit" ,"ali","bilal"];
// //slice is used to copy element
// var copyStudents=  students.slice(1,4)
// //first value  represent index number
// //second value represent length of array 
// document.write(students +"<br>")
// document.write(copyStudents)


//Boolen fucnction is used to check either value is True or False

// var x = -0;
// document.write(Boolean(x)); 
// returns false

// var x = 0;
// document.write(Boolean(x)); 
// returns false

// var x;
// document.write(Boolean(x));       // returns false

// var x = null;
// document.write(Boolean(x));       // returns false

// var x = false;
// document.write(Boolean(x));       // returns false


// var x = "";
// document.write(Boolean(x)); 
//// returns false
//  var x;
//  document.write(Boolean(x)); 

// var x = 10 / "H";
// document.write(Boolean(x)); 
// // returns false  


// Normally JavaScript booleans are primitive values created from literals:

// var x = false;

// But booleans can also be defined as objects with the keyword new:

// var y = new Boolean(false);


// var x = false; //x is a boolean
// var y = new Boolean(false); // y is an object
// document.write(Boolean(x==y))
// typeof x returns boolean
// typeof y returns object
// (x == y) is true because x and y have equal values 
//It cannot check data type

// var x = false; //x is a boolean
// var y = new Boolean(false); // y is an object
// document.write(Boolean(x===y))
// (x === y) is false because x and y have different type

// var x = new Boolean(false);             
// var y = new Boolean(false);
// document.write(Boolean(x==y))
//(x == y) is false because objects cannot be compared
//(x === y) is false because objects cannot be compared
