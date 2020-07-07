// //one way
// // function readmore(){
// //     var text ="consectetur adipisicing elit. Consequuntur fuga maiores doloremque. Autem ut consequuntur eos eum possimus recusandae omnis, rationedolores placeat sint explicabo nobis libero consectetur exercitationem beatae?"
// //     var paragraf =document.getElementById('pera')
// //     paragraf.innerHTML=text

// // }



// //second way

// // function readmore(){
// //     var text =document.getElementById('text').innerHTML 
// //     //.innerHTML-->used for copy the text on id="text" in variable text
// //     var paragraf =document.getElementById('pera')
// //     paragraf.innerHTML=text

// // }



// // function readmore(){
// //     var text ='<ul  > <u style="text-decoration: underline red;">LISTS</u>  <li>LIST 1 </li><li>LIST 3 </li><li>LIST 2 </li> </ul>' 
// //     //.innerHTML-->used for copy the text on id="text" in variable text
// //     var paragraf =document.getElementById('pera')
// //     paragraf.innerHTML=text

// // }




// //jb phela sa koi class define na ho to ya code work kra ga
// // function BIG(){
// //     var img =document.getElementById('car')
// //     img.className='hidden'
// // }


// //jb sa phela sa class define ho to ya code work kra ga
// // function BIG(){
// //     var img =document.getElementById('car')
// //     img.className +=' hidden'
// // // += ' hidden -> space hidden means phela ki tamam classes ko remove krka
// // // hidden wali class lga do

// // }


// // function changeimage(){
// //     var car =document.getElementById('img')
// //     car.src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg"
// // }

// // function changeimagebefore(){
// //     var car=document.getElementById('img')
// //     car.src="download.jpg"
// // }

// // we can do onmouseover and onmouseout though one fuction
// // function changeimage(id,src){
// //     var img =document.getElementById('img')
// //     img.src=src
// // }

// //qb fuction ka through style da rha hon
// // function changeimage(){
// //     var img =document.getElementById('img')
// //     img.style.width='100%'
// // }

// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.fontSize='2em'
// // }

// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.cssFloat = "left"; 
// //     }

// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.visibility = "hidden"; 
// //     }


// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.margin = "0px 10px 0 10px;"; 
// //     }

// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.padding = "0px 10px 0 10px;"; 
// //     }

// // function changeimage(){
// //     var img =document.getElementById('pera')
// //     img.style.margin; 
// //     }

// // function changeimage(){
// //     var img =document.getComputedStyle('pera').margin;
// //      }


// //here we target paragraph through tag
// //basically all the paragraph are store in array
// //we can access all paragraph through index number
// //on first index 1 pr paragraph 2 stored

 
// // var img =document.getElementsByTagName('p');
// // img[1].style.color='red';

// //Apply css on all paragraph through loop
// // var img =document.getElementsByTagName('p');

// // for(var i=0;i<img.length;i++){
// //     img[i].style.color='blue'
// // }


//ab hum div ka ander paragraph ko target kr rha ha
//mna div ko aik variable ma store krdia
var parent=document.getElementById('parent')
var img=parent.getElementsByTagName('p')
for(var i=0;i<img.length;i++){
    img[i].style.color='red'
}


 



