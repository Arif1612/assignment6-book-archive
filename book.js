const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ''
    // console.log(searchText);

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.docs
        // ))
        .then(data => displaySearchResult(data.docs))

}

const displaySearchResult = books => {
    // console.log(books);
    const showBookDiv = document.getElementById('show-books');
    //  clear previous search result
    showBookDiv.textContent = '';
    books.forEach(book => {

        const makeDiv = document.createElement('div');
        makeDiv.classList.add('styleBook');

        if (book.title.length === 0) {

            makeDiv.innerHTML = `
                <p>No Data Found</p>
`
            showBookDiv.appendChild(makeDiv);
        }

        else {

            makeDiv.innerHTML = `
            <p>Book Name: ${book.title}</p>
            <p>Author: ${book.author_name}</p>
            <p>First Publish: ${book.publish_date[0]}</p>
            <p>Data Found Total: ${book.title.length}</p>
            <br>
            `
            showBookDiv.appendChild(makeDiv);
        }



        // console.log(book);
        // console.log(book.title);
        // console.log(book.author_name);
        // console.log(book.publish_date[0]);
        // console.log(book.length);
        // console.log();
        //    <p>First Publish: ${book.publish_date[0]}</p>
    })

}




