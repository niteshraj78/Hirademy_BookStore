import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BooksCard from '../../components/BooksCard/BooksCard';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://softwium.com/api/books/${id}`)
      .then(response => {
        setBookDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

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
  if (!bookDetails) return <div>Book not found</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <BooksCard book={bookDetails} />
      </div>
    </div>
  );
}

export default BookDetailsPage;
