import React, { useEffect, useState } from 'react';
import BookItem from '../../components/bookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // 비동기 함수
    fetch('http://localhost:8080/book', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      });
  }, []);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book}></BookItem>
      ))}
    </div>
  );
};

export default Home;
