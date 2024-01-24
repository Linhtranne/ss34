let arr = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
for (const key in arr) {
    let item = document.createElement("li");
    item.innerText = arr[key];
    document.body.appendChild(item);
}
