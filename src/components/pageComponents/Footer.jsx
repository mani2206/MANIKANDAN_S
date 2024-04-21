import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-center py-3 bg-dark footer_sticky">
        <p className='text-white  m-0'>&copy; Copyright {currentYear}  <span className='fw-bold'  style={{fontSize :"15px"}}>Made by <span className='text-danger'>&#9829;</span><span className='animation px-1'>Mani.</span> </span></p>
      </footer>
    </>
  );
}

export default Footer;


