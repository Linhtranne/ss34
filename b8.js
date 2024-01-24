function del(row) {
    let a = row.parentNode.parentNode.rowIndex;
    document.getElementById("tables").deleteRow(a);
}
document.write