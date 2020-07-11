// function getValue(){
//     alert("test")
// }
// function setValue(){
//     var name =document.getElementById("name")
//     // console.log(name.value) 
//     //jb ma set pr click kro ga 
//     //get the value from input field and print
//     //to console
//     name.value="basit" 
//     //yani set pr click kroga to input ki value
//     //basit hojaagi
// }
//value is used to get/set from input box ,button

//ma paragraph likho ga through js
// function setValue(){
//     var para =document.getElementById("para");
//     para.innerHTML="this is example text"
// }

//.innerHTML is used to get/set  in paragraph ,div etc
//inner.Text =ap sirf text likh sakta
//inner.Html=ap text or HTML ka tag bhi used krsakta ha


// function bigimage(){
//     var image=document.getElementById("img")
//     image.className="big"
//     //javascript ma istar class deta ha
// }
//yha ma class name change kr rha hon
//matlab jb user button pr cick kra ga to class change hojaa gi

// function smallimage(){
//     var image=document.getElementById("img")
//     image.className="small"
//     //javascript ma istar class deta ha
// }
//yha ma class name change kr rha hon
//matlab jb user button pr cick kra ga to class change hojaa gi


// function on(){
//     var a =document.getElementById("bulb")
//     a.src="images/on.jpg"

// }
// function off(){
//     var a =document.getElementById("bulb")
//     a.src="images/off.jpg"
//     a.style.width="200px"
//     a.style.height="300px"
    
// }

function addclass(){
    var para =document.getElementById("para")
    // para.className="bold"
    //multiple class
    para.className +=" bold blue"
}

function getelements(){
    var element=document.getElementsByTagName('p')
    console.log(element)
}
getelements()