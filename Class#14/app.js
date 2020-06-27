//start fom ch:31 (functions)

//functions is the foundation of javascipt
//javascript is also known as fuction language 

//new Date():used to get current date and time
//var a=new Date();
// //new Date aik fuction ha jo current date batata ha aik format
// //ka sa
// console.log(a)
// document.write(a)
// //output:Tue Jun 16 2020 09:35:55 GMT-0600 (Easter Island Standard Time) Tue Jun 16 2020 09:35:55 GMT-0600 (Easter Island Standard Time)
//var b=a.toString()
// console.log(b)
//out:ab a string ma convert hojaa ga bqi answer same as above
// document.write(b)
//var c=b.slice(0,3)
//document.write(c)
//out:Tue

//getday()used to get current day
// var a=new Date();
// var b=a.getDay();
// document.write(b)
//when we extract day from newDate() it give number
//  ya number arha ha ya days ko represent krrha ha 
//because Days are designated by a number from 0 for Sunday
// through 6 for Saturday. 

// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay = now.getDay();
// document.write(theDay+"<br>")
// console.log(theDay)
// // //theDay ma getDAy ka through aik day aya number ki form ma
//  var nameOfToday = dayNames[theDay];
// // //dayNames ma check kro theDAy(is number pr kiya ha)
// // //or wo nameOfToday ma daldo  

// document.write(nameOfToday)

// var a=new Date();
// var b=a.getTime();
// document.write(b)
//ab jo output ma millisecons daga wosince january 1970 sa
//ajj tq ka time hoga 


// var a=new Date();
// var b=a.getDay();
// document.write(b)
// output:2 aya means:tue

// var a=new Date();
// var b=a.getMonth();
// document.write(b)
//output:5 means:june

// var a=new Date();
// var b=a.getSeconds();
// document.write(b)
// out:4 means 4seconds

// var a=new Date();
// var b=a.getHours();
// document.write(b)
// //output:11 means l1 hours

// var a=new Date();
// var b=a.getFullYear();
// // document.write(b)
// // //output:2020


// var dob=new Date("September 11, 199")
// var DOBmili=dob.getTime();
// document.write(DOBmili+"<br>")
// //to ya mujha 1970 sa mera DOB tq ka milliseconds btadaga
// var today=new Date();
// var todaymili=today.getTime()
// document.write(todaymili)
// //1970 sa ajj tq ka milliseconds  dada ga 


//Abhi ma apni dob sa ajj tq ka days count kr rha hon
var a=new Date();
var dob=new Date("September 11, 1999")
var b=a.getTime();
//1970 january sa ajj tq ka milisecond
var DOB=dob.getTime();
//1970 january sa Dateofbirth tq ka milisecond
var diff=a- DOB
//humna miiliseconds ka difference lia aaj sa DOB tq kitna
// milliseconds hua
var daysofborn=diff/(1000*60*60*24)
//1000= milliseconds
//60=seconds
//60=minutes
//24=hours(one day)
var yearofborn=diff/(1000*60*60*24*30*12)
//1000= milliseconds
//60=seconds
//60=minutes
//24=hours( day)
//30=months
//12=12months(months in years)
document.write(daysofborn+"<br>")
//it calculate days
// var accurateage=Math.floor(yearofborn)
// document.write(accurateage+"<br>")
// //it calculate years

// var Dateofbirth=prompt("Enter your date of birth","September 30,2012")
// var a=new Date();
// var dob=new Date(Dateofbirth)
// var b=a.getTime();
// var DOB=dob.getTime();
// var diff=a- DOB
// var daysofborn=diff/(1000*60*60*24)
// var yearofborn=diff/(1000*60*60*24*30*12)
// alert("Milliseconds from my date of birth till today:"  +daysofborn+"\n")
// var accurateage=Math.floor(yearofborn)
// alert("Years of Born: "+accurateage+"\n")
 
 

// var currentyear=new Date();
// var currenttime=currentyear.getTime();
// var futureyears=new Date("June 30,2035");
// var futuretime=futureyears.getTime();
// var msDiff = futuretime -currenttime; 
// var yearTillDoom = (msDiff /(1000 * 60 * 60 * 24*30*12))
// var accurate=Math.floor(yearTillDoom)
// document.write(accurate)


 


