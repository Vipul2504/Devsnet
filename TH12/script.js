
let addbtn = document.getElementById("addbtn");
let value = document.getElementById("inp");
let ul = document.getElementById("myul");

//function to add task in list

function add() {
    let Li = document.createElement("li");
    let inputvalue = document.getElementById("inp").value;
    let text = document.createTextNode(inputvalue);
    Li.appendChild(text);
    if (inputvalue == ""){
        alert("You must wright something!");
    }
    else {
        document.getElementById("myul").appendChild(Li);
    }
    document.getElementById("inp").value = "";
    //to add cross sign in created list
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    Li.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//to add cross sign in all list
let mylist = document.getElementsByTagName("LI");
let i;
for(i = 0; i < mylist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
}

//close the list
let close = document.getElementsByClassName("close");
for(i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
