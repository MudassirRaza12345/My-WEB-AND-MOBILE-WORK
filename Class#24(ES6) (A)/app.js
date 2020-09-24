// // hum na ------------object destructuring-------------------- ma para tha
// // let obj={
// //     name:"ghous",
// //     email:"mudassir123@gmail.com"
// // }
// // let name=obj.name
// // console.log(name)
// //O:ghous
// // yani mujha sb ka lia alag variable bna para ga value excess krna ka lia 

// //Es6 na ya kaam asan krdia ha -----object destructuring-------
// // let {name,email}=obj
// // console.log(name)
// // console.log(email)
// //O:ghous
// //mudassir123@gmail.com


// //----same isi tarh sa array ki bhi destucturing milti ha --------------
// //------------arry destructuring---------------
// // let arr=["ghous","basit","umair"]

// // one way
// // let name1=arr[0]
// // let name2=arr[1]
// // console.log(name1)
// // console.log(name2)
// //O:ghous
// //basit

// //second way (through destucturing)

// //let [name1,name2,name3] =arr
// //ya bilkul same ha object ki destructuring ki tarh farq ya ha ka
// //yha hum na curly bracket{} ki jga arr [] ka bracket used kya ha or index sa target kya ha
// // console.log(name1)
// // console.log(name2)
// // console.log(name3)
// //O:ghous
// //basit
// //umair


// //-----------function expressions 
// //ya ES5 ka topic ha

// // isma kya hota ha ap anonymous function bnata ha jis function ka naam nhi hota 
// //balqa humna function ko aik varaible ma assign krdia

// // let foo = function(){
// //     // console.log("hello world")

// // }
// // foo()
// //jo variable ka naam hoga whi function ka naam hoga 
// //O:hello world

// //------------------Arrow function---------------

// //normal fuction
// // function hello(){

// // }


// //Arrow function
// // let hello = () => {
// // console.log(" i am arrow function")
// // }
// //arrow function ma function ka word nhi likhta balqa direct bracket() lgata ha
// //or function ka keyword ki jga => used krta ha then {}
// // hello()
// //O:i am arrow function

// //acha agr humko arrow function ma parameters pass krna ho

// //agr ma-------- normal function ------ma krta to kaise  hota 

// // function hello(name){

// //     console.log("Hello "+name)
// // }
// // hello("RAZA")
// // //O:Hello RAZA

// //---arrow function ma parameters pass krta ho

// //let hello = name => {
//     //agr aik hi parameter ha to hum () bhi hata sakta ha or direct parameter likh sikhta ha

//     //console.log(`Hello ${name}`)
//       //  }
// //hello("RAZA")    
// //O:Hello RAZA

// //yani ES6 hum ko jaldi kam krka dedya ha 

// // //Acha agr mujha aik sa ziada parameters pass krna ha arrow fuction ma to ma kya kro ga
// // let hello = (name1,name2)  => {
//     //hum na bracket islya lagya ha kyuka aik sa ziada parameters tha
// //      console.log(`Hello ${name1} and ${name2}`)
// //        }
// // hello("RAZA","ALI")
// //O:Hello RAZA and ALI

// //Acha ma hum isma ----------return---------pass krka dekhta ha

// // let hello = ()  => {
//     //ap yha bracket () ki jga (_) underscore bhi lga sakta ha
// //      return "ghous"
// // }

// // console.log(hello())
// //O:ghous

// //Acha hum chata ha return keyword na used ho or curly bracket bhi na used ho  
// // let hello = ()  => "ghous"
//  //ap yha bracket () ki jga (_) underscore bhi lga sakta ha

// // console.log(hello())
// //O:ghous


// //acha hum arrow function ma  this bhi pass krsakta ha

// //phela hum normal fuction ko dekhata ha ]
// // function foo(name){
// //     console.log(this)
// // }
// // foo()
// //agr hum normal function ma this ko call kro to wo isi function ko target krta ha


