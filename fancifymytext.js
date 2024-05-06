document.getElementById("biggerBtn").onclick = function() {
    document.getElementById("textInput").style.fontSize = "24pt";
    alert("Hello, world!");
};

document.getElementById("fancy").onchange = function() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
};

document.getElementById("boring").onchange = function() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
};

document.getElementById("mooBtn").onclick = function() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;
    text = text.toUpperCase();
    text = text.replace(/(\w+)\./g, "$1-MOO.");
    textArea.value = text;
};
