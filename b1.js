
let danhSach = ['list item 1', 'list item 2', 'list item 3'];
    
            let ulElement = document.getElementById('danhSach');
    
            danhSach.forEach(item => {
                let liElement = document.createElement('li');
    
                liElement.textContent = item;
    
                ulElement.appendChild(liElement);
            });