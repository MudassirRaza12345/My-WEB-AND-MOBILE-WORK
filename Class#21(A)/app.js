//ab ma chata hon is object ka ander name ko access kro
// var obj={
//     name:"ghous"
// }
// console.log(obj.name)
//output:ghous
//isi tarh agr ma koi function  object ka ander bnao ga
//to isko bhi  iska name sa yha call krla ga .


//Constructor object bnana ma asani krta ha ya 
//hum  bol sakta ha objects generate krta ha 
//eg:hum kafi sara bacho ka data apni javascript ma save
//krwana cha  rha ha 
// var student1={
//     name:"ghous",
//     roll:123

// }
// var student2={
//     name:"basit",
//     roll:321
// }

//lekin agr mujha agr 100 sa ziada student ka data bnana
//ha to mujha 100 times likhna para ga objects create krna
//para ga iski sari properties brbr repeat krna para gi

//is kam ko asaan krna ka lia javascrip na hum ko 
//dya ha constructor 

//constructor fuction ma iska name hamesha capital word
//sa start hoga agr ap asa nhi likha ga to wo isko
//normal function la ga constructor ka tor pr nhi la ga

// function Students(name,roll){
//     //this means -->name pr jo bhi wo sb ko excess krka lae
//     this.name=name,
//     this.roll=roll

// }
// var student1=new Students("ali",123);
// var student2=new Students("Basit",321);
// console.log(student1.name)
// console.log(student2.roll)

//constructor fuction sa object create krna ka lia 
//new ka keyword used hota ha
//iska baat ap constructor function ka name likhta ha or
//is ko ap call krdeta ha or is ma argument pass krdeta
//ha jo as a parameter construction ma used hota ha 


//Prototypes

//agr mna koi object bnaya ha or is ka ander koi function 
//bnaya ha ap jb ma is object ko call kro ga to wo function
//brbr generate ho ga is a bachna ka lia javascript na 
//humko proto type dya ha is sa ya hoga ka aik
//dfa function generate iska baat hum isko copy
//brbr used kra ga 

//isko istarh likha ga 
//sb sa phela ---> connstructor fucnction ka name
//is ka baat --->.prototype
//is ka baat --->wo function ae ga jisko hum chata ha aik dfa repeat ho

// function Student(name,roll){
//         //this means -->name pr jo bhi wo sb ko excess krka lae
//         this.name=name,
//         this.roll=roll,
//         this.getname=function(){
//             return this.name;

 
//         }
    
//     }
//     var student1=new Student("ali",123);
// var student2=new Student("Basit",321);
// console.log(student1)
// console.log(student2)
//javascript mujha ka alag fuction bna kr da rhi ha 

//is ko hum aik dfa function used krna ka lia ma isko constructor ka bja 
// prototype ma bna do ga 

//console.log(student1.getname())



// function Student(name,roll){
//     //this means -->name pr jo bhi wo sb ko excess krka lae
//     this.name=name,
//     this.roll=roll
//       }
//       Student.prototype.getName=function(){
//           return this.name

//       }

//  //ab aik dfa copy bna kr rakh di ab jb bhi ma constructor ko used to wo yhi sa 
//  //is fuction ki copy utha ga brbr fuction generate nhi kra ga 
//  //prototype hum function copy bna ka lia used krta ha       

// var student1=new Student("ali",123);
// var student2=new Student("Basit",321);
// console.log(student1.getName())
// console.log(student2)

// var student2={
//     name:"basit",
//     roll:321
// }
// //mujha check krna ha ka roll property student2 ma ha ya nhi


// console.log("roll" in student2)
// //output:true matlab ha

// console.log("class" in student2)
// //output:false matlab nhi  ha

// //in-->keyword used to check the property present or not in object



//acha ab mujha check krna ha student2 ma kon kon si property(key) ha 
// var student2={
//     name:"basit",
//     roll:321,
//     school:'sayalani'
// }
//ya bhi for loop ki tarh chalta ha 
//pro variable name ha hum iska alwa koi bhi keyword used krsakta ha
// for(var pro in student2){
//     console.log(pro)
//     //student2 ka ander jo bhi key wo is variable ma lakr stored kradaga
// }
//output:name
// roll
// school

//acha ab chata hon jo property ha student2 ma iski value print ho
// for (var pro in student2){
//     console.log(student2[pro])
// }
//output:basit
// 321
// sayalani

//acha ma chata fdhon property or iski value dono sath print ho
// for (var pro in student2){
//     console.log(pro,student2[pro])
// }
//OUTPUT: name basit
//  roll 321
//  school sayalani


//aik or method hota ha check krna ka lia ka property ha ya nhi
var student2={
    name:"basit",
    roll:321,
    school:'sayalani'
}
// console.log(student2.hasOwnProperty("roll"))
//O;true 
//matalb student ka object ma roll number ki property ha 

//dono property ma aik difference ha 
// console.log(student2)
//O:{name: "basit", roll: 321, school: "sayalani"}
//name: "basit"
//roll: 321
//school: "sayalani"
//__proto__: Object
//proto ya default property ha jo javascript na bnae ha 

//in keyword proto (default property jo ka java script na bnae ha)
// wo bhi check kra 
//console.log("__proto__" in student2)
// O:true

//jbka hasOwnProperty wo sirf student2 ki property check kra ga
//default property nhi check kra ga 
console.log(student2.hasOwnProperty("__proto__"))
//O:false
