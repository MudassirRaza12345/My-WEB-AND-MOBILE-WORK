// -- ------DOM STARTED--------- 
///index.html ma jitni bhi files ha sb ko child.Nodes[] sa target ya call
  //array sa  
// console.log(document.childNodes[0])
//output:<!DOCTYPE html> because array ma first pr ya stored ha                                     

// console.log(document.childNodes[1])
//output: mera ps pora mare html ka tag agya 
//  <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <!-- ------DOM STARTED--------- -->
//   <div id="pappa">
//     <p>First son</p>
//     <p>Second son</p>
//     <p>Third son</p>
// </div>

// <!-- Basically jo html ka page ka structure jo Doct Type
// sa start horha ha ya sb  like an array  ha .yani sb aik array
// ma stored ha  -->
    
// </head>
// <body>
    
// </body>
// <script src="app.js"></script>
// </html>   

// Ab agr chata hon ka html ka tag ka ander head ka tag ya body ka ta ko target
// kro to kis tarh kro ga ab wo dekhta ha

// console.log(document.childNodes[1].childNodes[0])
// ab mna html ka tag ka ander .childNodes[0] -->yani mna head ko target kiya
//ha
//output:
//  <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>


// console.log(document.childNodes[1].childNodes[1])
// ab mna html ka tag ka ander .childNodes[1] -->yani mna body ko target kiya
//ha
// output:#text --.chunk artifact khelata ha
// basically #text
// </head>space---------------------------- 
// <body> 
// ya jo space basically yahamra #text ha ha


// is cheez ko hum theek is tarh karaga 
// </head><body> 
// console.log(document.childNodes[1].childNodes[1])
//ab humna body ko target kiya ha 
//output:hari body aegi
// <body>
//     
//     <div id="pappa">
//         <p>First son</p>
//         <p>Second son</p>
//         <p>Third son</p>
//     </div>

//     <!-- Basically jo html ka page ka structure jo Doct Type
//     sa start horha ha ya sb  like an array  ha .yani sb aik array
//     ma stored ha  -->

// </body>

// // Acha ab mujha ab body ka ander jana ha div pr
// console.log(document.childNodes[1].childNodes[1].childNodes[0])
// // output:#text aya ha

// is ko theek is tarh kra ga
//</head><body><div id="pappa">
// console.log(document.childNodes[1].childNodes[1].childNodes[0])
//output :
// <div id="pappa">
//         <p>First son</p>
//         <p>Second son</p>
//         <p>Third son</p>
//     </div>


// HUM </head><body><div id="pappa"> IS TARH KAM NHI KRSAKTA 
//SOLUTION:
//</head          YANI HEAD KA ENTERING IS TARH BODY SA JOR DA GA
//><body           isi tarh body ka tag(>) ko div sa jor daga  
//><div id="pappa">
//is sub sa hua ya ka apna
// closing tag ka ander jo  space ha wo barha diya ha
///appas ma jo aik tag or dorsatag ka darmian jo space ha wo ap na
//khatam krdia ha 
//e.g
//</head\\




//><body>
// ab apply krka dekhta ha
// console.log(document.childNodes[1].childNodes[1].childNodes[0])
//(</head
// ><body
// ><div id="pappa">)

//ab mujha div mila
//output:
// <div id="pappa">
//         <p>First son</p>
//         <p>Second son</p>
//         <p>Third son</p>
//     </div>

// dosra tariqa ya ha ap apni pori application complete krala
//is ka baad aik website ha 
//html minify 
//ya ap apni pori html ko file ko index.html sa cut kr ka paste krda 
//to ya ap ka code ko minify kr da ga iska website sa cut kra wapis
//index.html ma paste kra apni website ko deploy krda
//is tarh ap #text ya error nhi ae ga


// var a =document.getElementById('pappa')
// console.log(a.childNodes[0])
//agr ma 0 kro ga childNodes[0] to output:#text because of space
// console.log(a.childNodes[1])

// or ap is tarh bhi krsakta ha
// console.log(a.firstChild)
// isma mujha space ko remove krna hoga(><p id="Firstson">ALI</p>) 
// (wrna o:#text aega)
// o:<p id="Firstson">ALI</p>


// ab ma direct id sa fistson ko target kr rha ho
//ap ka bhai dhon rha ha bhaya ko
//var a =document.getElementById('Firstson')
// isma bhi mujha space ko remove krna hoga(><p id="Secondson">ALI</p>
//><p id="Thirdson">ASAD</p>) 
// (wrna o:#text aega)
// console.log(a.nextSibling)
// console.log(a.nextSibling.nextSibling)
// Firstson ma mera ps do cheeza ha  phela beta or iska baad wala beta 
//(sibilings)
//o:<p id="Secondson">RAZA</p>
//<p id="Thirdson">ASAD</p>
 
//bacho ko pappa dhond rha ha 
// var a =document.getElementById('pappa')
//isma bhi mujha space ko remove krna hoga(><p id="Thirdson">ASAD</p
//></div>)

//pappa apna akhri beta ko dhon rha ha
// console.log(a.lastChild)
//o:<p id="Thirdson">ASAD</p>

//ab dosra bhai  apna pappa ko dhond rha ha 
// var a =document.getElementById('Secondson')
// console.log(a.parentNode)
//o:<div id="pappa"
// ><p id="Firstson">ALI</p
// ><p id="Secondson">RAZA</p
//     ><p id="Thirdson">ASAD</p
//         ></div>

// ab ma maloomkr rha hon first son ma mera ps konsi Nodetype ha
// var a =document.getElementById('Firstson')
// console.log(a)
//o:<p id="Firstson">ALI</p>
// console.log(a.nodeType)
//o:1
//console.log(a.childNodes[0])
//o:"ALI"
//console.log(a.childNodes[0].nodeType)
//O:3
//agr element hoga to apka ps Nodetype 1 ae ga
//agr chunk(#text ---.space) hoga to apka ps Nodetype 3 ae ga 

//Nodetype define into two parameters
// Nodetype 1 means element ha
// Nodetype 3 means chunk(space or#text) ha


// Acha ma node ka name maloom krna ha
//var a =document.getElementById('Firstson')
//console.log(a.nodeName)
//O: (tag name)

// Acha ma node ka name maloom krna ha
//var a =document.getElementById('pappa')
//console.log(a.nodeName)
//O:div (tag name)

//suppose <div id="pappa">
    // lmkgkjfkgfkjhk
    // <p id="Firstson">ALI</p
    // ><p id="Secondson">RAZA</p
    //     ><p id="Thirdson">ASAD</p
    //         ></div>
//ab ma chata pr mujha ya text mila 
// var a =document.getElementById('pappa')
// console.log(a.childNodes[0])
//O:"lmkgkjfkgfkjhk"

//second way to do this
// var a =document.getElementById('pappa')
// console.log(a.childNodes[0].nodeValue)
//O:lmkgkjfkgfkjhk


//ab ma chata hon aik div ma jitna paragraph ha sbko target kro
var a =document.getElementById('pappa')
console.log(a.childNodes)
//O:Chunk or teen paragraph ajaa ga
