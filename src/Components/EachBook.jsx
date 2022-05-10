import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router'

export const EachBook = () => {
    const { id } = useParams()
    console.log(id)
    const [book, setSingleBook] = useState([])

    useEffect(() => {
        fetch(`https://library-u6.herokuapp.com//${id}`)
            .then((res) => res.json())
            .then(response => setSingleBook(response))
    }, [])
    console.log(book)
    return (
        <div>
            <p style={{fontSize:'40px', color:'GrayText'}}>More About this book</p>
            <div style={{ width: '90%', display: 'flex', margin: '4% 0%' }}>
                <div style={{ width: '30%', margin: '10px 70px' }}>
                    <img src={book.image} style={{ width: '100%' }} alt="" />
                </div>
                <div style={{ width: '75%', background:'#e8e5e5', textAlign: 'left' }}>
                    <div style={{ fontSize: '40px', color: '#e30046',margin:'10px' }}>
                        {book.title}
                    </div>
                    <div style={{ color: '#8a8787', fontSize: '20px',margin:'10px' }}>Author: {book.author}</div>
                    <div style={{ fontSize: '16px', color: '#9a9797',margin:'10px' }}>
                        <p style={{ color: 'WindowText' }}>Description</p>
                        {book.description}
                    </div>

                    <div style={{margin:'10px'}}>
                        <span>Rating: {book.rating}</span>
                        <Stack spacing={1}>
                    
                            <Rating name="half-rating-read" defaultValue={book.rating} precision={0.5} readOnly size='small' color='#FFC315' />
                        </Stack>
                    </div>

                    <div style={{color:'#333',margin:'10px'}}>
                        <span>Reviews: ({book.reviews})</span>
                    </div>

                    <div style={{color:'ButtonShadow',margin:'10px'}}>Language: {book.language}</div>
                    <div style={{color:'orange',margin:'10px'}}>
                        Category: {book.category}
                    </div>

                    <div style={{color:"#333", margin:'10px'}}>Awards: {book.awards}</div>

                    <button style={{color:"#fff", background:'#333', width:"50%", padding:'1%', fontSize:'16px', borderRadius:'3px', border:'none', marginTop:'40px'}}> <p>Price: ₹{book.price}</p></button>
                </div>  
            </div>
        </div>
    )
}
