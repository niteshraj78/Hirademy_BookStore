import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BooksCard from '../../components/BooksCard/BooksCard';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://softwium.com/api/books')
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ 
          border: '4px solid rgba(0, 0, 0, 0.1)', 
          borderLeftColor: '#333', 
          borderRadius: '50%', 
          width: '50px', 
          height: '50px', 
          animation: 'spin 1s linear infinite', 
          marginRight: '20px' ,
          fontWeight:'400',

        }}></div>
        <div><h2 style={{fontSize:'1.5rem'}}>Loading...</h2></div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  // Splitting books array into chunks of three
  const chunkedBooks = books.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div><h2 style={{textAlign:'center',fontSize:'3rem',marginTop:'70px',color:'black',fontWeight:'500'}}>Books</h2></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 -250px' ,  marginTop:'150px'}}>
        {chunkedBooks.map((chunk, index) => (
          <div key={index} style={{ width: '30%', marginBottom: '20px', padding: '0 10px' }}>
            {chunk.map(book => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: '#333',
                  marginBottom: '20px', // Add margin between cards vertically
                }}
                className="book-link"
              >
                <div style={{ marginBottom: '20px' }}>
                  <BooksCard book={book} />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