// //lekin arrow function ma this is fuction ka parent ko yarget krta ha
// // let hello =() =>{
// //     console.log(this)

// // }

// //CALL BACK FUNCTION AND HIGHER ORDER FUNCTION

// //hum na para tha

// //ab humna parameter ka ander function pass kya ha ya kehlata ha call back function
// //setInterval(() =>console.log("hello"),1000)
// //yani after seconds baat brbr hello ajaa

// ///---------Call back fuction-------------
// //example:Ali na call ki mujha na mna kha ma abhi busy ma apko call back krta hon
// ///is tarh callback function ma bhi hoto ha

// //suppose kra hum firrebase sa data get kra rha 
// // let getData =(render_data)=>{
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(data => {
//     // // firebase.database().ref('/').on("child_added",(data)=>{
//     //     console.log(data())
//         // render_data(data.val())
//     // })
// // })
// // }


// // getData(render_data())
// // let render_data =(data) =>{
// //     console.log(data)
// // }

// //another example for call back function

// //getdata ko hum higher order function ha .
// //-------higher order function:asa function jo koi function as a parameter leta ha -------

// // let getData =(render_data)=>{
// // setTimeout(() =>{
// //     render_data("ghous") 
// // },3000)
// //   }

// // let render_data =(name) =>{
// //     console.log(name)
// // }

// // getData(render_data)
// // //o:ghous


// //-----------------higher order function-----------

// //---Arrays funtion :Array ka kuch function ko hum higher order function bhi kheta ha

// // let arr =[{name:"ghous",age:20},{name:"basit",age:30}]

// //phela normal function sa dekta 
// // let filter =arr.filter(function(a){
// // return true
// //Jb ma return true pass kro ga to array ka ander ki tamam values filter hojaa gi

// //  return a.age ===20
//  //a ka ander pora humko element mil rha ha .ab hum na condition lgadi ka agr 
//  //element ki age 20 ho to element do wrna false do

// // })
// // console.log(filter)
//  //O: (2) [{…}, {…}]
// // 0: {name: "ghous", age: 20}
// // 1: {name: "basit", age: 30}
// // length: 2
// //Jb ma return true pass kro ga to array ka ander ki tamam values filter hojaa gi


// // jb mna  return a.age ===20
//  //a ka ander pora humko element mil rha ha .ab hum na condition lgadi ka agr 
//  //element ki age 20 ho to element do wrna false do
// //O:0:
// // age: 20
// // name: "ghous"

// //basically filter ka funtion na dono ko check kya hoga or jha age 20 thi wo objectt/element
// ///humko dedya 

// //ab arrow function sa bnata ha

// // let filter=arr.filter((a)=> console.log(a))

// //O:{name: "ghous", age: 20}
// // {name: "basit", age: 30}
// // is na object ko filter kr lya ha
// //filter bhi aik function jo apna ander parameter la rha ha 
// //filter ko highorder function bhi bol sakta ha 
// //asa function jo ouput ma function da isko hum callback function kehta ha

// // let arr =[{name:"ghous",age:20},{name:"basit",age:30}]
// // let filter=arr.filter(a=> a.age ===20 )
// // console.log(filter)
// //0: {name: "ghous", age: 20}
// // length: 1

// //to yaad rakha agr ap true return kra ga to array  ka sb elements ko la aega 
// //agr ap false return kra ga to ksi ko bhi nhi laega kahli array la ae ga 
// //to humna true or false likhna ka bajaa humna condition lga di

// // filter hum  search ka lia bhi used kr sakta ha ksi website ma

// //-------SEARCH------
// // let name="ghous"
// // let search="gh"
// //console.log(name.startsWith(search))
// //O:true
// // if(name.startsWith(search)){
// //     console.log(name)
    
// // }
// //O:ghous
// //yani user na lkha gh or search kiya to ghous print hoga 
// //startwith shuru sa match kr rha ha phela g check phr h check

// // let name="raza"
// // let search="a"

// // if(name.endsWith(search)){
// //     console.log(name)
// // }
// //yani user na lkha a or search kiya to raza print hoga 
// //endswith end sa match kr rha ha phela a check phr z check
// //O:raza

// //filter ki tarh array ka aik or function hota ha wo ha
// //----------- MAP--------------------
// //isma bhi hum array deta ha ya porani arry ko update krka new array bnadeta ha
// // let arr=[2,3,4,5];
// console.log(arr)
// // O:(4) [2, 3, 4, 5]
// //ma chata hon array ma jitna elements ha inko 2 sa multiply krado
// // let multiply=arr.map(a => a*2)

// //map bhi aik function ha is ma mna aik prameter dya ha or mna return a*2
// //yani pora array ko wo phela get kra ga is ka baat sb elment ko 2 sa * kr daga 
// // console.log(multiply)
// //O: (4) [4, 6, 8, 10]

// //acha agr element hamra pass object to hum isko nhi change krasakta ha
// let arr=[{name:"Ali"},{name:"hassan"}]
// console.log(arr)
// let namechange=arr.map(a => a.name="Raza")
// console.log(namechange)
//O:(2) ["Raza", "Raza"]
// 0: "Raza"
// 1: "Raza"
// length: 2
// __proto__: Array(0)


//agr ap ko table data render krna ha
//let multiply=arr.map(a => a*2{
  //  document.getElementById("table").innerHTML=a.name
//is tarh hum user sa data lekr ksi table ma insert krsakta ha
//})

//callback wo jo ksi fuction ja kr call hota ha
//or callback function jis function ma call hoga wo higher order function kehlta ha

//javascript client sight language ha 

// -----------fetch---------
//data sa baat krna ka lia server used krta ha 


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//fetch ka ander-->httpps------.com ya ha domain
//fetch sa murad hum koi promise ko call kr rha ha
// .then(response => response.json())
//matalb agr string ma json ma krdo

//.then(data => console.log("result",data))
//.catch(err => console.log("error",err))

// O:{userId: 1,
//      id: 1, 
//      title: "delectus aut autem",
//       completed: false}
//       completed: falseid:
//        1title: "delectus aut autem"userId: 1
// __proto__: Object

//hum fetch ko short bhi krsakta ha
// async function getData(){
// //ma chata hon .then or .catch used na kro to iski jga hum
//     let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
// // await->yani jb yq fbi sa data uth krna ae next nhi chalae
// console.log(data)

// }

//----------ES6 classes--------------

//hum na ES5 ma pra tha
//constructor
// function student(name,email){
//     this.name =name,
//     this.email =email
// }
// // /instance
// let student1=new student("ghous","mudassirraza12345@gmail.com")
// console.log(student1)
//O:student {name: "ghous", email: "mudassirraza12345@gmail.com"}
// email: "mudassirraza12345@gmail.com"
// name: "ghous"

//ES6 na isko likhna asan krdia ha 

// class Student{
//     constructor (name,email){
//         this.name=name
//         this.email=email
//     }

// }
// let student1=new Student("ghous","mudassirraza12345@gmail.com")
// console.log(student1)
//student {name: "ghous", email: "mudassirraza12345@gmail.com"}
//email: "mudassirraza12345@gmail.com"
//name: "ghous"

//hum do class ko merge bhi krsakta ha

// class Student{
//     constructor (name,email){
//         this.name=name
//         this.email=email
//     }

// }
// class School extends Student{
//     constructor (name,email,school){
//         super(name,email)
//         //super ma upper wali class jo get krna ha wo aega 
       
//         this.school=school
//     }

// }
//for merge we used extends
// sb sa phela constructor -->extends(used for merge) -->jis class ko merge krna ha wo
//super ma is class ka parameter daga jisko mujha merge krna ha
//let student1=new School("ghous","mudassirraza12345@gmail.com","Sayalani")
console.log(student1)
// O:School {name: "ghous", email: "mudassirraza12345@gmail.com", school: "Sayalani"}