// var d = new Date();
// //is ma current date time hoga
// d.setFullYear(2001);
// //or ya current date ma year ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setMonth(6); //yani july (month start from 0 to 11)
// //or ya current date ma month ko change krda ga ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setDate(12); //yani july (month start from 0 to 11)
// //or ya current date ma date(today e.g 12) ko change krda ga ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setHours(6); //yani july (month start from 0 to 11)
// //or ya current date ma hour(e.g 6:am) ko change krda ga ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setMinutes(7); //yani july (month start from 0 to 11)
// //or ya current date ma minutes(e.g 6:7 am) ko change krda ga ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setSeconds(8); //yani july (month start from 0 to 11)
// //or ya current date ma seconds(e.g 6:7:8 am) ko change krda ga ko  chantge krdaga
// document.write(d)

// var d = new Date();
// //is ma current date time hoga
// d.setMilliseconds(867); //yani july (month start from 0 to 11)
// //or ya current date ma Millisecons ko change krda ga ko  chantge krdaga
// document.write(d)

//OR
// var d = new Date();
// var b=d.getTime();
// //is ma current date time hoga
//  //yani july (month start from 0 to 11)
// //or ya current date ma Millisecons ko change krda ga ko  chantge krdaga
// document.write(b)

//OR
// var d = new Date();
// var b=d.getMilliseconds();
// //is ma current date time hoga
//  //yani july (month start from 0 to 11)
// //or ya current date ma Millisecons ko change krda ga ko  chantge krdaga
// document.write(b)

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// function greeting(){
//     alert ("Hello ghous")
// }
// greeting()

//or second way
//greet=parameter
// function greeting(greet){
//     alert(greet)
// }
// greeting("Hello Mudassir")
//("Hello Mudassir")=argument

//you can add many parameter as you want
// function add(a,b,c){
//     alert(a+b+c)
// }
// add(4,5,6)
//you can add many arguments as you want

// function add(a,b,c){
//     var d=a+b+c
//     alert("The sum of "+a+" "+b+" "+c +" is:"+d)
// }
// add(4,5,6)

//return ka though hum fuction sa value leta ha function ka bhr
// function add(a,b,c){
//     var d=a+b+c
//     return d;
// }
// var g= add(4,5,6)
// alert(g)


// function add(a,b,c){
//     var f=15
//     var d=a+b+c
//     return d;
// }
// var g= add(4,5,6)
// // alert(g)
// console.log(f)
//output:error
//Reason:
//Glabal variable wo hota ha jo hum outside of function declare kra ga
//or within in fuction or outside of function used kra ga 
//local variable wo hota ha jo hum inside of function declare kra ga
//or within in fuction  used kra ga 

// var f=15
// function add(a,b,c){
    
//     var d=a+b+c
//     return d;
// }
// var g= add(8,5,6)
// alert(g)
// alert(f)
// //this is right way


// var h=15
// function add(a,b,c){
//     alert(h)
//     var d=a+b+c
//     return d;
// }
// var g= add(8,5,6)
// alert(g)

// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      var thesec = now.getSeconds();
//      var themillisec = now.getMilliseconds();
//      alert("Current time: "+ theHr + ":" + theMin+ ":"+thesec+ ":"+themillisec);
//      } 
// tellTime()     
    
// function agecal(){
// var Dateofbirth=prompt("Enter your date of birth","September 30,2012")
// var a=new Date();
// var dob=new Date(Dateofbirth)
// var b=a.getTime();
// var DOB=dob.getTime();
// var diff=a- DOB
// var daysofborn=diff/(1000*60*60*24)
// var yearofborn=diff/(1000*60*60*24*30*12)
// alert("Milliseconds from my date of birth till today:"  +daysofborn+"\n")
// var accurateage=Math.floor(yearofborn)
// alert("Years of Born: "+accurateage+"\n")
// }
// agecal()


// function  Fullname(Firstname,Lastname){
//     alert("My name is "+Firstname+" "+Lastname)
// }
// Fullname("MUHAMMAD MUDASSIR","RAZA")


// function  Fullname(Start,Firstname,Lastname){
//     alert(Start+Firstname+Lastname)
// }
// Fullname("My name is ","MUHAMMAD MUDASSIR"," RAZA")


