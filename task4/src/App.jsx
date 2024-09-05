import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = books.filter(book => {
    if (filter === 'BC') return book.releaseYear <= 0;
    if (filter === 'AC') return book.releaseYear > 0;
    return true;
  });

  return (
    <div className="container mt-4">
      <h1>Books</h1>
      <div className="mb-3">
        <label>
          <input
            type="radio"
            name="filter"
            value="BC"
            checked={filter === 'BC'}
            onChange={handleFilterChange}
          />
          BC (Before Christ)
        </label>
        <label className="ms-3">
          <input
            type="radio"
            name="filter"
            value="AC"
            checked={filter === 'AC'}
            onChange={handleFilterChange}
          />
          AC (After Christ)
        </label>
        <label className="ms-3">
          <input
            type="radio"
            name="filter"
            value="All"
            checked={filter === 'All'}
            onChange={handleFilterChange}
          />
          All
        </label>
      </div>
      {filteredBooks.map((book) => (
        <ul key={book.id}>
          <li><strong>Author:</strong> {book.author}</li>
          <li><strong>Release Year:</strong> {book.releaseYear}</li>
          <li><strong>Pages:</strong> {book.pages}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
