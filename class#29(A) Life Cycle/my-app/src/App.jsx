import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons' ;
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import AppRouter from './config/Router'
// ab jha pr bhi ma firebase used krna chato ho to wha import kro ga
// import firebase from './config/firebase.js';

// import logo from './logo.svg';
// import './App.css';
// import {Bolo,Header,  Logo } from './component/header';
// import Footer from './component/footer';
// import { Navbar } from 'react-bootstrap';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />

// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //         MUHAMMAD MUDASSIR RAZA
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// // functional component
// // function App() {
// //   return (
// //     <div className="App">
// //      <h1>MUHAMMAD MUDASSIR RAZA</h1> 

// //              </div>
// //   );
// // }

// //class component
// // class App extends React.Component{
// //   render(){
// //          return(
// //       <div className="App">
// //       <h1>MUHAMMAD MUDASSIR RAZA \</h1> 

// //               </div>

// //  )
// //   }
// // }
// //class component ma variable kaise banta ha 
// // class App extends React.Component{
// //   render(){
// //     //  let name ="Ghous"
// //     let firstname="Ghous"
// //     let lastname="Ali"
// //     let arr=[1,2,3,4,5]
// //     return(
// //       // <div className="App">
// //       // <h1> {name}</h1> 

// //       //         </div>
// //       <div className="App">
// //       <h1> {`${firstname} ${lastname}`}</h1> 
// //       <h1>{arr}</h1>      
// //               </div>

// // class App extends React.Component{
// //   render(){
// //      //mna yha do objects create kra ha
// //     let todos =[{text:"ghous"},{text:"ali"}];
// //     return(
// //              <div>
// //        <ul>{todos.map((item,index)=>{
// //         console.log(item)
// //         //jb bhi ap map used kraga or jb items return kraega to key prop/attribute used kraga
// //         //key={index} yani hr item ki key  unique ho
// //        return <li key={index}> {item.text}</li>
// //        })}</ul>      
// //               </div>



// //  )
// //   }
// // }

// //ma aki file ma multiple component bhi bna saktta ha 
// // class Header extends Component{
// //   render(){
// //     return(
// //       <div>   
// //          {/*yha class nhi balqa className used kraga  */}
// //         <h2 className="Header">Header</h2>

// //       </div>
// //     )
// //   }
// // }
// // class Footer extends Component{
// //   render(){
// //     return(
// //       <div>    
// //         {/*className,style==>attribute/prop   */}
// //         <h2 className="Footer" >Footer</h2>
// //       </div>
// //     )
// //   }
// // }

// // //ma header component ko app ma kis tarh la o ga

// // class App extends React.Component{
// //   render(){

// //     return(

// //             <div>
// //                     {/* // ma aik header bnao ga jo ka self closing */}
// //                <Header />
// //                <img src="https://img.freepik.com/free-photo/gold-glitter-powder-splash-background_3247-103.jpg?size=626&ext=jpg" alt="pic"  />
// //                {/*className,style==>attribute/prop (react ma attribute ko prop kheta ha)   */}
// //                <h1 style={{backgroundColor:"red",color:"white",fontSize:18,margin:"10px"} } >Main Component</h1>
// //                <Footer />

// //                {/*  yani phela mujha headder component show hoga baad ma app component*/}

// //               </div>

// //        )
// //   }
// // }


// // abhi hum na aik file ma multiple component bna tha like:header component,footer component
// //ab hum multiple component bnaga dosra folder ma or wha sa yha pr call kra ga

// // class App extends React.Component{
// //   render(){

// //     return(

//             // <div>

//             //           <Bolo/>
//             //             <Header />     
//             //             <Logo />   
//             //    <h1 style={{backgroundColor:"red",color:"white",fontSize:18,margin:"10px"} } >Main Component</h1>
//             //    <h1>Ali</h1> <button type="button" className="btn btn-primary">Primary</button>
//             //    <Footer />

//             //   </div>

// //        )
// //   }
// // }


// // //State is an object of component

// // class App extends React.Component{
// //   constructor(){
// //     super()
//   //     this.state={
//   // name:"Ali Raza",
//   // email:"mudassirraza12345@gmail.com",
//   // value:""
// // }
// // // this.set_name=this.set_name.bind(this)

// //   }

// // //is jga hum fuction bnaa ga (note:hum direct function ka naam likha ga functio keyword nhi used kraga )

// // // set_name(){
// // // console.log(this.state.name)
// // // }
// // //jb hum normal function ma this call krta ha to wo isi fuction ko call krta ha (set_name)

// // // agr ma chato normal function state ki value call hojaa to mujha function ko bind krna paraga

// // // set_name(){
// // //   console.log(this.state.name)
// // //   } 
// // //to ma constructor ma likho ga this.set_name=this.set_name.bind(this)  

