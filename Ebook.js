const books = [];

function uploadBook() {
    const uploadBook = document.getElementById('uploadBook').files[0];
    if (uploadBook) {
        const reader = new FileReader();
        reader.onload = function(e) {
            books.push({ name: uploadBook.name, content: e.target.result });
            updateBookList();
        };
        reader.readAsText(uploadBook);
    }
}

function updateBookList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.name} <button onclick="readBook(${index})">Read</button> <button onclick="downloadBook(${index})">Download</button>`;
        bookList.appendChild(li);
    });
}

function readBook(index) {
    const bookContent = document.getElementById('bookContent');
    const content = document.getElementById('content');
    content.textContent = books[index].content;
    bookContent.style.display = 'block';
}

function downloadBook(index) {
    const book = books[index];
    const blob = new Blob([book.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = book.name;
    a.click();
    URL.revokeObjectURL(url);
}
