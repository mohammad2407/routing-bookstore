import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export const Library = () => {
    const[bookData,setBookData] = useState([])
    useEffect(() =>{
        fetch("http://localhost:3002/Data")
        .then((res) => (res.json()))
        .then((res) => setBookData(res))
    },[])

    console.log(bookData)
  return (
    <div>
         <div style={{  width: '70%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', float: 'right', padding: '1%' }}>
                {
                    bookData.map((book, index) => {
                        return (
                            <Link to={`books/${book.id}`} style={{textDecoration:'none', color:'#9a9797'}}>
                            <div className='product-item' style={{ width: '89%', marginBottom:'50px', padding:'5% 4%' }} key={book.id}>
                                <div style={{ width: '100%', zIndex:'1'}}>
                                    <img src={book.image} key={index} alt="" style={{ width: '100%', display:'block' }} />
                                </div>
                                {/* <div style={{border:'1px solid black', width:'fit-content', textAlign:"center", margin:'0px auto',zIndex:'4'}}>Quick view</div> */}
                                <div style={{ height: '35px', overflow: 'hidden', textAlign: 'left', fontSize: '13px', color: '#8a8787', margin: '10px 0px', lineHeight: '19px' }}>{book.title}</div>
                                <div style={{textAlign:'left', marginTop:'-10px'}}>Author :<span style={{color:'#60bf79', fontWeight:'600'}}>{book.author}</span> </div>
                                <div style={{ height: '35px', overflow: 'hidden', textAlign: 'left', fontSize: '13px', color: '#8a8787', margin: '10px 0px', lineHeight: '19px' }}>{book.description}</div>

                                <div style={{ display: 'flex', margin: '10px 0px' }}>
                                    {/* <div style={{ marginRight: '10px', fontSize: '13px', color: '#ccc' }}> <s>{product.price_before}</s></div> */}
                                    <div style={{ marginRight: '10px', fontSize: '14px', color: '#333', fontWeight: '630' }}>Rs.{book.price}</div>
                                    <div style={{
                                        marginRight: '10px',
                                        padding: '0% 2%',
                                        fontSize: '13px',
                                        border: '1px solid #ccc',
                                        borderRadius: '2px'
                                    }}> <span style={{ color: '#8a8787' }}>{book.language}</span></div>
                                </div>
                                
                                <div >
                                <div className='rating' >
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={book.rating} precision={0.5} readOnly size= 'small' color='#FFC315' />
                                    </Stack>
                                </div>
                                 <div style={{float:'right', marginTop:'-20px' , marginRight:'50px', color:'#8a8787', fontSize:'13px'}}>
                                    ( {book.reviews} )
                                 </div>
                                </div>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
    </div>
  )
}
