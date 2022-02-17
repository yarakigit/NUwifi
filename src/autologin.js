function onError(error) {
    console.log(`Error: ${error}`);
}

//function onGot(item) {
//    var color = "blue";
//    if (item.color) {
//      color = item.color;
//	console.log("color:",color);
//    }
//    document.body.style.border = "10px solid " + color;
//}
//
function onGotNUID(item) {
    var id = "bbxxxxxxxx";
    if (item.nuid) {
	id = item.nuid;
	console.log("nuid:",id);
    }
    global_id = id;
}

function onGotNUPASSWORD(item) {
    var password = "your password";
    if (item.nupassword) {
	password = item.nupassword;
	console.log("password:",password);
    }
    global_password = password;
    console.log("info:",global_id,global_password);
    //自動ログイン処理
    console.log("launch");
    var now_url = location.href;
    if (!(now_url.indexOf('logout.html') !== -1)) {
	console.log("auto login");
	//ID
	var frm = document.getElementsByName("username")[0];
	frm.value = global_id;
	//Passward
	var pass = document.getElementsByName("password")[0];
	pass.value = global_password;
	//Submit button
	var button = document.getElementsByName("Submit")[0];
	console.log(button);
	button.click();
    }
    else{
	console.log("nothing");
    }
    console.log("finish");
    
}

var global_id = "None";
var global_password = "None";
//var getting = browser.storage.local.get("color");
//getting.then(onGot, onError);
var gettingNUID = browser.storage.local.get("nuid");
gettingNUID.then(onGotNUID, onError);
var gettingNUPASSWORD = browser.storage.local.get("nupassword");
gettingNUPASSWORD.then(onGotNUPASSWORD, onError);
