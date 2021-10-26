import React from 'react';

//imagenes
import logo from '../media/logo.png';
import safe from '../media/w-checked.png';
import laptop from '../media/w-portatil.png';
import cell from '../media/w-smartphone.png';
import procesador1 from '../media/Procesador01.jpeg';
import procesador2 from '../media/Procesador02.jpeg';
import procesador3 from '../media/Procesador03.jpeg';
import procesador4 from '../media/Procesador04.jpeg';
import procesador5 from '../media/Procesador05.jpeg';
import procesador6 from '../media/Procesador06.jpeg';

const Index = () => {
  return <div>
    <section id="banner">
            <div className="inner bg-black flex block flex-col pt-16 pb-32  content-center items-center justify-center">
                <div ><img src={logo} alt="logo" width="280" /></div>
                <h2 className="mt-8 py-2 text-5xl fuente font-bold text-gray-100">¡Potencia A Tu Alcance!</h2>
                <p className="mt-4 border-t-2 pb-64 border-gray-600 border-opacity-50 text-xl  flex-shrink pt-2 w-3/5 h-16 text-center text-gray-100">Con el mejor rendimiento en la industria, poderosas funcionalidades y una eficiencia increíble, nuestros prosesadores diseñados específicamente para tu dispositivo.</p>
            </div>    
        </section>
       
        <section id="trabajo" class=" text-gray-100 wrapper spotlight style1">
            <div className="inner">
                <a href="#" class="image"><img src={safe} alt="" /></a>
                <div className="content">
                    <h2 className="font-bold text-2xl py-2">Seguridad, Rápidez y Eficacia</h2>
                    <p className="border-t-2 border-gray-600">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla.</p>
                </div>
            </div>
        </section>

        <section className=" text-gray-100 wrapper alt spotlight style2">
            <div className="inner">
                <a href="#" class="image"><img src={laptop} alt="" /></a>
                <div className="content">
                    <h2 className="font-bold text-2xl py-2">Potencia para tu Computador</h2>
                    <p className="border-t-2 border-gray-600">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla.</p>
                    
                </div>
            </div>
        </section>

        <section class=" text-gray-100 wrapper spotlight style3">
            <div class="inner">
                <a href="#" class="image"><img src={cell} alt="" /></a>
                <div class="content">
                    <h2 class="font-bold text-2xl py-2">La Mejor Solución Móvil</h2>
                    <p class="border-t-2 border-gray-600">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla.</p>
                    
                </div>
            </div>
        </section>

        <section class="text-center text-gray-100">
            <h1 id="procesadores" class="fuente pt-48 text-5xl">Nuestros Procesadores</h1>
            <p class="mx-2 my-2 text-lg">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
            <div class="grid grid-cols-2 mx-48 pt-20 pb-48">
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador1} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 1</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador2} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 2</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador3} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 3</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador4} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 4</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador5} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 5</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
                <div class="flex flex-col justify-center border-double rounded border-gray-700 border-4 mx-8 my-8">
                    <img class="pb-4 rounded" src={procesador6} alt="Procesador" />
                    <h2 class="pb-3 text-xl text-center font-semibold">Procesador 6</h2>
                    <p class="border-t-2 border-gray-600 mx-2 my-2 text-sm">Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non.</p>
                </div>
            </div>



        </section>

        <section id="contacto" class="caja4 relative block py-24 lg:pt-0">
            <h1 class="text-center font-semibold text-2xl text-gray-100 pb-24">¿Quieres saber más sobre nosotros?</h1>
            <div class="container mt-60 mx-auto px-4">
              <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div class="flex-auto p-5 lg:p-10">
                      <h4 class="text-2xl font-semibold text-center">CONTÁCTANOS</h4>
                      <p class="leading-relaxed mt-1 mb-4 text-gray-600">Nuestro equipo estará atento para responder todas tus inquietudes.</p>
                      <div class="relative w-full mb-3 mt-8">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full-name">Nombre Completo</label>
                        <input
                          type="text"
                          class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Ejemplo: Juan Pérez"/>
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="email"
                          >Correo Electrónico</label>
                        <input
                          type="email"
                          class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Escribe la dirección de tu correo electrónico"/>
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="message"
                          >Mensaje</label>
                        <textarea
                          rows="4"
                          cols="80"
                          class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Escribe tu mensaje">
                        </textarea>
                      </div>
                      <div class="text-center mt-6">
                        <button
                          class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button">
                          ENVIAR MENSAJE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            
        



        

        
    

    

      
  
  
      

  </div>;
};

export default Index;
