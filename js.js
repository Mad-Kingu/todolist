// for starting the table sort functionality
$(function() {
    $("#myUL").sortable();
});

// event listener with function needed because replacing the children bugging functionality
document.addEventListener('click', ulListener);

// Add a "checked" symbol when clicking on a list item
function ulListener(ev) {
    var list = document.querySelector('ul');
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
		
		var checkedvalue = 0;
        if(ev.target.classList.contains("checked"))
            checkedvalue = 1;
		updatePHP(ev.target.id, checkedvalue);
    }
    sortList(document.getElementsByClassName('list')[0]);
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        // display off & item deleted
        deletePHP(div.id);
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    postPHP(inputValue, 0); // 0 false 1 true
}

// sortlist function to sorting the lists string order 
function sortList(ul) {
    var new_ul = ul.cloneNode(false);

    // Need 2 list to sort both of them at the same time
    var list = [];
    var listChecked = [];
    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeName === 'LI' && !ul.childNodes[i].classList.contains('checked'))
            list.push(ul.childNodes[i]);
    }

    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeName === 'LI' && ul.childNodes[i].classList.contains('checked'))
            listChecked.push(ul.childNodes[i]);
    }

    list.sort((a, b) => a.innerText.localeCompare(b.innerText));
    listChecked.sort((a, b) => a.innerText.localeCompare(b.innerText));

    // Add them into the ul in order
    for (var i = 0; i < list.length; i++)
        new_ul.appendChild(list[i]);
    for (var i = 0; i < listChecked.length; i++)
        new_ul.appendChild(listChecked[i]);
    ul.parentNode.replaceChild(new_ul, ul);
    // replacing children bugging the table functionality
    $("#myUL").sortable();
}

// input boxs calculate function
function calculateTotal() {

    var textInTheBox = document.getElementById('myInput').value;
    var array = textInTheBox.split("+");
    if (array.length > 1 && array[1] != "" && !textInTheBox.includes("=")) {
        document.getElementById('myInput').value += "=" + (parseInt(array[0]) + parseInt(array[1]));
    }
}

function postPHP(value, checked) {
    $.ajax({
        type: "POST",
        url: "post.php",
        data: "value=" + value + "&checked=" + checked,
        success: function() {
            //do stuff after the AJAX calls successfully completes
        }
    });
}

function deletePHP(id) {
    $.ajax({
        type: "POST",
        url: "delete.php",
        data: "id=" + id,
        success: function() {
            //do stuff after the AJAX calls successfully completes
        }
    });
}

function updatePHP(id, checked) {
    $.ajax({
        type: "POST",
        url: "update.php",
        data: "id=" + id + "&checked=" + checked,
        success: function() {
            //do stuff after the AJAX calls successfully completes
        }
    });
}