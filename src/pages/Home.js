import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import PowerMerchants from '../components/PowerMerchants';
// import Products from '../components/Products';
import '../style/landingPage.css'


const Home = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const lihatProduk = () => {
    navigate ('/products')
  } 




  const emailInputHandler = (event) => {
    console.log(event.value);
  }  



   return (
    <div>
    
          {/* intro*/}
            <div className='myBg'>
              
            <div className='intro'>
              <Container className='d-flex justify-content-center align-items-center text-center'>
                <Row  >
                  <Col>
                    <div className='title'>Welcome in HerbalIndo</div>
               
                    <div className='introButton mt-4'></div>
                      <button variant='dark' onClick={lihatProduk} >Lihat semua produk</button>
                     
                </Col>
                </Row>
              </Container>
          
              </div>
            </div>
            {/*end intro*/}
          
          
            {/*utama*/}  
            <div className='myBg2' >
                <PowerMerchants />
                <section>
                  <ErrorBoundary></ErrorBoundary>
                </section>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='input your email' onChange={emailInputHandler} />
              </div>
            {/*end utama*/}
            
            
            
            
            {/*akhir*/}
                <footer></footer>
            {/*end akhir*/}
    </div>
    
  )
}

export default Home