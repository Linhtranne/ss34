function add() {
    let tb = document.getElementById("table");
    let row = tb.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = "1";
    cell2.innerHTML = "2";
    cell3.innerHTML = "3"

}