import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BooksCard({ book }) {
  return (
    <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '430px', padding: '20px', textAlign: 'center' }}>
      {[ 'light', ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100%', height: '100%' }} // Set width and height to 100% to fill the container
          className="mb-2"
        >
          <Card.Header style={{ backgroundColor: '#6D9886', height: '80vh', alignContent: 'center' }}>
            <Card.Title style={{ textTransform: 'uppercase', fontFamily: 'Satisfy', fontWeight: 400, fontStyle: 'normal' }}>{variant} {book.title}</Card.Title>
          </Card.Header>
          <Card.Body style={{ backgroundColor: '#FDEFF4' }}>
            <Card.Text style={{ color: '#000000' }}>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p><strong>Page Count:</strong> {book.pageCount}</p>
              <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BooksCard;
