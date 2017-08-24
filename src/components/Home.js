import React from 'react'
import Mypic from './DSCF6408.JPG'
import '../css/Home.css'

const Home = () => (
  <div>
    <h1>
      <marquee >Welcome to Scott Fosters super-duper fantastic Website</marquee>
    </h1>
    <section className="FrontPageMain">
      <img className='FrontPagePic' src={Mypic} alt='pic'  />
      <div className='FrontPageText'>
        <h1> Scott Foster </h1>
        <h3> Junior Web Developer </h3>
        <h5> HTML CSS JAVASCRIPT REACT REDUX </h5>
      </div>
    </section>
  </div>
)

export default Home
