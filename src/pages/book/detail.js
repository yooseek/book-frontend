import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Detail = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);
  const deleteBook = () => {
    fetch('http://localhost:8080/book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          props.history.push('/');
        } else {
          alert('삭제에 실패하였습니다.');
        }
      });
  };
  const updateBook = () => {
    props.history.push('/updateForm/' + id);
  };
  return (
    <div>
      <h1>상세보기</h1>
      <Button variant="warning" onClick={updateBook}>
        수정
      </Button>
      {''}
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <hr></hr>
      <h1>{book.title}</h1>
      <hr></hr>
      <h3>{book.author}</h3>
    </div>
  );
};

export default Detail;
