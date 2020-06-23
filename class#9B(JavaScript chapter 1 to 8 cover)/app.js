//--------------------chapter No:01 ALERTS -------------------

//alert("hello world");

//An alert is a box that pops up to give the user a message.Here's code for an alert that 
//displays the message "Thanks for your input!"
//alert("Thanks for your input!");
//alert is a keyword—that is, a word that has special meaning for JavaScript. It means,
//"Display, in an alert box, the message that follows." Note that alert isn't capitalized. If you
//capitalize it, the script will stop.

//hum parenthesis used kra ga or before and after parenthisis space da to bhethetr  ha 
//"" used kra or iska baat (;)semicolon bhi.

//alert( "PAKISTAN ZINDABAD" );

//--------------------chapter no:02  Variables for Strings---------------------
//java script ma jb ap koi kam kr rha hota ho to chezzon ko memory ma stored kr rha hota ho
// or wo variable ka throuh hota ha 
// var is a keyword jo variable ko declare krna ka  kam krta ha  
//   or ( a )  aik variable ha 
// (  =  ) is a assigning operator
// 5 value ha jo variable ma store hua ha 
// ;  is  a statement terminator 
// variable apki memory ma ja kr aik space ko reserve/alocate  krdeta ha jiska ander wo
// value jo apna assign ki ha wo akr store hojati ha  

//var a = 5;
//var b = 10;
//var c = a+b;

// yha c string nhi ha balqa variable ha islya humna ("") inverted comas ma nhi likha  

//alert(c)

// yha c "" ma kyu nhi likha ?
// iska reason ya ha  ka  Hellow world is a string ha 
//string: group of characters 
// hellow world bhi group of characters ha is lya hamesha ya baat yaad rekha jb bhi ap 
//gorups of character used kra to wo hamesha ("") inveted commas ma aeya ga 

//----------chapter no:3 Variables for Numbers---------------

//var a = 5;
//var b = 10;
//var c = a+b;
//console.log(c);

// ya result console pr show hoga. page pr ae --> or right click kra --> or inspect pr click kra
//-->phir isma akr console kra ga --> to apko 15 nazr aega .  

//var x = 5;
//var y ="ali"
//var z =y+x;
//alert(z);

//Answer:ali5 islya aya kyu ka javascipt ma string or number apas ma add hota ha to apas ma 
//concatenate ho jata ha
//concatenation: merging of two elements
//number ho ya string sb apas ma add hojata ha 


// var x = "ghous";
// var y ="ali";
// var z =y+x;
// alert(z);


//compilation:yani pora code aik sath compile hoja ga or iska aik sath output generate hojaa ga
//yani jo ap code likh rha ho wo translate hojaa ga machine language ma .compilation ma pora
//code aik sath translate hojaa ga 

//Interpretion:left to right or line by line  code ko translate krdeta ha.javascript intrepretion 
//adopt  krta ha .yani isma code hamesha line by line translate ho ga  

//Assembler:used in assembly language (in appliance it is used)

//var aliMughal =20;
//this is camel case .ali chota phir Mughal bra 
//agr ap koi app bna rha ho
//var chatApp =20; (This is rigt practice)

// var a =20;
// var b ="10";
// var c =a+b
// alert(c)
//whenever numeric and string are connected using +(plus sign) to in ma concatenation hojaa gi


// var a =20;
// var b ="2";
// var c =a*b
// alert(c);
//whenever numeric and string are connected using *(multiply sign)to wo apas ma multiply hojaa ga 

// var a =20;
// var b ="2";
// var c =a/b
// alert(c);
//whenever numeric and string are connected using /(divide sign)to wo apas ma divide hojaa ga 

// var a =3;
// var b=5;
// var c= 7;
// var d=b - a * c;
// alert(d);
//DMAS Rule apply

// var a =3;
// var b=5;
// var c= 7;
// var d=(b - a) * c;
// alert(d);
//BDMAS RULE APPLY


// a++=+1 post increment  
//++a= +1 pre increment
//a--=-1 post decrement
//--a=-1 pre decrement
// var a =5;
// var b= a++;
//ab yha b=a++ yani  a  phela arha ha is lya b ki value a yani 5 assign hogi 
//or jb mna alert kiya b to mera ps 5 print hogya khuka b ka ander a ki value 
//assign hue ha  
// alert(b);
//ab   a    aik step aga nikal gya ha 
//yani ab      a       ma increment hogya ha 
//(line by line execute in javascript)
//   ab agr ma alert(a) kro ga to  a  ki value 6 ae gi kyuka a ander post increment 
//hua ha 
// alert(a);

// var a =5;
// var b= ++a;
//ab yha sb sa phela increment hua    a    ma
// phir is ka value b ma assign hue(yani 5 ma 1 add hua =6 or iska baad
// 6    b    ma assign hua)  
// alert(b);


var x = 10;
var y = x++ + ++x - x + x++ - ++x + x;
//      10  + 12 - 12 + 12 - 14 + 14  =22 
// x++     10
//++x (ab yha ana sa pela x ma increment ho chuka ha yani ya 11 ho chuka ha)
//ab yaha ++ phela to 11 ma phela increment hua yani value y ki yha 12 ha  
//-x (ab yaha aya to x ki value already 12 ha to value 12 hogae )
//x++ (yha post increment ha yani jo value x=12 ki ha waise hi rhna daga )
//++x(ab yha x=14  hojaa ga kyu ka upper sa x=13 ae ha )
//x (value x=14 hr gi)
var z = alert(y);

// var Firstname ="ALI";
// var Lastname ="  RAZA";
// var Fullname =Firstname + Lastname;
// alert("Hello   " +Fullname )

// var name ="ALI";
// var name = "RAZA";
// alert(name)
//output is RAZA because name is change in seocnd statement if call alert(name)
//before second statement then it give output  ALI


// var a= 23;
// var c=a+7;
// alert(c);

// var a="3";
// var b="4";
// var c=a*b;
// alert(c);

// var a="12";
// var b="4";
// var c=a/b;
// alert(c);

// var a = 4*12;
// alert(a);

var a=10;
var b=5;
var c=10 % 5;
alert(c);
//Modulus operator used for reminder
