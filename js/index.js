var pagesounds = document.getElementById("sound2");

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    pagesounds.play();
}

function search() {
    var input, filter, dl, a, i, txtValue, dt, dd;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    dl = document.getElementById("myUL");
    dt = dl.getElementsByTagName('dt');

    for (i = 0; i < dt.length; i++) {
        a = dt[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            dt[i].style.display = "";
        } else {
            dt[i].style.display = "none";
        }
    }
}

function search2() {
    var input, filter, dl, a, i, txtValue, dt, dd;
    input = document.getElementById('myInput2');
    filter = input.value.toUpperCase();
    dl = document.getElementById("myUL2");
    dt = dl.getElementsByTagName('dt');

    for (i = 0; i < dt.length; i++) {
        a = dt[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            dt[i].style.display = "";
        } else {
            dt[i].style.display = "none";
        }
    }
}

var contactsounds = document.getElementById("sound4");

function playAudio() {
    contactsounds.play();
}


var popupsounds = document.getElementById("sound3");

var popup = [];

function HTPopup() {
    for (let j = 0; j < document.getElementsByClassName("popuptext").length; j++) {
        popup[j] = document.getElementsByClassName("popuptext")[j];
        popup[j].classList.toggle("show");
    }
    popupsounds.play();
}

let modal = [];
for (let j = 0; j < document.getElementsByClassName("modal").length; j++) {
    modal[j] = document.getElementsByClassName("modal")[j];
}

var btn = [];
for (let j = 0; j < document.getElementsByClassName("modalbtn").length; j++) {
    btn[j] = document.getElementsByClassName("modalbtn")[j];
}

var span = [];
for (let j = 0; j < document.getElementsByClassName("close").length; j++) {
    span[j] = document.getElementsByClassName("close")[j];
}

for (let j = 0; j < btn.length; j++) {
    btn[j].onclick = function () {
        modal[j].style.display = "block";
    }
}

for (let j = 0; j < span.length; j++) {
    span[j].onclick = function () {
        modal[j].style.display = "none";
    }
}

for (let j = 0; j < modal.length; j++) {
    window.onclick = function (event) {
        if (event.target == modal[j]) {
            modal[j].style.display = "none";
        }
    }
}

var loginsound = document.getElementById("sound1");

function login() {
    // let usernm = document.getElementById("user_txt").value;
    // let emil = document.getElementById("email_txt").value;
    // const currentaccount = getElementById("showusername");
    // const currentemail = getElementById("showemail");
    // currentaccount.appendChild(document.createTextNode(usernm));
    // currentemail.appendChild(document.createTextNode(emil));
    loginsound.play();
}



function upload() {
    let toolname = document.getElementById("tName").value;
    let sellname = document.getElementById("sellName").value;
    let sellemail = document.getElementById("sellEmail").value;
    let rent = document.getElementById("rPrice").value;
    let buy = document.getElementById("bPrice").value;
    let desc = document.getElementById("descrip").value;

    const currentdl = document.getElementById("myUL2");
    const newdt = document.createElement("dt");
    const newa = document.createElement("a");
    const newimg = document.createElement("img");
    const newtoolname = document.createElement("p");
    const newsellername = document.createElement("p");
    const newrprice = document.createElement("p");
    const newbprice = document.createElement("p");
    const newdesc = document.createElement("p");
    const newbtn = document.createElement("button");
    const newdivmodal = document.createElement("div");
    newdivmodal.setAttribute('class', 'modal');
    const newdivmodaltxt = document.createElement("div");
    newdivmodaltxt.setAttribute('class', 'modaltxt');
    const newspan = document.createElement("span");
    const newsellermod = document.createElement("p");
    const newselleremail = document.createElement("p");
    const newrpricemod = document.createElement("p");
    const newbpricemod = document.createElement("p");

    newtoolname.appendChild(document.createTextNode("Name: " + toolname));
    newsellername.appendChild(document.createTextNode("Seller: " + sellname));
    newsellermod.appendChild(document.createTextNode("Seller : " + sellname));
    newselleremail.appendChild(document.createTextNode("Seller Email : " + sellemail));
    newrprice.appendChild(document.createTextNode("Rent Price: " + rent + "/day"));
    newrpricemod.appendChild(document.createTextNode("Rent Price : " + rent + "/day"));
    newbprice.appendChild(document.createTextNode("Buy Price: " + buy));
    newbpricemod.appendChild(document.createTextNode("Buy Price : " + buy));
    newdesc.appendChild(document.createTextNode("Description: " + desc));
    newbtn.setAttribute('class', 'modalbtn');
    newbtn.appendChild(document.createTextNode("Contact"));
    newspan.setAttribute('class', 'close');
    newspan.appendChild(document.createTextNode("&times;"));
    newdivmodaltxt.appendChild(newspan);
    newdivmodaltxt.appendChild(newsellermod);
    newdivmodaltxt.appendChild(newselleremail);
    newdivmodaltxt.appendChild(newrpricemod);
    newdivmodaltxt.appendChild(newbpricemod);
    newdivmodal.appendChild(newdivmodaltxt);
    newimg.setAttribute('height', '150');
    newimg.setAttribute('width', '150');
    newimg.setAttribute('src', imgurl);
    newimg.setAttribute('class', 'itemimg');
    newa.setAttribute('href', '#');
    newa.appendChild(newimg);
    newa.appendChild(newtoolname);
    newa.appendChild(newsellername);
    newa.appendChild(newrprice);
    newa.appendChild(newbprice);
    newa.appendChild(newdesc);
    newa.appendChild(newbtn);
    newa.appendChild(newdivmodal);
    newdt.appendChild(newa);
    currentdl.appendChild(newdt);
}

let imgurl;

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('uploadedfile');
        output.src = reader.result;
        imgurl = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}