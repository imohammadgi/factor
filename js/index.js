const { number } = require("prop-types");

function AddRow(a) {

    var table = document.getElementById("table");

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    var x = a.parentNode.parentNode.rowIndex;
    cell1.innerHTML = x;

    cell2.contentEditable = true;
    cell3.contentEditable = true;
    cell4.contentEditable = true;
    cell5.contentEditable = true;
    cell6.contentEditable = true;
    cell11.innerHTML = "<button class='Del_Btn' onclick='DelRow(this)'><i class='fa fa-minus'></i></button> ";

}

function DelRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

