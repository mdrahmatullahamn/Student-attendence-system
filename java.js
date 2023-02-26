function addStudent() {
    // alert("working");
    var studentName = document.getElementById("addingStudent").value;
    // console.log(studentName,"studentName")


    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push({ nameOfStudent: studentName, attendance: [] });

    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));
    document.getElementById("addingStudent").value = "";
    markingAttendance();
    // displayStudentsList();
    displayingStudentsAttendance()


}
function getRealTime() {
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    var addDate = document.getElementById("dateHere");
    addDate.innerText = date;
}
getRealTime();

function markingAttendance() {
    var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(studentsList, "StudentList")

    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    var student = [];

    for (var i = 0; i < studentsList.length; i++) {
        student += `<div><p>${studentsList[i].nameOfStudent}</p><p><i onclick= "present(${i})" class="fa-solid fa-check"></i></p> <p><i onclick="absent(${i})" class="fa-solid fa-xmark"></i></p></div>`
    }
    console.log(student, "student");
    divFromHTML.innerHTML = student;
}
markingAttendance()

function present(index) {
    alert("working")
    console.log("index", index)
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    // console.log(date ,"date hereeee")
    var studentListFromLS = JSON.parse(localStorage.getItem("StudentsList"));
    var user = studentListFromLS[index];
    console.log(user,"user")
    var falg = false;
    for (var i = 0; i < user.attendance.length; i++) {
        if (!!user.attendance[i][date]) {
            falg = true;
        }
    }
    if (falg === false) {
        var obj = {};
        obj[date] = "present"
        user.attendance.push(obj)
        localStorage.setItem("studentList", JSON.stringify(studentListFromLS))
    }
    else {
        alert('Alredy marked!!')
    }
}
function absent(index) {
    alert("working for absent")
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    // var studentListFromLS = 


// function displayStudentsList() {
    //testing data from stroge
    // var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
    // console.log(studentsList, "StudentList")

    //testing tags from Html
    // var divFromHTML = document.getElementById("displayStudentsList");
    // console.log(divFromHTML, "divFromHTML");

    //looping over userlist to create prefect structure
    // var student = [];

    // for (var i = 0; i < studentsList.length; i++) {
    //     student += `<div><p>${studentsList[i].nameOfStudent}</p> </div>`
    // }
    // console.log(student, "student");
    //adding localstroge data into Html with prefect structure
    // divFromHTML.innerHTML = student;
}
// displayStudentsList()
function displayingStudentsNameList(){
    var idFromHtml=document.getElementById("studentname")
    var dataFromLS = JSON.parse(localStorage.getItem("studentsList"));
    var namesArray = [];
    for (var i = 0 ;i <dataFromLS.length;i++){
        namesArray += `<div>${dataFromLS}. </div>`
    }
}

function displayingStudentsAttendance(){
    // var IdFromHtml = document.getElementById("studentsAttendance")
    var for25 = document.getElementById("first")
    var dataFromLS = JSON.parse(localStorage.getItem("studentsList"));

    var dates = [];
    for (var k =0; k <dataFromLS.length;k++){
    for ( var k= 0; k< dataFromLS[k].attendance.length;i++){
        dates.push((object.keys(dataFromLS[k].attendance[1])[0]));
        if(!dates.includes ((object.keys(dataFromLS[k].attendance[1])[0]))){
            dates.push ((object.keys(dataFromLS[k].attendance[1])[0]))
             }
            }
    }
}
console.log(dates ,'dates here')
displayingStudentsAttendance();

function displayingStudentsAttendance() {
    var for25 = document.getElementById("first");
    // console.log(idFromHTML, 'idFromHTML')
    var dataFromLs = JSON.parse(localStorage.getItem("StudentsList"));
    var dates = [];
    for (var k = 0; k < dataFromLs.length; k++) {
        for (var l = 0; l < dataFromLs[k].attendance.length; l++) {
            // console.log(dataFromLs[k].attendance[l])
            // console.log((Object.keys(dataFromLs[k].attendance[l])[0]))
            if (!dates.includes((Object.keys(dataFromLs[k].attendance[l])[0]))) {
                dates.push((Object.keys(dataFromLs[k].attendance[l])[0]))
            }

        }
    }
    var finalArrayWithAtt = [];
    var settingDates = ['2023-02-25']
    for (var i = 0; i < dataFromLs.length; i++) {
        // console.log(dataFromLs[i].attendance,"heree");
        if (dataFromLs[i].attendance.length) {
            for (var j = 0; j < dataFromLs[i].attendance.length; j++) {
                for (var k = 0; k < settingDates.length; k++) {
                    if (dataFromLs[i].attendance[j][settingDates[k]]) {
                        // console.log((dataFromLs[i].attendance[j][settingDates[k]]), dataFromLs[i].nameOfStudent, dd[k])
                        finalArrayWithAtt += `<div>${dataFromLs[i].attendance[j][settingDates[k]]}</div>`;
                    }
                }
            }
        } else {
            finalArrayWithAtt += `<div>No data</div>`;
        }
    }
    // console.log(check, 'check')
    for25.innerHTML = finalArrayWithAtt;
}
displayingStudentsAttendance()

