// // function foo(){
// //     var name="ghous"
// //     //YA VARIABLE FUNCTION KA SCOPE HA  
// // }
// // foo()

// //var name="basit"
// // function foo(){
// //     // var name="ghous"
// //     name="ghous"
// // }
// //console.log(name)
// //O: basit

// //now function call
// // foo()
// // console.log(name)
// //O:basit

// //ab mna function ka ander sa var bhi hatadya
// // foo()
// // console.log(name)
// //O:ghous

// //YANI AGR MA FUCNTION KA ANDER VARIABLE BANAO GA TO WO MUJHA FUCTION CALL HONO PR MILA GA
// //LEKEN AGR MA FUCTION KA BHR VARIABLE DECLARE KRO GA TO WO MA MUJHA FUNCTION KA ANDER BHR 
// //DONO JGA MILA GA  

// // if(true){
// //     var name ="ghous"
// // }
// // console.log(name)
// //O:ghous

// // NOW ES6 start
// // -------------------------------variables :var,let and const---------------------

// // ES6 ma variable define krna ka aik naya tariqa ha wo let
// //let scope sirf jha curly({})bracket hoga wha used hoga


// // if(true){
// //     let name ="ghous"
// // //ab agr ma ander let ko target kroga to let mujha mil jaa ga lekin agr ma isko bhr target
// // //kro ga to ya mujha nhi mila ga
// // }

// // for (var i=0;i< 5;i++){
// //     // let fullname ="basit"
// // }
// // console.log(fullname)
// // O:reference error ae ga(fullname is not define) kyuka hum sirf { } ka ander let ko excess 
// //krsakta ha bhr nhi
// //basically let ka scope locally hota ha jbka var ka globally hota ha

// // if(true){
// //     let fullname ="basit"
// // }
// // console.log(fullname)
// // O:reference error ae ga(fullname is not define) kyu hum sirf { } ka ander let ko excess krsakta ha bhr nhi
// //basically let ka scope locally hota ha jbka var ka globally hota ha

// // var lastname="basit"
// // var lastname="Ahmed"
// // console.log(lastname)
// // O: Ahmed
// //YANI ES5 ma var ka keyword istemal krka hum variable ko brbr declare krsakta ha


// // let lastname="basit"
// // let lastname="Ahmed"
// // console.log(lastname)
// //o: Uncaught SyntaxError: Identifier 'lastname' has already been declared

// //YANI ES5 ma var ka keyword istemal krka hum variable ko brbr declare krsakta ha

// //lekin ES6 ma jb let ka keyword used kra ga to variable ko aik dfa hi declare krsakta ha 
// //brbr nhi krsakt ha 

// // let lastname ;
// // lastname="basit"
// // console.log(lastname)
// // o:BASIT


// // agr mujha koie asa data used krna  jo sirf readable ho to iska ia hum const ka 
// //keyword used kra ga 
// //matlab na hum isko update,delete or edit krsaka just only hum isko read krsaka
// //acha const ko bhi hum aik brbr declare krasakta let ki tarh brbr nhi declare krasakta 
// // const school="SAYALANI"
// // const school="SAYALANI"
// // const ko bhi hum aik brbr declare krasakta let ki tarh brbr nhi declare krasakta
// // (O:app.js:89 Uncaught SyntaxError: Identifier 'school' has already been declared)
// // var obj={
// // schoolName:school 
// // }
// // console.log(obj)
// // // O:{schoolName: "SAYALANI"}

// //------------------- Template Literals ---------------------------

// // let firstName="ghous";
// // let lastName="Ahmed";
// // console.log(firstName+" "+lastName)
// //yha to mna do variables concatenate krea ha 

// //lekin agr mujha do sa ziada varaiable concatenate krana hoga to ma kya kro ga
// // let firstName="ghous";
// // let lastName="Ahmed";
// // //hum bateq(``)tab ka upper hota ha
// // // console.log(`My name is ${firstName} ${lastName}`)
// // //agr humko koi variable ka name upper sa get krna ha to hum `${variableName}`
// // //or agr koi string  likhna  ho directly dollars sa phela likha sakta ha 
// // // O:My name is ghous Ahmed

// // // isko hum firebase mabhi used krsakta ha 
// // firebase.database().ref(`karachi/sayalani/webmobile/${firstName} ${lastname}`)

// //----------------------spread operators-------------

// // var students1=["ghous","basit"]
 
// // var students2 =["ahmed","umair"]

// // acha agr mujha in dono array ka data merge krna ha

// //first way
// // var merge =students1.concat(students2)
// // console.log(merge)
// //O:
// // //Array(4)
// // 0: "ghous"
// // 1: "basit"
// // 2: "ahmed"
// // 3: "umair"
// // length: 4

// //second way
// //agr ma student2 call kro to mera pass student1 ka bhi data ho
// // var students1=["ghous","basit"]
 
// // var students2 =[...students1,"ahmed","umair"]
// //... (spread operator)
// // console.log(students2)
// //O: ["ghous", "basit", "ahmed", "umair"]
// // 0: "ghous"
// // 1: "basit"
// // 2: "ahmed"
// // 3: "umair"
// // length: 4


// //yhi cheez ksi object pr bhi hum krsakta ha
// // var students1={NAME:"basit"}
 
// // var students2 ={...students1,school:"SAYLANI"}
// // console.log(students2) 
// //O:{NAME: "basit", school: "SAYLANI"}
// // NAME: "basit"
// // school: "SAYLANI"

// //-------object destructuring-----------

// // va1r student={
// //     name:"ghous",
// //     school:"sayalani",
// //     roll:123

