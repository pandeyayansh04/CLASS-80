var names=[];
var displaynames=[];
function submit(){
    for(k=1;k<=4;k++) {
        var student=document.getElementById("name_of_the_student_"+k).value;
        names.push(student);
        
    }
    for(j=0;j<names.length;j++){
        displaynames.push("NAME - "+names[j]+"<br>");
    }
    document.getElementById("display_name_with_commas").innerHTML=displaynames;
    var removecommas=displaynames.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("submit_button").style.display="none";
}
function sorting(){
    displaynames.sort();
    var removecommas=displaynames.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}