// // //but best ya ka app arrow funtion used kra

// // //hum multiples function yha bnasakta ha .
// // // set_name=()=>{
// // //   console.log(this.state.name)
// // //   }
// // //jb hum arrow function ma this call krta ha to wo is fuction ki parent  ko call krta ha (Class App)
// // //arrow function ko bind nhi kr sakta   

// // //Acha ma chata hon ka set pr click  krna sa state ki value change ho 
// // set_name=()=>{
// //    this.setState({
// //     //  name:"Umair"
// //     //agr ma chata ho input ma likha or state ma wo hi name ajja
// //     name:this.state.value


// //    })
// //    //jb state change/update hogi to hamra render wala function phir run hojaa ga 
// //   }

// // get_name=()=>{
// //   console.log(this.state.name,this.state.email)
// // }

// // handlechange(e){
// // // console.log(e)
// // // console.log(e.target)
// // // console.log(e.target.name)
// // // console.log(e.target.value)
// // //handle change automatically name or email ko update krda ga 
// // this.setState({
// //   [e.target.name]:e.target.value
// // })
// // }
// // // {/* importantants points for under stand above
// // // var obj={
// // //     name:"Ali",
// // //     email:"mudassir@gmail.com"
// // // }
// // // var val =prompt("Enter property")
// // // console.log(obj[val])


// // // */}


// //   render(){
// //     return(
// //       <div>

// //       <Bolo/>
// //         <Header /> 
// //         <br/>
// //         <h1>My name is   {this.state.name} </h1>
// //         <br/>
// //         <h4>My email is   {this.state.email} </h4>
// //         <br/>

// // {/* //ab ma chata ho jo input pr name likho or state ka name change hojaa (two ways) */}
// // {/* <input onChange={(e)=>console.log(e.target.value)} type="text" name="" placeholder="enter value" id=""/> */}
// // {/* //one ways */}
// // {/* <input onChange={(e)=>this.setState({name:e.target.value})} type="text" name="" placeholder="enter value" id=""/> */}
// // {/* //second ways */}
// // {/* //agr ma chata ho input ma likha or state ma wo hi name ajja */}
// // {/* <input onChange={(e)=>this.setState({value:e.target.value})} type="text" name="" placeholder="enter value" /> */}

// // <input  onChange={(e)=>this.handlechange(e)} type="text" name="name" placeholder="enter name" />
// // <input onChange={(e)=>this.handlechange(e)} type="text" name="email" placeholder="enter email" />
// // <button onClick={this.set_name}>Set name</button>
// // <button onClick={this.get_name} >Get Email</button>
// // {/* importantants points
// // var obj={
// //     name:"Ali",
// //     email:"mudassir@gmail.com"
// // }
// // var val =prompt("Enter property")
// // console.log(obj[val])


// // */}
// //         <br/>
// // <br/>

// // <Footer />

// // </div>

// // )
// //   }
// // }

// //props:aik component sa dosra component ko data dena ka lia hum used krta ha prop
// //eg:ma App component ko header ma used krna chata hon
// //ma gya ma header.js

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Ali Raza",
//       email:"mudassirraza12345@gmail.com",
//       value:""
//   }
//   }
//   set_name=()=>{
//     this.setState({
//           //agr ma chata ho input ma likha or state ma wo hi name ajja
//      name:this.state.value


//     })
//     //jb state change/update hogi to hamra render wala function phir run hojaa ga 
//    }
//    get_name=()=>{
//     console.log(this.state.name,this.state.email)
//   }
//   handlechange(e){
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.name)
//     // console.log(e.target.value)
//     //handle change automatically name or email ko update krda ga 
//     this.setState({
//       [e.target.name]:e.target.value
//     })
//     }
// // parent sa child ko data dena ka lia hum attribute ki tarh  props likha ga is tarh daga 

//             // {/* Child(header.js) sa parent(App.jsx) ko data hum function ka zarya daga  */}
//     //props sa hum function bhi pass krsakta ha 
//   get_props=(props)=>{
// console.log(props)
//   }  

//   render(){
//     return(

// <div> 
// <Bolo/>
// {/* agr ma chata hon App component sa data header component ma pass kro -->prop */}
//         <Header get_props={this.get_props} name={this.state.name} email={this.state.email} page="Application Page" /> 

//         <br/>
//         <h1>My name is   {this.state.name} </h1>
//         <br/>
//         <h4>My email is   {this.state.email} </h4>
//         <br/>



//         <input  onChange={(e)=>this.handlechange(e)} type="text" name="name" placeholder="enter name" />
// <input onChange={(e)=>this.handlechange(e)} type="text" name="email" placeholder="enter email" />
// <button onClick={this.set_name}>Set name</button>
// <button onClick={this.get_name} >Get Email</button>

