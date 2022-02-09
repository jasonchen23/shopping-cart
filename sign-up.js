function checkContent(e){
		var warning = false;
    var str = e.target.value;
    if(str == ""){
        alert("此欄位不可為空");
				warning = true;
    }    
};

var bn = document.getElementById("buyname");
bn.addEventListener("blur",checkContent,false);

var em = document.getElementById("email");
em.addEventListener("blur",checkContent,false);

var un = document.getElementById("username");
un.addEventListener("blur",checkContent,false);

$("#password").keyup(
  function () {
    var value = $(this).val();
    if(value.length<8){
      $("#pa_ch").text("password length too short");
    }else{
      $("#pa_ch").text("")
  }
}
);

// $("#password_check").keyup(
function pach (){
  var x = $("#password").val();
  var y = $("#password_check").val();
  if(x===y)
    $("#pa_ch").text("success");
  else
    $("#pa_ch").text("not match");
    alert("not match");
    return false;
}
// );

$(document).ready(function(){
  $("button").click(function(){
    return pach();
      // var x = $("#password").val();
      // var y = $("#password_check").val();
      // if(x===y)
      //   $("#pa_ch").text("success");
      // else{
      //   $("#pa_ch").text("not match");
      //   return false;}
    $.post("https://www.townway.com.tw/auth",{
      username: $("#username").val(),
      password: $("#password").val(),
    },
    function(data,status){
      $("#warr").text("資料: \n" + data + "\n狀態: " + status);
      $.cookie("authKey",data);
      if (data != "123") {
          return false;
      }
      $.cookie("buyname",$("#buyname").val());
      $.cookie("email",$("#email").val());
      $.cookie("username",$("#username").val());
      $.cookie("password",$("#password").val());
      location.href = "./shopping-form.html"
    });
  });
});

// function formcheck() {
//         var username = document.getElementsByName("username").value;
//         var password = document.getElementsByName("password").value;
//         var information = "username=" + username + "&password=" + password;
//         console.log(information);
      
//         var xhr = new XMLHttpRequest();
//         xhr.open('post', 'https://140.127.196.92:1234/login', true);
//         xhr.send(information);
//         xhr.onload = function() {
//           console.log(xhr.responseText);
//     window.name = xhr.responseText;
//     location.href = "shopping form.html";
//     }
// };
