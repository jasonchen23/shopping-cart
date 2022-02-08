function parseCookie() {
  var cookieObj = {};
  var cookieAry = document.cookie.split(';');
  var cookie;
  
  for (var i=0, l=cookieAry.length; i<l; ++i) {
      cookie = jQuery.trim(cookieAry[i]);
      cookie = cookie.split('=');
      cookieObj[cookie[0]] = cookie[1];
  }
  
  return cookieObj;
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}

function checkContent(e){
		var warning = false;
    var str = e.target.value;
    if(str == ""){
        alert("此欄位不可為空");
				warning = true;
    }    
}
// 
// 
function onload(){
  let total = document.getElementById("total");
  total.innerHTML= 20000* getCookieByName("amount") ;
}
var cookies = getCookieByName("amount");
    document.getElementById("amount").value=cookies;
cookies = getCookieByName("buyname");
    document.getElementById("buyname").value=cookies;
cookies = getCookieByName("username");
    document.getElementById("username").value=cookies;
// var cookies = getCookieByName("email");
//     document.getElementById("email").value=cookies;    
// var cookies = getCookieByName("phone");
//     document.getElementById("phone").value=cookies;    
// var cookies = getCookieByName("address");
//     document.getElementById("address").value=cookies;

// 
// 
var total = document.getElementById("amount").value;
document.getElementById("total").innerHTML = total;

var bn = document.getElementById("buyname");
bn.addEventListener("blur",checkContent,false);

var em = document.getElementById("email");
em.addEventListener("blur",checkContent,false);

var un = document.getElementById("username");
un.addEventListener("blur",checkContent,false);

var ph = document.getElementById("phone");
ph.addEventListener("blur",checkContent,false);

var ad = document.getElementById("address");
ad.addEventListener("blur",checkContent,false);

function amo(x){
  var amount = x.value;
  $.cookie("amount",amount);
  console.log(amount);
  let total = document.getElementById("total");
  total.innerHTML= 20000* amount ;
};

function formCheck() {

  if(reg.buyname.value == "") 
  {
    alert("未輸入購買人全名");
    return false;
  }
  else if(reg.email.value == "null")
  {
    alert("未輸入E-mail");
    return false;
  }
    else if(reg.username.value == "")
  {
    alert("未填寫收件人名稱");
    return false;
  }
    else if(reg.address.value == "")
  {
    alert("未填寫地址");
    return false;
  }
      else if(reg.phone.value == "")
  {
    alert("未填寫行動電話");
    return false;
  }
  else if(!reg.sex[0].checked && !reg.sex[1].checked && !reg.sex[2].checked)
  {
    alert("未選擇性別");
    return false;
  }
  else 
    alert("成功送出");
}