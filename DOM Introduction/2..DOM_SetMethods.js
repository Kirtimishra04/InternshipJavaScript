var element;
element=document.getElementById("intro").innerText = "wow";
element=document.getElementById("intro").innerHTML=" <h1> wow </h1>";   // it chnges the heading 1 value

//setAttribute;-----
element=document.getElementById("intro").setAttribute("class","xyz");   //it chnges the attribute of class

//   -------------attributes;
element=document.getElementById("intro").attributes[1].value="xyz";    //it chnges the attribute of class

//--------------removeAttribute;-------
element=document.getElementById("intro").removeAttribute("class");      //it dlt the value of attribute and whole value.

console.log(element);