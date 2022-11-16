const p = document.querySelector('p');


function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.titleInfo = function() {
        return title;
    }
    this.authorInfo = function() {
        return author;
    }
    this.pagesInfo = function() {
        return pages;
    }
    this.readInfo = function() {
        return read;
    }
}

const bookInfo = new book('The Girl With the Dragon Tattoo', 'Stieg Larsson', '528', 'not read yet')

p.innerText = `${bookInfo.titleInfo()} by ${bookInfo.authorInfo()}, ${bookInfo.pagesInfo()} pages, ${bookInfo.readInfo()}.`;