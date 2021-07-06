import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [
 {
  img:
 "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
  },
  {
  img:
    "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  title: 'Our Class is a Family',
  author: 'Shannon Olsen ',
  },
  {
    img:
      "https://m.media-amazon.com/images/I/71gGPRRlyTL._AC_UY218_.jpg",
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett ',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
       return <Book book={book}></Book>;
       })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
