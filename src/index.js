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
    "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: 'Our Class is a Family',
  author: 'Shannon Olsen ',
  },
];
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newNames);
function BookList() {
  return <section className='booklist'>{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
