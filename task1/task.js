export function getLongestBookByAuthorName(authors, books, authorName) {
    let id;
    for (const author of authors) {
        if(author.name===authorName){
            id=author.id
        }
    }
    let page = 0;
    let title = null;
    for (const book of books) {
        if(book.author_id===id && book.pages > page){
            page = book.pages
            title = book.title
        }else if(book.author_id===id && book.pages === page){
            if (book.title.localeCompare(title) < 0) {
                title=book.title
              }
        }
    }
    return title
}