// </div>      
//     )
//   }
// }

//----------------------- Class#28------------------
// // Todo App with firebase
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       // todos:[]
//       // todos:["ghous","umair","Ali"],
//       todos: [{ title: "ghous", edit: false }, { title: "hous", edit: false }, { title: "ghs", edit: false }],
//       value: ""
//     }
//   }

//   add_todo = () => {
//     // console.log(this.state.value)
//     //ONE WAY
//     // this.state.todos.push(this.state.value)
//     // this.setState({
//     //   todos:this.state.todos
//     // })
//     //SECOND WAY
//     // this.setState({
//     //   todos:[...this.state.todos,this.state.value],
//     //   value:""
//     // })
//     //third todo
//     let obj = { title: this.state.value }
//     firebase.database().ref('/').child("todos").push(obj)
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value: ""
//     })

//   }
//   delete_todo = (index) => {
//     // console.log(index)
//     this.state.todos.splice(index, 1)
//     this.setState({
//       todos: this.state.todos
//     })

//   }
//   // Edit_todo=(index)=>{
//   Edit_todo = (index, value) => {
//     // console.log(index)
//     //one way
//     //   var update_value=prompt("Enter value")
//     // this.state.todos[index]=update_value
//     // this.setState({
//     //   todos:this.state.todos
//     // })
//     // second Way

//     this.state.todos[index].edit = true;

//     this.setState({
//       todos: this.state.todos
//     })

//   }
//   update = (index) => {
//     this.state.todos[index].edit = false;

//     this.setState({
//       todos: this.state.todos
//     })

//   }


