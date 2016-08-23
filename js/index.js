$(".button").click(function () {
  $("#sForm").toggleClass("open");   
});

$("#adminopenid").click(function () {
    $("#adminForm").toggleClass("open");
});

$("#feeopenid").click(function () {
    $("#feeForm").toggleClass("open");
});

$("#seatopenid").click(function () {
 
    $("#seatForm").toggleClass("open");
});

$("#AboutUsid").click(function () {

    $("#AddAboutUsForm").toggleClass("open2"); 
});

$(".updateBtn").click(function () {
    var ssss = this.id;
    var uuuu = ssss.split(_)
    $("#myid12131").val(uuuu[0]);
    $("#sForm2").toggleClass("open");
});

$(".button8").click(function () {
    $("#AddAboutUsForm").toggleClass("open2");
});

$(".button102").click(function () {
    $("#sForm102").toggleClass("open");
});


$("#ContactUsid").click(function () {

    $("#ContactUsForm").toggleClass("open2");
});

$(".button9").click(function () {
    $("#ContactUsForm").toggleClass("open2");
});


$(".button3").click(function () {
    $("#seatForm").toggleClass("open");
});

$(".button4").click(function () {
    $("#feeForm").toggleClass("open");
});

$(".button5").click(function () {
    $("#adminForm").toggleClass("open");
});

$(".button2").click(function () {
    $("#myid1212").val(this.id);
    $("#AddDepartmentForm").toggleClass("open");
});

$(".button102").click(function () {
   
    $("#AddVideoForm").toggleClass("open");
});

$(".button900").click(function () {
  
    var myddd = (this.id);
    var paramstr = myddd.split("_");
    var uIddd = paramstr[0];
    var deptIddd = paramstr[1];
    $("#degreeUIDInput").val(uIddd);
    $("#degreeDeptIDInput").val(deptIddd);
    $("#AddDepartmentForm").toggleClass("open");
});

$(".controlTd").click(function () {
  $(this).children(".settingsIcons").toggleClass("display"); 
  $(this).children(".settingsIcon").toggleClass("openIcon"); 
});