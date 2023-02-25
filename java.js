function addStudent(){
    // alert("working");
    var studentName = document.getElementById("addingStudent").value;
    // console.log(studentName,"studentName")


    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push(studentName);


    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));

}
function displayStudentsList(){
    //testing data from stroge
var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
console.log(studentsList,"StudentList")

//testing tags from Html
var divFromHTML = document.getElementById("displayStudentsList");
console.log(divFromHTML,"divFromHTML");

//looping over userlist to create prefect structure
var student =[];
 
for (var i =0; i < studentsList.length; i++){
    student += `<div><p>${studentsList[i]}</p></div>`
}
console.log(student,"student");
//adding localstroge data into Html with prefect structure
divFromHTML.innerHTML = student;
}
displayStudentsList()



function markingAttendance(){
    var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
console.log(studentsList,"StudentList")

var divFromHTML = document.getElementById("markingAttendance");
console.log(divFromHTML,"divFromHTML");

var student =[];
 
for (var i =0; i < studentsList.length; i++){
    student += `<div><p>${studentsList[i]}</p></div>`
}
console.log(student,"student");
divFromHTML.innerHTML = student;
}
markingAttendance()