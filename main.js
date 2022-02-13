var names=[];
function submit(){
 name1=document.getElementById("name1").value;
 name2=document.getElementById("name2").value;
 name3=document.getElementById("name3").value;
 name4=document.getElementById("name4").value;

 names.push(name1);
 names.push(name2);
 names.push(name3);
 names.push(name4);

 document.getElementById("names").innerHTML=names;
 document.getElementById("submitbutton").style.display="none";
 document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    names.sort();
    document.getElementById("names").innerHTML=names;
}