// function  Fullname(Start,Firstname,Lastname){
//     alert("My"+Start+" is"+Firstname+Lastname)
// }
// Fullname(name,"MUHAMMAD MUDASSIR",RAZA)


// //This is an example of global variable
// var theSum
// addNumbers()
// function addNumbers() {
//  theSum = 2 + 2;
// }
// alert(theSum)


//This is an example of local variable

// var theSum=addNumbers()
// function addNumbers() {
//     var theSum = 2 + 2;
//     return theSum
// }
// alert(theSum)
//O:1000
//Reasons:global variable can work inside and side of function.
//local variable can work inside the fuction only.
//when we alert(theSum) the global function alert


//agr ma chata hon function 4 times or hr br ma different value do
// function  Fullname(Firstname,Lastname){
//     alert("My name is "+Firstname+" "+Lastname)
// }
// Fullname("MUHAMMAD MUDASSIR","RAZA")
// Fullname("ZAKIR","RAZA")
// Fullname("MUHAMMAD MEESAM","RAZA")
// Fullname("ALI","RAZA")
// //ma jitna times chaho function ko chala sakta ho

// function first(b,a){
//     return b + a
// }
// console.log(first(2,3))
// console.log(first(4,4))
// console.log(first(10,5))

// // function first(b,a){
// //     return b + a
// // }
// // console.log(first(2,3))
// // console.log(first(4,4))
// // console.log(first(10,5))

// var a="ghous"
// function foo(){
//     a="Ahmed"
// }
// foo()
// console.log(a)
//output:Ahmed
//hum na yha a ki value update krdi ha
//a="ghous" sa ab humna a="Ahmed" krdi a ki  value ab var a="Ahmed"
//hogya ab jb humna fuction call kiya to value update hogae or
//console.log(a) kiya to answer:Ahmed

// var a="ghous"
// function foo(){
//     a="Ahmed"
// }
// console.log(a)
//output:ghous
//because humna function call nhi kiya islya ghous answer ha 

// function cal(num1,opr,num2){
//     if(opr ==="+"){
//         return num1+num2
//     }
//     else if(opr ==="-"){
//         return num1-num2
//     }
//     else  if(opr ==="*"){
//         return num1*num2
//     }
//     else if(opr ==="/"){
//         return num1/num2
//     }
//     else if(opr ==="%"){
//         return num1+num2
//     }
//     else {
//         return("Incorrect operator")
//     }
// }
// var a =cal(7,"*",9)
// var b =cal(7,"-",9)
// var c=cal(7,"$",9)
// console.log(a)
// console.log(b)
// console.log(c)

// function cal(num1,opr,num2){
//     if(opr ==="+"){
//         return num1+num2
//     }
//     else if(opr ==="-"){
//         return num1-num2
//     }
//     else  if(opr ==="*"){
//         return num1*num2
//     }
//     else if(opr ==="/"){
//         return num1/num2
//     }
//     else if(opr ==="%"){
//         return num1+num2
//     }
//     else {
//         return("Incorrect operator")
//     }
// }
// var result= cal(a,b,c)
// var a=+prompt("Enter the first number")
// var b=prompt("Enter the operator")
// var c=+prompt("Enter the second number")
// console.log(result)

// function foo(a,b){
//     return a+b
// }
// console.log(foo(1))
//Ans:NaN  -->not a number
//mna a ko b ma add kraya but b ki value mna define nhi kya islya
//mujha NaN error diya

//b=3 -->Default parameter defined
// function foo(a,b=3){
//     return a+b
// }
// console.log(foo(1))

// function foo(a,b=3){
//     return a+b
// }
// console.log(foo(1,5))
//our:6 because mna yha b ki value argument ma 6 di ab parameter
//ma b=6 store hogya agr ma b ki value argument ma define nhi krta
//to b=3 default value leta

// function foo(){

// }
// console.log(foo())
//out:undefined -->function to define ha pr isma kuch bhi return nhi horha
//ha

// var name="ghous"
//switch-->work like function()
//name -->work like parameter/argument
// switch(name){
    //case -->work like if else
//     case "ghous":
//coln(:)-->work like ;(semicolon)
//         alert("Hello ghous")
//         break
//     case "Basit":
//         alert("hello Basit")
//         break
// default -->work like esle
//     default:
//         alert("hello")    

// }

// var dayOfWk="Sat"
// switch (dayOfWk) {
//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }

