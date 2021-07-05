import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
// setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: 'Our Class is a Famil',
  author: 'Shannon Olsen ',
};

function BookList() {
  return (
  <section className='booklist'>
    <Book img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
    >
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum animi voluptas temporibus quo delectus pariatur, hic voluptatum accusantium illo.</p>
    </Book>
    <Book img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
    />
  </section>
  );
}

const Book = (props) => {
  const {img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
