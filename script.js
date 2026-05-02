var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPM6fjm2I_30eXRDkeGFdlsN-Fcio3sRi2D0AfBkHgNodJ4Zy5Hz6g1rIfTSzflpAOvw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', function(e){
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => msg.innerHTML = "", 5000);
        form.reset();
    })
    .catch(error => {
        msg.innerHTML = "Something went wrong";
    });
});