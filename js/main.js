
function openNav() {
    document.getElementById("left-panel").style.width = "250px";
    document.getElementById("men").style.fontSize = "20px";
    document.getElementById("routh1").style.width = "450px";
    document.getElementById("routh2").style.width = "450px";
    document.getElementById("routh3").style.width = "450px";
    document.getElementById("routh4").style.width = "450px";
    document.getElementById("open").style.opacity ="0";
    document.getElementById("open").style.marginLeft ="0";
    document.getElementById("close").style.fontSize ="24px";
    document.getElementById("close").style.marginLeft ="45px";
    document.getElementById("head").style.paddingLeft = "280px";
}

function closeNav() {
    document.getElementById("left-panel").style.width = "0";
    document.getElementById("men").style.fontSize = "0px";
    document.getElementById("routh1").style.width = "100%";
    document.getElementById("routh2").style.width = "100%";
    document.getElementById("routh3").style.width = "100%";
    document.getElementById("routh4").style.width = "100%";
    document.getElementById("close").style.fontSize ="0px";
    document.getElementById("open").style.opacity ="1";
    document.getElementById("open").style.marginLeft ="70px";
    document.getElementById("head").style.paddingLeft = "60px";
}
