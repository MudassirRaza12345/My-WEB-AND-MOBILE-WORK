// var list=document.getElementById("li1")
// console.log(list)

//agr ma class sa get krna chao
// var list=document.getElementsByTagName("li")
// console.log(list)
//jitna bh li hoga sb ko le aega 

//kabhi document..getElements
//agr element hoga to aik sa ziada elements lakr daga
//chaha wo kahi sa bhi get kr rha ho aik sa ziadalist humko dega

//ab ma chata ho third wala li ko target kro
// var list=document.getElementsByTagName("li")
// console.log(list[2])
//o:<li>3</li>

// var list=document.getElementsByTagName("li")
// console.log(list[3])
//O:<li>4</li>

//now counting elements
//var list=document.getElementsByTagName("li")
//console.log(list.length)
//O:4
//jitna bhi li ka elements hoga wo humko bataa daga


// ch:65
// var target=document.getElementById("p1")
//ab ma chata ho p1 ma check kro ka isma class ka attribute ha ka nhi
// if(target.hasAttribute("class")){
//     alert("available")
// }
//     else{
//         alert("not available")
//     }
//hasAttribute aik function jis ma hum  argument pas krta ha 
//or wo batata ha true(attribute present) or false(attribute not present)
//isi tarh hum image ka src,a(link) ka href etc
// ksi bhi cheez ka attribute check kr sakta


//acha hum ya cha rha ha ka class to di hue ha pr wo kis name sa ha ya find 
//krna ha 
// var target=document.getElementById("p1")
// console.log(target.getAttribute("class"))
//agr p ka attribute hoga to wo iska name uthakr ladaga
// O:abc 

//acha agr koi attribute set krna chata ha
//target.setAttribute("class",'blue')
//set attribute ma hum do cheez daga 
//1. class (attribute)
//2.attribute value
//console.log(target.getAttribute("class"))


// ch:66
// ab ma dekna cha rha hon p elements ka pass kitna attribute ha
// var target=document.getElementById("p1")
// console.log(target.attributes)
//output:
//0: class
//1: id
//2: lang


// var target=document.getElementById("p1")
// //acha ma agr chata hon 1 wala attribute ka node name maloom kro

// console.log(target.attributes[0].nodeName)
// //O:class

//var target=document.getElementById("p1")
//acha ma agr chata hon 1 wala attribute ka node ki value maloom kro

//console.log(target.attributes[0].nodeValue)
//O:abc

// imp ch:67

//hum javascipt sa bhi koi element create kr sakta ha
//var p=document.createElement('p')
//create element ma ap html ka koi bhi tag da sakta ha 
//or wo create hojaa ga
// console.log(p)
//O:<p></p>

// //agr ma pa ki jga img likh do
// var p=document.createElement('img')
// console.log(p)
//O:<img>

//agr ma  h1 likh do
// var p=document.createElement('h1')
// console.log(p)
//o:<h1></h1>

//var p=document.createElement('p')
//acha element to create hogya ab hum iska ander iska text banaaga
//var text =document.createTextNode("hello world")
//createTextNode ka zarya hum text create kra ga
//acha ma chata ho jo mna text create kiya ha wo p ka tag ma chalagaa

//p.appendChild(text)
//appendchild ka though hum p ma value insert krda ga 
//console.log(p)
 //Acha ab ma chata ho ko jo humna jo p ka tag bnaya ha
//wo index.htmlki file ma la ao 
//var main=document.getElementById('main')
//main.appendChild(p)

// var p=document.createElement('h1')
// var text =document.createTextNode("MUHAMMAD MUDASSIR RAZA")
// p.appendChild(text)
// var main=document.getElementById('main')
// main.appendChild(p)

// function addMessages(){
//     var val =document.getElementById("val")
//     var p=document.createElement('p')
//     var textNode=document.createTextNode(val.value)
//     p.appendChild(textNode)
//     var messages=document.getElementById("messages")
//     messages.appendChild(p)
//     val.value=""
// }

// ch:68
var parentDiv = document.getElementById("main")
var nodeToRemove = parentDiv.childNodes[0]
parentDiv.removeChild(nodeToRemove)