// for(var a=1;a<=100;a=a+10){
//     document.write(a+"<br>")

// }

// for(var a=1;a<=100;a=a+10){
//     for(var b=a;b<a+10;b++){//ya loop iswaqt chalaga jb tq a ki 
//         //value b ki value b<a+10 na hojaa(yani less than 11)
// //iska ka baad apka loop outer loop ma ajaa ga 
//         document.write(b+"  ")
//     }
//     document.write("<br>")
//     //br is lya dya ha inner loop aik dfa chalna la baad phirsa
//     //chala to next line pr sa start ho
// }
// //phir a=11 hogya phir b=11 10times chalaga (11 to)


//ch:21 start
//Used lower case for convert all input to small letter

// // var cities=["karachi","lahore","islamabad","peshawar","quetta"]
// // var city_to_check=prompt("Enter the city you want to check");
// //  city_to_check =city_to_check.toLowerCase()
// // for(i=0;i<cities.length;i++){
// //     if(city_to_check === cities[i]){
// //         alert(cities[i]+"  is one the cleanest city")
// //         break
// //     }
// // }
// // if(city_to_check !== cities[i]){
// //     alert(cities[i]+" not found ")
    
// // }

// //Used Upper case for convert all input to capital letter

// // var cities=["KARACHI","LAHORE","ISLAMABAD","PESHWAR","QUETTA"]
// // var city_to_check=prompt("Enter the city you want to check");
// //  city_to_check =city_to_check.toUpperCase()
// // for(i=0;i<cities.length;i++){
// //     if(city_to_check === cities[i]){
// //         alert(cities[i]+"  is one the cleanest city")
// //         break
// //     }
// // }
// // if(city_to_check !== cities[i]){
// //     alert(cities[i]+" not found ")
    
// // }


// var cities=["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
// var city_to_check=prompt("Enter the city you want to check");
// var first_Character=city_to_check.slice(0,1)
// //First letter at 0  index
// first_Character=first_Character.toUpperCase()
// var small_Character=city_to_check.slice(1)
// //select all characters from postion 1 to end
// small_Character=small_Character.toLowerCase()
// var full_charater=first_Character+small_Character

// for(i=0;i<cities.length;i++){
//     if( cities[i] === full_charater ){
//         alert(cities[i]+"  is one the cleanest city")
//         break
//     }
// }
// if(cities[i] !== full_charater){
//     alert(cities[i]+" not found ")
    
// }

//OR

// `var cities=["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
// var city_to_check=prompt("Enter the city you want to check");
// var first_Character=city_to_check.slice(0,1)
// //First letter at 0  index
// first_Character=first_Character.toUpperCase()
// var small_Character=city_to_check.slice(1)
// //select all characters from postion 1 to end
// small_Character=small_Character.toLowerCase()
// var city_to_check=first_Character+small_Character

// for(i=0;i<cities.length;i++){
//     if( cities[i] === city_to_check ){
//         alert(cities[i]+"  is one the cleanest city")
//         break
//     }
// }
// if(cities[i] !== city_to_check){
//     alert(cities[i]+" not found ")
    
// }

 

// var str = prompt("Enter some text");
// // var str ="kar  achi"
// var numChars = str.length;
// for (var i = 0; i < numChars; i++){
//     if (str.slice(i, i + 2) === "  "){
// //  i=0 (yani postion index 0)
// //copy krlo i+2(0+2=1(slice length sa aik value km deta ha))
// //  (yani 0 and 1 index pr jo value ha wo copy krlo)
//         alert(" Double spaces! found");
//         break;
//         }
// }
// if(str.slice(i, i + 2) !== "  "){
//          alert("Double spaces! not found")
         
//         }
// var text="The New Yorker magazine doesn't allow the phrase World War II.  They say it should"
// for (var i = 0; i < text.length; i++){ 
// if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     document.write(text)
 
// }
//  }

//.index() used to find index at any position    
// var text="The New Yorker magazine doesn't allow the phrase World War II.  They say it should"
// var ch=text.indexOf("World War II")
// document.write(ch)
// //agr -1 ae to index nhi ha mojood  

//.index() used to find index at any position    
// var text="The New Yorker magazine doesn't allow the phrase World War II.  They New say it should"
// var ch=text.indexOf("New")
// document.write(ch)
//ab yha first wala new ka index print hoga
  


// var text="The New Yorker magazine doesn't allow the phrase World War II.  They say it should"
// var ch=text.indexOf("World War II")

// var firstText =text.slice(0,ch)
// //yani ch sa phela tq copy krlo
// var replacingtext="The Second World War"
// //ab ("World War II") ka replace krdo ("The Second World War")sa
// var thirdtext=text.slice(ch+12)
// //w ka index ha 49.yani 49+12=61(49 ka baad 12 characters ha
//humko inka baad wala index sa start krna ha .)
// .yani 61 sa lekr end tq
// //sb copy krlo
// document.write(firstText+replacingtext+thirdtext)

//.lastIndexOf() used to find index in last or at any position 
// var text = "To be or not to be.";
// var findlastindex = text.lastIndexOf("be");
// document.write(findlastindex)

// var a="ghous";
// document.write(a.charAt(3))
// //.charAt() is used to find letter at given index

//.replace () is used to replace string
// var text="The New Yorker magazine doesn't allow the phrase World War II.  They say it should"
// var ch=text.replace("World War II","the second world war")
// document.write(text+"<br>")
// document.write(ch)

//OR
//                                                                                                                                                                                                                                                                                                                                                  
//  var avgscore=99.999999
//  document.write(Math.round(avgscore))

//agr .5 sa value choti hogi to point sa phela wala number dedaga
// var avgscore=2.4
// document.write(Math.round(avgscore))



// var scoreAvg = Math.ceil(.9999);
// document.write(scoreAvg)

// var scoreAvg = Math.floor(.9999);
// document.write(scoreAvg)

//Math.random(): random number generate krdaga 0 to 1
// var random=Math.random()
// document.write(random)

//agr hum ismakoi value define krdga wha tq jaa ga
// var random=Math.random(3)
// document.write(random)

//yani jo bhi random number generate ho wo multiply by 2 hojaa
// var random=Math.random() *2
// document.write(random)

// var headsuser=prompt("Enter head usersname")
// var tailsuser=prompt("Enter tail usersname")
// var toss=Math.random() * 2
// //0X2=0  or 1*2=2
// var floor=Math.floor(toss)
// //agr meri value .99 ai ge to ya 0 krda ga
// //agr meri value 1.5 ai ge to ya 1 krda ga
// if(floor === 0){
//     alert("Heads "+headsuser+" wins")
// }
// else{
//     alert("Tails "+tailsuser+" wins")
// }

//converting string to numbers or digit
// var number=("10")
//  document.write(Number(number))

// var number=("10")
//  document.write(parseInt(number))

// var number=("10.99")
//  document.write(parseFloat(number))

//converting  numbers or digit  to string
// var number=(10.99)
// document.write(number.toString())


// var number=(10.99999991223)
// document.write(number.toFixed(2)+"<br>")

// var number=(10.99999991223)
// document.write(number.toFixed(1)+"<br>")

// var number=(10.99999991223)
// document.write(number.toFixed(0)+"<br>")



