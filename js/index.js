
function AddRow() {

    var table = document.getElementById("table");
    var Rowid = table.rows.length - 2;

    var row = table.insertRow(Rowid);

    const cell1 = row.insertCell(0);
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

    var lastRowIndex = Rowid;

    cell1.innerHTML = lastRowIndex;

    cell2.contentEditable = true;
    cell3.contentEditable = true;
    cell4.contentEditable = true;
    cell5.contentEditable = true;
    cell6.contentEditable = true;
    cell11.innerHTML =
        "<button class='Del_Btn' onclick='DelRow(this)'><i class='fa fa-minus'></i></button><button class='Down_Row' onclick='DownRow(this)' ><i class='fa fa-arrow-down'></i></button><button class='Up_Row' onclick='UpRow(this)' ><i class='fa fa-arrow-up'></i></button> ";

}

function DelRow(r) {

    var currentrowIndex = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table");


    for (var i = currentrowIndex; i < table.rows.length - 2; i++) {
        var x = table.rows[i].cells.item(0);
        x.innerHTML = i - 1;
    }

    table.deleteRow(currentrowIndex);

}

function UpRow(r) {
    var currentrowIndex = r.parentNode.parentNode.rowIndex;

    var index = r.parentNode.parentNode.rowIndex;
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;

    if (index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        index--;
        rows[index + 1].cells[0].innerHTML = currentrowIndex;
        rows[index].cells[0].innerHTML = currentrowIndex - 1;
    }

}

function DownRow(r) {
    var currentrowIndex = r.parentNode.parentNode.rowIndex;

    var index = r.parentNode.parentNode.rowIndex;
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;

    if (index < rows.length - 3) {
        parent.insertBefore(rows[index + 1], rows[index]);
        index++;
        rows[index - 1].cells[0].innerHTML = currentrowIndex;
        rows[index].cells[0].innerHTML = currentrowIndex + 1;
    }

}

function calculate() {



}







