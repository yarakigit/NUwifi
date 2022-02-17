function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
	//color: document.querySelector("#color").value,
	nuid: document.querySelector("#nuid").value,
	nupassword: document.querySelector("#nupassword").value,
    });
}

function restoreOptions() {
    
    //function setCurrentChoice(result) {
    //	document.querySelector("#color").value = result.color || "blue";
    //}
    function setCurrentChoiceNUID(result) {
	document.querySelector("#nuid").value = result.nuid || "bbxxxxxxxx";
    }
    function setCurrentChoiceNUPASSWORD(result) {
	document.querySelector("#nupassword").value = result.nupassword || "your password";
    }
    function onError(error) {
	console.log(`Error: ${error}`);
    }
    
    //var getting = browser.storage.local.get("color");
    //getting.then(setCurrentChoice, onError);
    var getting_nuid = browser.storage.local.get("nuid");
    getting_nuid.then(setCurrentChoiceNUID, onError);
    var getting_nupassword = browser.storage.local.get("nupassword");
    getting_nupassword.then(setCurrentChoiceNUPASSWORD, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
