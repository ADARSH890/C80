student_array=[];
function submit(){
    var name1=document.getElementById("student_1").value;
    
    student_array.push(name1);
    
    document.getElementById("display_name").innerHTML=student_array.toString();
    
}
function show(){
    var i=student_array.join("<br>");

    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sorting_button").style.display="inline-block";

}
function sorting(){
    student_array.sort();
    var j=student_array.join("<br>");
    document.getElementById("p1").innerHTML=j.toString();
}
