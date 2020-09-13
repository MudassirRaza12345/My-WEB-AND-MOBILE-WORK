// function save(){
//     var name=document.getElementById("name");
//     var roll=document.getElementById("roll");

// var student={
//     name:name.value,
//     roll:roll.value
// }
// console.log(student)
// }

// mna firebse ka link lgya ab ma console kr ka dekrha hon ka firebase
// aya ka nhi 
// console.log(firebase)
// O:object
//to aik object create hogya ha

// console.log(firebase.database)
//isna mujha aik function lakr dadya ha 

// Ab hum dekta ha firebase ma data add kaise hota ha 
// function save(){
//     var name=document.getElementById("name");
//     var roll=document.getElementById("roll");

// var student={
//     name:name.value,
//     roll:roll.value
// }
// console.log(student)
// ab ma is object ko firebase ma bhja ga

// firebase.database().ref('student').set(student)

//firebase.data()-->matlab mujha firebase ka page pr lajao
//.ref('')-->matlab variable ka reff da ga  
//.ref('student')-->matlab fire base ma jha database ha
//student ka name sa aik object create krda ga
//.set()--> data save krna ka lia (yani firebase ma data save ho) 
//.set(student)--> matlab student ka data save krna ha is lya mna jo object 
//ha iska name dya ha 

//AB MA STUDENT KA NAME DO GA OR ROLL ISKA BAAT SAVE KRO GA
//TO FIREBASE MA
//student
//name: "raza123"
//roll: "']'GFDD'G'RE4T"
//yani aik object create hua is name ki key or iski value 
//rol ki key or iski vaue 

//agr ma .set() ma ghous likhdo  
//firebase.database().ref('student').set("ghous")
// O: student:"ghous"
//isna student ka name ka objet bnay ha or ghous isma save krdia ha 

//acha ma chata hon students ka aik objects ho iska ander student1 naam
//ka aik object ho phir is ja ka key value create ho
//isko krna ka do tariqa ha 

//first way 
// firebase.database().ref('student').child("student1").set(student)
//o:student
//student1
//name: "RAZA"
//roll: "123"

//SECOND WAY
//REF MA STUDENT KA BAAT /DAKR STUDENT 1 LIKH DAGA
// firebase.database().ref('student/student1').set(student) 
//o:student
//student1
//name: "RAZA"
//roll: "123"

//.set aik dfa data save krsakta agly br wo data ma overwrite krrha ha
//is kaise bacha 
//
// firebase.database().ref('student').push(student) 
//ab ma multipe data aik sath insert krsakta hon
//is ma kya aik randomly key generate horhi hoti ha
//or data save hota rehta
//O:student
//-MH7ewINBvttsY3iaVSX
//name: "raza"
//roll: "fad"
//-MH7f-Cwozrk_XjgdLr5
//name: "Ali"
//roll: " 1223"

//Acha ma chata hon object ka ander object ho 
// firebase.database().ref('student/students').child("student1/mystudent").push(student) 
//O:student
//students
//student1
//mystudent
//-MH7gauJkgX_UGwg_JjK
//name: "raazsa"
//roll: "444"
// -MH7ghfIrK5eRHExAjBS
// name: "immm"
//roll: "444"

// acha agr ma manual key generate krna chata hon
//two ways haa

//one way 
// var key=Math.random()*23423893723; 
// // console.log(key)
// firebase.database().ref('student/'+key.toFixed()).set(student)
// O:student
// 18113843438
// name: "trt"
// roll: "65"
//6458300272
// name: "f;df"
// roll: " 78"
// Acha yha .set overwrite nhi krha ha baqla aik unique key brbr generate
//krta ha 

//secondway
// agr ma chata hon firebase mera lia keys generate kra 
// var key=firebase.database().ref('student').push().key; 
//  console.log(key)
// firebase.database().ref('student').push(student)
// O:student
//-MH7sANh1vFf_ZNQjFAp
//name: "ds"
//roll: "fd"
//-MH7sCqKNivzdmP2OCGt
//name: "yty"
//roll: "fdgtw"
//-MH7sFao_kn8MJYTi5X4
//name: "jh"
// roll: "875"
//-MH7sKPgRCYnJfCQhBc3
// name: "Ali"
//roll: "456"
//}

function save(){
    var name=document.getElementById("name");
    var roll=document.getElementById("roll");
var key=firebase.database().ref('student').push().key; 
var student={
    name:name.value,
    roll:roll.value,
    key:key
// acha yha ma apna object ma key bhi save krwa rha hon
}
firebase.database().ref('student/'+key).set(student);
//O:student
// -MH7ub68won99XrBdkVs
// key: "-MH7ub68won99XrBdkVs"
// name: "Ali"
// roll: "3443"
}


//acha ab firebase sa data get kaise kra ga ab wo dektah ha
//two ways ha

// function getFirebaseData(){
// //    first way
// //     firebase.database().ref('student/').once("value",function(data){
// // console.log(data.val())
// //val()--> aik function ha jo data proper format ma get krka dega
// //or tamam data lae ga 
//     // })

//    // .once() humko aik hi br data lakr deta ha jb hum refresh kra to
// //isko 2 arguments chaya hota ha phela argument ma wo leta ha value
// //or dosra argument ma wo leta ha function .or is function ka parameter
// //ka ander wo humko data daga firebase sa get kr ka

// // OUTPUT:
// // {-MH7ub68won99XrBdkVs: {…}, -MH7yHAXlBhQjHDBlg67: {…}}
// // -MH7ub68won99XrBdkVs:
// // key: "-MH7ub68won99XrBdkVs"
// // name: "Ali"
// // roll: "3443"
// // __proto__: Object
// // -MH7yHAXlBhQjHDBlg67:
// // key: "-MH7yHAXlBhQjHDBlg67"
// // name: "fdsf"
// // roll: "f5"
// // __proto__: Object
// // __proto__: Object

//    // second way
// //.on() humko br br (realtime data lakr deta ha) bagir refresh kra
// firebase.database().ref('student/').on('child_added',function(data){
//     console.log(data.val())
// //.on bhi do argument leta ha 
// //.on ka fuction realtime chalta ha yani jb firebase ma koi change kroga
// //to ya mujha data lakr dedaga begair page refresh kya
// //chid_added--> ka matalb  yha ha ka jb bhi  koi data add ho ya ki changing
// //ho firebase ma to mujha data lakr deda ga without page refresh kra 
// //YANI MA BAGIR refresh kra isma data add krsakta ho or get bhi


// })
// }
// getFirebaseData()

// remove krna ha data ab firebase sa
// function removeFirebaseData(){
// // agr ma chata ho pori student wali node ko del krna to ap .remove() lgado ga
//     firebase.database().ref('student').remove()

//     //agr ma chata hon pora student ka data del na ho koi key aik del ho
// //to ma key copy krka student ka sath ref ma lga doga

// // firebase.database().ref('student/-MH7yHAXlBhQjHDBlg67').remove()
// }
// removeFirebaseData()

//ab hum firebase ma mujha edit krna ha 
function editFirebaseData(){
 firebase.database().ref('student/-MH85DxJPQlnFvQRf0yX').set({
     key:'-MH85DxJPQlnFvQRf0yX',
     name:"mudassir raza",
     roll:547
 })
 //basically prona wala object ma edit krka ya dalda ga
}
editFirebaseData()