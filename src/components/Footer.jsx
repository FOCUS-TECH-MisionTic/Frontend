import React from 'react';
import MinTic from '../media/logoMinTic.png'

const Footer = () => {
  return <div>
    <footer>
        <div className="flex flex-col sm:flex-row  justify-center items-center content-center fondo1  text-white w-full h-16 sm:h22 font-thin border-solid">
            <a 
              href="https://www.misiontic2022.gov.co/portal/" 
              className="mx-11 transform hover:translate-y-1 transition-transform ease-in duration-200">
                <img class="fill-current ml-2 w-14 items-center " src={MinTic} alt="MinTic logo" /></a>
            <a href="https://github.com/FOCUS-TECH-MisionTic" className="transform hover:translate-y-1 transition-transform ease-in duration-200 mx-11"><i class="fab fa-github w-6"></i>Proyecto Ciclo 3.</a>
            <a href="https://github.com/ezequiellr" className="transform hover:translate-y-1 transition-transform ease-in duration-200 mx-11">Ezequiel López.</a>
        </div>
    </footer>
  </div>;
};

export default Footer;
