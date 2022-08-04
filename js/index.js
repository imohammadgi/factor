
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


    cell2.classList.add('calculate');
    cell3.classList.add('calculate');
    cell4.classList.add('calculate');
    cell5.classList.add('calculate');
    cell6.classList.add('calculate');
    cell4.innerHTML = 0;
    cell5.innerHTML = 0;
    cell6.innerHTML = 0;
    cell2.contentEditable = true;
    cell3.contentEditable = true;
    cell4.contentEditable = true;
    cell5.contentEditable = true;
    cell6.contentEditable = true;
    cell11.innerHTML =
        "<button class='Del_Btn' onclick='DelRow(this)'><i class='fa fa-minus'></i></button><button class='Down_Row' onclick='DownRow(this)' ><i class='fa fa-arrow-down'></i></button><button class='Up_Row' onclick='UpRow(this)' ><i class='fa fa-arrow-up'></i></button> ";
    Setcalctotd();
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

    var table = document.getElementById("table");
    var lastIndex = table.rows.length;
    var totalCount = 0;
    var totalDiscount = 0;
    var totalAmount = 0;
    var totalTax = 0;
    var totalAfterDiscount = 0;
    var totalAfterTax = 0;
    var rowAmount = 0;
    var rowDiscount = 0;
    var rowTax = 0;
    var Tax = 0;

    for (var i = 1; i < table.rows.length - 2; i++) {
        //محاسبه ردیف
        rowAmount = parseFloat(table.rows[i].cells.item(3).innerHTML) * parseFloat(table.rows[i].cells.item(4).innerHTML);
        table.rows[i].cells.item(7).innerHTML = rowAmount;

        rowDiscount = parseFloat(table.rows[i].cells.item(7).innerHTML) - parseFloat(table.rows[i].cells.item(5).innerHTML);


        Tax = parseFloat(table.rows[i].cells.item(7).innerHTML) * 9 / 100;
        table.rows[i].cells.item(6).innerHTML = Tax;

        rowTax = parseFloat(table.rows[i].cells.item(6).innerHTML) + parseFloat(table.rows[i].cells.item(7).innerHTML);
        table.rows[i].cells.item(9).innerHTML = rowTax;

        if (rowDiscount < 0) {
            alert("مبلغ تخفیف نباید بیشتر از مبلغ کالا باشد.")
            table.rows[i].cells.item(8).innerHTML = 0;
            table.rows[i].cells.item(5).innerHTML = parseFloat(table.rows[i].cells.item(7).innerHTML);
        }
        else {
            table.rows[i].cells.item(8).innerHTML = rowDiscount;
        }

        // محاسبه جمع کل ها
        totalCount = totalCount + parseFloat(table.rows[i].cells.item(3).innerHTML);
        totalAmount = totalAmount + parseFloat(table.rows[i].cells.item(7).innerHTML);
        totalDiscount = totalDiscount + parseFloat(table.rows[i].cells.item(5).innerHTML);
        totalTax = totalTax + parseFloat(table.rows[i].cells.item(6).innerHTML);
        totalAfterDiscount = totalAfterDiscount + parseFloat(table.rows[i].cells.item(8).innerHTML);
        totalAfterTax = totalAfterTax + parseFloat(table.rows[i].cells.item(9).innerHTML);


    }



    table.rows[lastIndex - 2].cells.item(1).innerHTML = totalCount;
    table.rows[lastIndex - 2].cells.item(2).innerHTML = totalTax;
    table.rows[lastIndex - 2].cells.item(3).innerHTML = totalAmount;
    table.rows[lastIndex - 2].cells.item(4).innerHTML = totalAfterDiscount;
    table.rows[lastIndex - 2].cells.item(5).innerHTML = totalAfterTax;




    var persiannumber = (totalAfterTax).num2persian() + ' ' + 'ریال';

    table.rows[lastIndex - 1].cells.item(1).innerHTML = persiannumber;
}


window.addEventListener('load', (event) => {
    Setcalctotd();
});

function Setcalctotd() {
    var x = document.getElementsByClassName('calculate');
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener('keyup', calculate);
    }
}