//   handlechange = (e, index) => {
//     this.state.todos[index].title = e.target.value;
//     // console.log(e.target.value,i) 
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   render() {
//     let { todos, value } = this.state;
//     return (




//       <div id="1" className="main text-center" style={{backgroundColor:"#f5deb3"}}>
//  <input type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} name="" placeholder="Enter value" id="" />
//               <button onClick={this.add_todo}>Add Item</button>
//               <ul>
//                 {/* map poora array pr chalta ha or array ka elements written krta ha */}
//                 {/* v --> value ,i-->index */}
//                 {/* {this.state.todos.map((v,i)=>{ */}
//                 {todos.map((v, i) => {
//                   return  <li key={i}>
//                     {/* {v} */}
//                     {v.edit ? <input value={v.title} type="text" onChange={(e) => this.handlechange(e, i)} /> : v.title}
//                     {v.edit ?
//                       <button onClick={() => this.update(i)}>update</button>
//                       :
//                       <button onClick={() => this.Edit_todo(i, v.title)}>Edit</button>
//                     }
//                     <button onClick={() => this.delete_todo(i)}>Dlete</button>
//                   </li>

//                 })}
//               </ul>

//       </div>
//     )
//   }
// }
// export default App;




// Routing



// import AppRouter from './config/Router';

// class App extends Component{
//   render(){
//     return(
//       <AppRouter/>
//     )
//   }
// }
// export default App;

//-----Class#29 
// -----------LifeCycle------------
// is ki 3 stages hoti ha (mouonting,updating,unmounting)
// mounting ma kya hota ==>Constructor,getDerivedStatefromProps,render,componentDidMount

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       count:0,
//       data:[]

//     }
//     console.log("constructor")

//   } 
//   //ya static state ha islya isma this call nhi hoga or lazmi humko isma return call krna hoga  
// static getDerivedStateFromProps(){
//   console.log("getDerivedStatefromProps")
//  return{
//    count:5

//   }
// }
// // agr humko agr firebase or  Api sa koi data mangwana ho to ComponentDidMount()ma mangwaaga 
// componentDidMount(){
//   console.log("ComponetDidMount")
// // json placeholder sa api lagaa ga
//   //fetch('https://jsonplaceholder.typicode.com/todos/1')
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   // .then(json => console.log(json))

//   // .then(data =>{
//   //   console.log("data==>",data)
//   // } )
// // Ab ma is data ko state ma save bhi krasakta hon
// .then(data =>{ 
//     console.log("data==>",data)
//     this.setState({
//       data:data
//     })
// } )

//   .catch(err =>console.log(err))

// }

//   render(){
//     // console.log("render...")
//     console.log("data==>",this.state.data)
    
    
//     return(
//        <div>
//          <h1> Life Cycle</h1>
//          {this.state.data.map((v,i)=>{
//            return <h4 key={i}>{v.title} </h4>
//          })
//          }
//        </div>
//     )
//   }
// }
// export default App;

//Now Understand getDerivedState
// import Child from "./component/child.js"
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       count:0,
   
//     }
//     // console.log("constructor")

//   } 
//   // ya static state ha islya isma this call nhi hoga or lazmi humko isma return call krna hoga 
//   // get derived state humko 2 attributes deta ha  
// static getDerivedStateFromProps(props,state){
//   console.log("getDerivedStateFromProps ==>",state)
//   //yani jb jb statenchange hogi mera life cycle event recall hojaaga through getDerivedStateFromProps 
//   // si tarh jb props ma change hoga to bhi hamra life cycle event recall hoga   
//   //yani agr mera child component ha  isma koi props receive krha ho or wo props update horha ha to hamra life cycle 
//   //dubara chalaga
//   //ma na aik component bnaya han componenent -->child.js  
//  return null
// }
  
//   render(){
     
    
    
//     return(
//        <div>
//          {/* yani jb jb statenchange hogi mera life cycle event recall hojaaga through getDerivedStateFromProps    */}
//          {/* <h2>{this.state.count }</h2> */}

//          <Child count={this.state.count} />
//          <button onClick={()=>this.setState({count:this.state.count+1})}>   Increment        </button>
//            <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>

//        </div>
//     )
//   }
// }
// export default App;


// import Child from "./component/child.js"
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       count:0,
   
//     }
    

//   } 
//   // static getDerivedStateFromProps(props,state){
//   //   console.log("getDerivedStateFromProps ==>",state)
//   // return null
//   // }
// // matlab hamra state or prop change ho pr render na chala islya hum shouldUpdateComponent used krta ha


//   //understand now shouldComponentUpdate
// //matlab component update hona chaya ka nhi 

// //  shouldComponentUpdate(){

// //    //agr ma likho ga return false to component update nhi hoga
// // // return false


// // if(this.state.count < 5 ){
// //   return true
// // }else
// // return false
   
// //  }  


// //----------getSnapshotBeforeUpdate
// // yani jb previous value update hogi to ya previous value ka update sa pehla screenshoot lalega
// getSnapshotBeforeUpdate(preProps,preState){
// console.log("getSnapshotBeforeUpdate ===>",preState)
// // acha humko return dena hota ha 
// return 10 
// // or ya return humko  componentDidUpdate ka third parameter ma mila ga
// }

// // yani jb previous value update hogi to ya previous value ka update ka baat screenshoot lalega
// componentDidUpdate(preProps,preState,snapshot){
// console.log(snapshot)
// }
//   render(){
     
    
    
//     return(
//        <div>
//          {/* yani jb jb statenchange hogi mera life cycle event recall hojaaga through getDerivedStateFromProps    */}
//          {/* <h2>{this.state.count }</h2> */}

//          <Child count={this.state.count} />
//          <button onClick={()=>this.setState({count:this.state.count+1})}>   Increment        </button>
//            <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>

//        </div>
//     )
//   }
// }
// export default App;



//------------last stage unmounting-----------
// unmountig  is waqt used jb kam khatam hojata ha yani sb kuch del krna h 
 import Child from "./component/child.js"
class App extends Component{
  constructor(){
    super()
    this.state={
      count:0,
   
    }
    

  } 
  // static getDerivedStateFromProps(props,state){
  //   console.log("getDerivedStateFromProps ==>",state)
  // return null
  // }
// matlab hamra state or prop change ho pr render na chala islya hum shouldUpdateComponent used krta ha


  //understand now shouldComponentUpdate
//matlab component update hona chaya ka nhi 

//  shouldComponentUpdate(){

//    //agr ma likho ga return false to component update nhi hoga
// // return false


// if(this.state.count < 5 ){
//   return true
// }else
// return false
   
//  }  


//----------getSnapshotBeforeUpdate
// yani jb previous value update hogi to ya previous value ka update sa pehla screenshoot lalega
getSnapshotBeforeUpdate(preProps,preState){
console.log("getSnapshotBeforeUpdate ===>",preState)
// acha humko return dena hota ha 
return 10 
// or ya return humko  componentDidUpdate ka third parameter ma mila ga
}

// yani jb previous value update hogi to ya previous value ka update ka baat screenshoot lalega
componentDidUpdate(preProps,preState,snapshot){
console.log(snapshot)
}
  render(){
     
    
    
    return(
       <div>
         {/* yani jb jb statenchange hogi mera life cycle event recall hojaaga through getDerivedStateFromProps    */}
         {/* <h2>{this.state.count }</h2> */}
{/* yani agr count > tb taq increment ho is ka  baat componentWillUnmount yani  DElete */}
         {this.state.count < 5&& <Child count={this.state.count} />}
         <button onClick={()=>this.setState({count:this.state.count+1})}>   Increment        </button>
           <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>

       </div>
    )
  }
}
export default App;










// //latest 
// // functional component
// // function App() {
// //   return (
// //     <div className="App">
// //      <h1>MUHAMMAD MUDASSIR RAZA</h1> 

// //              </div>
// //   );
// // }

// export default App;
