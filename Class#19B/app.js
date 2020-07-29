// //<!-- objects -->

// // var webCourse={
// //     t1:"ali", 
// //   //  <!-- t1 is teacher  -->
// //     t2:"ghous",
// //     t3:"raza"
    
// // }
// // console.log(webCourse)
// //O:{t1: "ali", t2: "ghous", t3: "raza"}
// //t1: "ali"
// //t2: "ghous"
// //t3: "raza"
// //__proto__: Object

// //Array work same as objects
// //arrays always return objects

// var arr =["ali","ghous","raza"]
// //console.log(arr)
// //(3) ["ali", "ghous", "raza"]
// //0: "ali"
// //1: "ghous"
// //2: "raza"
// //length: 3
// //__proto__: Array(0)

// var webCourse={
//     t1:"ali", 
//   //  <!-- t1 is teacher  -->
//     t2:"ghous",
//     t3:"raza"
    
// }
// webCourse.t4="nadia"
// //mna webCourse aik object ha or mna iska ander value add ki 

// //O: {t1: "ali", t2: "ghous", t3: "raza", t4: "nadia"}
// //t1: "ali"
// //t2: "ghous"
// //t3: "raza"
// //t4: "nadia"
// //__proto__: Object
// //console.log(webCourse)
// webCourse.class=[18,19];
// ///yani ma object ka ander array ko bhi pass kr sakta ho
// //isi tarh hum objects ka ander bhi objects ps krsakta ha 
// //console.log(webCourse)
// //{t1: "ali", t2: "ghous", t3: "raza", t4: "nadia", class: Array(2)}
// //class: (2) [18, 19]
// //t1: "ali"
// //t2: "ghous"
// //t3: "raza"
// //t4: "nadia"
// //__proto__: Object

// //ab ma aik empty objects bhi generate kr sakta ho
// // var course ={

// // }
// // console.log(course)
// //O:{}
// //__proto__: Object

// //OR
// //ab ma aik empty objects bhi generate kr sakta ho
// // var course ={

// // }
// // course.name='web'
// // console.log(course)
// //O:{name: "web"}
// //name: "web"
// //__proto__: Object

// var webCourse={
//     t1:"ali", 
//   //  <!-- t1 is teacher  -->
//     t2:"ghous",
//     t3:"raza"
    
// }
// webCourse.t5=undefined
// //console.log(webCourse)
// //O:{t1: "ali", t2: "ghous", t3: "raza", t5: undefined}
// //t1: "ali"
// //t2: "ghous"
// //t3: "raza"
// //t5: undefined
// //__proto__: Object

// // acha ab ma check krna chata ho e.g t3 mera ps ha mojood ha webcourse ma 
// var abc="t3" in webCourse
// console.log(abc)
// //O:true
// //matlab mojood ha 

// // hum arrays ka ander objects bna rha ha is object ka ander objects
// //koshish kra ap apna variable ma camle case used kra

// var myQuestions=[
//     {
//         question:"What is your name",
//         //answer likh kr mna aik or object banwaya ha
//         answer:{
//             a:"ali",
//             b:"ghous",
//             c:"raza"
//         },
//         correctAnswer:"c"
//     },
//     { 
//         question:"What is your age",
//         answer:{
//             a:"13",
//             b:"14",
//             c:"14"
//         },
//         correctAnswer:"b"

//     },
// ]


// // constructor function
// //in construction fuction name of the function start with capital letter always
// // function Course(t1,t2,t3){
// //     this.t1=t1, //(this batarha ha ka ma isi cheez ko represent kr rha ho)
// //     this.t2=t2,
// //     this.t3=t3

// // }
// //object oriented programming ma ap class bna ta ho or class ka instance upper pass krta ho
// //isi tarh hum na aik construction function banaya or iska ma instance object ma ps kr rha ho
// //new -->Keyword used for making instance
// //var xyz=new Course("ali","ghous","raza");

// //Course() --> isma ma arguments pass kro ga

// //ya mna aik object ka instance create kiya ha 
// //console.log(xyz) 
// // Course {t1: "ali", t2: "ghous", t3: "raza"}
// //t1: "ali"
// //t2: "ghous"
// //t3: "raza"
// //__proto__: Object

// // or in this i also do
// function Course(t1,t2,t3){
//     this.a=t1, //(this batarha ha ka ma isi cheez ko represent kr rha ho)
//     this.b=t2,
//     this.c=t3

// }
// var fgh=new Course("al","gh","razi");
// console.log(fgh)
// //O: Course {a: "al", b: "gh", c: "razi"}
// //a: "al"
// //b: "gh"
// //c: "razi"
// //__proto__: Object





// function setValue(){
//   var a= document.getElementById("Val")
//   console.log(a)
//   var b=document.getElementById("ente")
//   b.innerHTML=(a.value)
//   a.value=""
  
  

}