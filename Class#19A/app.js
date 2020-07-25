var list =document.getElementById("list")


//create li tag with text node
function addTodo(){
    var todoitem=document.getElementById("todo-item")
    var li=document.createElement('li')
    var litext=document.createTextNode(todoitem.value+" ")
    li.appendChild(litext)
    list.appendChild(li)

    //create edit
    var editbtn=document.createElement("button")
    var edittex=document.createTextNode("Edit")
    editbtn.setAttribute("class","btn")
    editbtn.style.margin="5px";
    editbtn.appendChild(edittex)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")



    //createdelbtn
    var delbtn=document.createElement("button")
    delbtn.setAttribute("class","btn")
    //aik sa ziada attribute set krsakta ha
    
    delbtn.setAttribute("onclick","deleteItem(this)")
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga
    //yani yhi wala button pora this ka through get krsakta ha
    var delText=document.createTextNode("Delte")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)



        list.appendChild(li)
    //  console.log(li)
    
    
    
    
    todoitem.value=""
     //for making empty input field

}
function deleteItem(e){
    //e means pora delte button
    //mna parentNode joka li thi isko get kya 
    //.remove() (del krda ga is li ko)
    e.parentNode.remove()
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga

    
}
function deleteAll(){
    //list means ul -->humna ul ki value empty krdi
    list.innerHTML=""
}
function editItem(e){
    
     //e.parentNode.firstChild  -->default value -->porani input value
    var editValue=prompt("Enter edit value",parentNode.firstChild.nodeValue)
   
    
    e.parentNode.firstChild.nodeValue=editValue

}