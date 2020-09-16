// chap #76 (javascript)
// function press(){
// acha mujha maloom krna ha hum kis page pr mojood 
//var locate=window.location.href
// //console.log(locate)
// O:jb ma click kro ga to mujha current location batadaga
// app.js:4 file:///C:/Users/it%20solution.pk/Desktop/Class%2322/index.html
//yani hum is waqt is is location ya is href pr mojood ha

//ab ma apni current location ya href ko dosra href sa replace kr rha hon
//window.location.href="https://www.google.com.pk/"
//ab jb ma page refresh krna ka baad click kro ga to server mujha 
//google.com pr la jaa ga.or back krna pr wapis isi page pr la aega 

///acha agr ma console ma  window.location.href  likho ga to mujha
// O:"https://www.google.com.pk/"

//acha phir mna console ma likha  windows.location.pathname
//O:"/" -->salash apki main file ka part hota ha 

//e.g:ma gmail pr hon mna likha console pr  windows.location.pathname
//O:"/ServiceLogin/signinchooser"  
//ab isna mujha pora path batdia 

// acha ab mujha host name maloom krna ha matlab kha pr host ha 
//mna console pr likha   window.location.hostname
//O:"www.google.com.pk"

//}

// chap #77 (javascript)
// function press(){
//     var locate=window.location.href
//     //line 3
//   //  window.location.href="https://www.google.com.pk/"
//     //line 4
//     // window.location.assign('https://www.google.com.pk/')

// //line 3 and 4 dono same kam kra gi lekin best practice line4 yani assin wli ha
// //e.g:jb ap facebook pr login hota ha is ka baat jb ap back krta ha to ap lologin page 
// //nhi milta  .kyu ka humna login repace kradia hota ha 
// //yani aik dfa login hina ka baad hum brbr user ko login page kyu dekha 

// // window.location.replace('https://www.google.com.pk/')
// //acha replace kya kraga next page pr jaaga pr wapis nhi ae ga previous page pr
// //yani wo agaa chalaa gae lekin wapis ana ka rastanhi mila ga

// // acha kafi condition asi ati ha jb mujha ko reload krana hota ha 
// //to isko krna ka 3 tariqa hota ha 
// //one way
// // window.location.reload() //(matlab apko page reload krana ha)cache reloading
// window.location.reload(false) //(matlab apko page reload krana ha)cache reloading
// //both are same agr ma empty ma false likhdo

// // window.location.reload(true) // acha agr mujha apna data server sa reload krana ha to ma yha
// //likho ga true (jb hum server connect kra ga to ya used hoga )



// }

// chap #78
//  acha ma abhi google pr hon issa ma facebook pr agya 
//acha ab agr yha console pr likho 

//history.back()
//to ma wapis google wala page pr ajaao ga

// phir mna console pr likha 
//history.forward()
//to ma wapis facebook` wala page pr ajaao ga


// acha agr mujha aik sa ziADA PAGES aga jana ha
//mna console pr likho ga
//history.go(1)
//1 -->represent agr mujha aik page agajna ho 

//history.go(3)
//3 -->represent agr mujha 3 page agajna ho 

//history.go(-1)
//-1 -->represent agr mujha aik page picha jana  ho 

//history.go(-2)
//-2 -->represent agr mujha doo page picha jana  ho 

//mna console pr likha 
//document.referrer
//e.g ma goole sa facebook pr aya hon
//to ya output ma google.com daga

// chapter #79 and 80
//acha humna dekha hoga login with google or jb is pr jaa ha to isma window aopen hoti ha
//ab hum wo dekha ga
//  function press(){
    //  var locate=window.location.href


// window.open() //ab mujha new window open krni ha kha pr krni ya nhi maloom
//jb mna click kra to aik window open hogae jo totally blank na isma koi URL ha

// acha ma blank page jo open horha ha is ma mna content pass kya ha
// var content='<h1>SUCCESFULLY CHANGE PAGE <h1>'
// window.open().document.write(content)

// acha agr mujha yha href dena ha to wo kaise da  
// window.open('https://www.google.com.pk/')

// abhi bhi hari require pori nhi  hue matlab hum choti screen chata th wo nhi hue
//ab isko dekhta ha kaise hogi
//window.open('https://www.google.com.pk/','win1','width=900,height=800,left=100,top=100')
//win1 -->is just a variable apiski jga koi or variable bhi rakh sakta ha win1 hum na is window 
//ka nmae rakha hajo hum open krwani ha 

// chap#81
// var win1=window.open('https://www.google.com.pk/','win1','width=900,height=800,left=100,top=100')
// if(win1 === null){
//     alert('aap apna popub locker ko disable krdo')
// //win1.open()
// win1.close()
// }
 

// }

