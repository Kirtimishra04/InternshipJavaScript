var element;
//element=document.body;
//  1.//element=document.getElementById("intro").innerText;        //innerText helps to return heading in console
// 2.//element=document.getElementById("intro").innerHTML;  // it show all the html tags in console.  

document.getElementById("intro").getAttribute("class" );
// in the end brackets we write the value  we want to know whats the attribute 
//the value of class is written in console

//getAttributeNode()---
document.getElementById("intro").getAttributeNode("class" );
//it also give the value of attribute

//getElementById().attributes----
document.getElementById("intro").attributes;   //give the array of all atributes.
document.getElementById("intro").attributes[1];//it gives the attribute of index 1

document.getElementById("intro").attributes[1].value;    //value returns the value of the attribute
document.getElementById("intro").attributes[1].name;  //it gives the name of attribute.
console.log( element);

   







