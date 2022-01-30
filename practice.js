$(".stuNo").keyup(
  function () {
    var value = $(this).val();
    if(value.length != 6){
      $("#alert").text("StuNo error");
    }else{                
      $("#alert").text("")
  }
}
);

$(".stuScore").keyup(
  function () {
    var value = $(this).val();
    if(value>100){
      $("#alert").text("StuScore error");
    }else{                
      $("#alert").text("")
  }
}
);

function average(array){
  var total=0;
  array.forEach(element => total= total + element);
  var ava= total / 5;
  return ava;
};

function max(best,array){
  for(let i=0; i<array.length ; i++){
    if(array[i] > best){
      best = array[i];
    }
  }
  return best;
};

function min(low,array){
  for(let i=0; i<array.length ; i++){
    if(array[i] < low)
    {
      low = array[i];
    }
  }
  return low;
};

function add(array){
  for(let i=0; i < array.length; i++){
     array[i]++;
   }
   return array;
};
function failcount(array){
 var fail=0;
  for(let i=0; i < array.length; i++){
    if(array[i]<60)
      fail++;
  }
  return fail;    
};

function new1(){
  var student1 = {
    no: document.getElementById("n-1").value,
    Score: document.getElementById("s-1").value
};
var student2 = {
    no: document.getElementById("n-2").value,
    Score: document.getElementById("s-2").value
};
var student3 = {
    no: document.getElementById("n-3").value,
    Score: document.getElementById("s-3").value
};
var student4 = {
    no: document.getElementById("n-4").value,
    Score: document.getElementById("s-4").value
};
var student5 = {
    no: document.getElementById("n-5").value,
    Score: document.getElementById("s-5").value
};
  var studentmember=[student1,student2,student3,student4,student5];
  student1.Score=Number(student1.Score);
  student2.Score=Number(student2.Score);
  student3.Score=Number(student3.Score);
  student4.Score=Number(student4.Score);
  student5.Score=Number(student5.Score);
  var student_score = [student1.Score , student2.Score , student3.Score , student4.Score,student5.Score];
  
  while (failcount(student_score)>student_score.length/2){
    student_score=add(student_score);
  };
  $("#new").text("已加分");
  $("#new_score").text(student_score);
  return student_score;
};

function check(){
var student1 = {
    no: document.getElementById("n-1").value,
    Score: document.getElementById("s-1").value
};
var student2 = {
    no: document.getElementById("n-2").value,
    Score: document.getElementById("s-2").value
};
var student3 = {
    no: document.getElementById("n-3").value,
    Score: document.getElementById("s-3").value
};
var student4 = {
    no: document.getElementById("n-4").value,
    Score: document.getElementById("s-4").value
};
var student5 = {
    no: document.getElementById("n-5").value,
    Score: document.getElementById("s-5").value
};
  var studentmember=[student1,student2,student3,student4,student5];
  for(i=0;i<studentmember.length;i++){
    if(studentmember[i].no.length != 6||studentmember[i].Score.length>3){
      alert("請填寫正確");
      return false;}
  }
  student1.Score=Number(student1.Score);
  student2.Score=Number(student2.Score);
  student3.Score=Number(student3.Score);
  student4.Score=Number(student4.Score);
  student5.Score=Number(student5.Score);
  var student_score = [student1.Score , student2.Score , student3.Score , student4.Score,student5.Score];
  
  var ave = average(student_score);
  // document.getElementById("average").innerHTML=ave;
  $("#average").text(ave);
  
  var high=0;
  var low=100;
  var highest = max(high,student_score);
  var lowest = min(low,student_score);
  $("#high").text(highest);
  $("#low").text(lowest);
  
}