// // }
// // console.log(student.school)
// //ya tariaqaha object sa value get krna ka 
// //lekin ES6 na isko  asan bnadya ha destructuring ka zarya
 
// // let {name,school,roll} = student;
// //mna curly bracket bnaa phir isma object ki keys dedi ha or phir = ka baad is object
// // ka naamdya ha
// //ab student ki property as variable declare krdaga or inki value ko get krla ga

// // console.log(name)
// // console.log(school)
// // console.log(roll)
// //O:ghous
// //  sayalani
// // 123

// //---------------ternary operators--------------
// //examples
// // var age =20;
// // if(age >30){
// //     console.log("30 sa bara ha")
// // }
// // else{
// //     console.log(" 30 sa  choto")
// // }
// // ya thi if esle ki condition 
// // ES6 na isko or asan bnadya ha
// // var age =20;

// // //var check = age > 30 ? "30 sa bara ha" : "30 sa chota ha"
// // // ? --> represent bracket()
// // // : --> represent else
// // // console.log(check)
// //30 sa chota ha

// //acha hum if condition ma AND or OR used krta ha isi tarh is ma bhi used krsakta ha
// //examples
// // if(age >30 || age < 50)

// //ES6 ma bhi isko is tarh used kraga
// // var age =20;

// // var check = age >30 || age > 40 && age < 50 ?  "30 sa bara ha" : "30 sa chota ha"
// // ? --> represent bracket()
// // : --> represent else
// // console.log(check)
// //O:30 sa chota ha

// // var bool=true;
// //is ma dekhta ha ka agr boolean true hojaa to dekhana otherwise nhi dekhana
// //DOM pr boolean kabhi rander nhi hota ha
// // var name =bool && "Ghous";
// // console.log(name)
// // O:Ghous

// // var bool=false;
// // var name =bool && "Ghous";
// // console.log(name)
// // O:false


// //--------Async or sync --------------
// // console.log("Number 1")
// // console.log("Number 2")
// // console.log("Number 3")
// // O:
// //Number 1
// //Number 2
// //Number 3

// //lekin ma chata hon number2 phela ae number1 baad ma ae
// // setTimeout(function(){
// //     console.log("Number 1")

// // },1000)
// // console.log("Number 2")
// // console.log("Number 3")
// // O:
// // Number 2
// // Number 3
// // Number 1

// //yani sb sa phela number2,number3 print ho or 1 second baat number1 print ho

// //isko bolta ha Asynconer javascript

// //acha ab farz kra ma database sa data mangwara rha hon
// var name12;
// setTimeout(function(){
//     name:"Ghous Ahmed"

// },1000)
// console.log(name12)
//O:undefined
//after 1 second ka baat bhi data nhi aya 

//ab ma kis tarh apna data print kro

// iska lia ma--------------- promise-------------- used kro ga 
// example
//agr mana  ali sa promise kya ha ma zinger khulao ga 10 bhja
// agr ali na 10 bja sa phela muj sa poucha zinger ka to ma bola ga status pending ha
//agr 10 bja ka baad status yani agr ma burger khaladya to status approved hojaa ga

// --------promises-----------------
//ab dekta ha promise banta kaise ha
// var promise=new Promise(function(resolve,reject){
    //Pomise ma hum fuction bnata ha or isma wo hum 2 parameter deta ha
    // var zinger="Available";
//     var zinger="NHI Available";

//     if(zinger==="Available"){
//         resolve("han mna zinger ali ko kuladia ")
//     }
//     else{
//         reject("han mna zinger ali ko nhi kuladia ")
//     }

// })
// // acha ab ma promise ko get kroga iska 2 methods 
// //1 method
// //.then or .catch dono promise ma istemal hota ha or dono aik sath upper nicha istemal
// //hota ha
// promise.then(function(data){
// console.log("Resolve==>",data)
// //agr promise resolve to .then ma data mila ga
// //o:Resolve==> han mna zinger ali ko kuladia
// })

// promise.catch(function(error){
//     console.log("Error==>",error)
//     // agr promise reject to .catch ma data mila ga
//     //o:Error==> han mna zinger ali ko nhi kuladia
// })

//promise firebase ma used hoga 

//ap farz kra firebase sa data get kr rha ha



// firebase.database().ref("user").on("child_added",function(data){
//     console.log(data.val())
// //hum isi tarh firebase sa data get krta ha 

// })
// // lekin agr hum fuction ka bhr data chaya
// // console.log(data.val())
// //ab muja yha data bhr nhi mila ga 
// function getData(){
//     // agr mujha is jga data chaya to mujha promise used kro ga
// }

var promise=new Promise(function(resolve,reject){
if ( true){
    setTimeout(()=>{
        resolve(" It's resolve")

    },3000)
    //matlab 3 seconds baat resolve kraga
    
}
else{
    reject(" It's not resolve")
}

})
console.log(promise)
// Promise {<rejected>: " It's not resolve"}

//3 seconds baat ae ga
// Promise {<pending>}

promise.then(function(data){
    console.log("Resolve==>",data)
//O: Resolve==>It's is resolve
})

promise.catch(function(error){
    console.log("Error==>",error)
//O:Error==> It's not resolve

})





// let promise=new Promise(function(resolve,reject){
//     firebase.database().ref("user").on("child_added",function(data){
//         if((data.val())){
//             resolve(data.val())    
//         }else
//         reject("something went wrong")
        
//     })
        

// })
// promise.then(function(data){
//     console.log(data)
// })

// promise.catch(function(error){
//     console.log(error)


// })
