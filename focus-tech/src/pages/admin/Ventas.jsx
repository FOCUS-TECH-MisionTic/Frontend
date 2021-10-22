import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { obtenerVentas, crearVenta, editarVenta, eliminarVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import PrivateComponent from 'components/PrivateComponent';


const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Agregar Nueva Venta');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  
  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setVentas(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error('Salio un error:', error);}
      );
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de ventas desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Agregar Nueva Venta');
      
    } else {
      setTextoBoton('Mostrar Todos Las Ventas');
      
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl pt-12 pb-8 font-extrabold text-gray-800'>
          Administración de Ventas
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`shadow-md fondo1 text-gray-300 font-bold p-2 rounded m-6  self-center`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
      ) : (
        <FormularioCreacionVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={3000} />
    </div>
  );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);
  
  
  useEffect(() => {
    setVentasFiltrados(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);
  
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 ml-3 mb-2 px-3 py-1 w-40 self-start rounded-md focus:outline-none focus:border-gray-500'
      />
       
        <table className="tabla w-full">
          <thead>
            <tr>
              <th className="fondo1  text-gray-300 w-28">Factura</th>
              <th className="fondo1  text-gray-300 w-32">Fecha</th>
              <th className="fondo1  text-gray-300 w-44">Producto</th>
              <th className="fondo1  text-gray-300 w-32">Cantidad</th>
              <th className="fondo1  text-gray-300 w-44">Cliente</th>
              <th className="fondo1  text-gray-300 w-36">Vendedor</th>
              <th className="fondo1  text-gray-300 w-32">Estado</th>
              <th className="fondo1  text-gray-300 w-36">Total</th>
              <th className="fondo1  text-gray-300 w-32">Acciones</th>  
            </tr>
          </thead>
          <tbody>
            {ventasFiltrados.map((venta) => {
              return <FilaVentas 
                key={nanoid()} 
                venta={venta}
                setEjecutarConsulta={setEjecutarConsulta}/>;
            })}
          </tbody>
        </table>
      
    </div>
  );
};

const FilaVentas = ({venta, setEjecutarConsulta})  => {
  const [edit, setEdit] = useState(false)
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  
  useEffect(() => { 
         const fetchUsuarios = async () => {
           await obtenerUsuarios(
             (response) => {
               console.log('respuesta de usuarios', response);
               setUsuarios(response.data);
             },
             (error) => {
               console.error(error);
             }
           );
         };
         const fetchProductos = async () => {
           await obtenerProductos(
             (response) => {
               setProductos(response.data);
             },
             (error) => {
               console.error(error);
             }
           );
         };
        fetchUsuarios();
        fetchProductos();
    
  }, []);
  const listaVendedores = usuarios.filter(v => (v.rol === 'Vendedor') && (v.estado === 'Activo'));
  const listaClientes = usuarios.filter(c => (c.rol === 'Cliente') && (c.estado === 'Activo'));
  
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    _id: venta._id,
    fecha: venta.fecha,
    producto: venta.producto,
    cantidad: venta.cantidad,
    cliente: venta.cliente,
    vendedor: venta.vendedor,
    estado: venta.estado,
    total: venta.total,
  });

  const actualizarVenta = async () => {
    //enviar la info al backend

    await editarVenta(
      venta._id,
      {
        fecha: infoNuevaVenta.fecha,
        producto: infoNuevaVenta.producto,
        cantidad: infoNuevaVenta.cantidad,
        cliente: infoNuevaVenta.cliente,
        vendedor: infoNuevaVenta.vendedor,
        estado: infoNuevaVenta.estado,
        total: infoNuevaVenta.total,
        
      },
      (response) => {
        console.log(response.data);
        toast.success('Venta Modificada Exitosamente');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error Modificando Venta');
        console.error(error);
      }
    );
    
      
  };
  
  const borrarVenta = async () => {
    await eliminarVenta(
      venta._id,
      (response) => {
        console.log(response.data);
        toast.success('Venta Eliminada Exitosamente');
        setEjecutarConsulta(true);
        
      },
      (error) => {
        console.error(error);
        toast.error('Error Eliminando Venta');
      }
    );  
  };
  return (
    <tr >
      {edit? (

        <>
          <td className='text-center'>{infoNuevaVenta._id.slice(20)}</td>
          <td><input 
            type="date" 
            className="bg-gray-50 border border-gray-600 p-1 rounded m-1 w-32"
            value={infoNuevaVenta.fecha}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fecha: e.target.value })}/>
          </td>

          <td>
          <select
              className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
              name='producto'
              onChange ={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, producto: e.target.value })}
              defaultValue={infoNuevaVenta.producto}>
                {productos.map((p) => {
             return (
               <option
                 key={nanoid()}
                 value={p.producto}
               >{p.producto}</option>
             );
           })}
            </select>
          </td>
            
          <td>
            <input 
            type="number" 
            className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
            value={infoNuevaVenta.cantidad}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })}/>
          </td>

          <td>
            <select
              className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
              name='cliente'
              onChange ={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cliente: e.target.value })}
              defaultValue={infoNuevaVenta.cliente}>
                {listaClientes.map((el) => {
              return <option key={nanoid()}  value={el.name}>{`${el.name}`}</option>;
              })}
            </select>
          </td>
          
          <td>
            <select
              className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
              name='vendedor'
              onChange ={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, vendedor: e.target.value })}
              defaultValue={infoNuevaVenta.vendedor}>
              {listaVendedores.map((el) => {
              return <option key={nanoid()}  value={el.name}>{`${el.name}`}</option>;
            })}
            </select>
          </td>
              
          <td>
          <label className='flex flex-col py-2 text-gray-800' htmlFor='estado'>  
            <select
              className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
              name='estado'
              required
              defaultValue={infoNuevaVenta.estado}
              onChange ={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })}>
                <option disabled value={0}>
                    Seleccione Una Opción
                  </option>
                <option value="En Proceso">En Proceso</option>
                <option value="Entregada">Entregada</option>
                <option value="Cancelada">Cancelada</option>
            </select>
          </label>
          </td>
            
          <td>
            <input 
            type="number" 
            className="bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 w-full"
            value={infoNuevaVenta.total}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, total: e.target.value })}/>
            </td>
        </>
                
      ) :(
      <>
          <td className=" text-center text-gray-800">{venta._id.slice(20)}</td>
          <td className=" text-center text-gray-800">{venta.fecha}</td>
          <td className=" text-center text-gray-800">{venta.producto}</td>
          <td className=" text-center text-gray-800">{venta.cantidad}</td>
          <td className=" text-center text-gray-800">{venta.cliente}</td>
          <td className=" text-center text-gray-800">{venta.vendedor}</td>
          <td className=" text-center text-gray-800">{venta.estado}</td>
          <td className=" text-center text-gray-800">{venta.total}</td>
      </>  

            
        
        
        )}
        <td>
          <div className="flex w-full justify-around text-gray-800 ">
          {edit? (
              <>
                <i
                  onClick={() => actualizarVenta()} 
                  className="fas fa-check hover:text-green-600"/>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban hover:text-yellow-700'/>
              </>
            ):(
              <>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-edit hover:text-yellow-600"/>
              
                <PrivateComponent roleList={['Administrador']}>    
                <i
                    onClick={() => borrarVenta()}
                    class="fas fa-trash text-gray-800 hover:text-red-500"/>
                </PrivateComponent>
              </>
            )} 
            
          </div>
        </td>
      
    </tr>

  );
};

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  

  useEffect(() => { 
         const fetchUsuarios = async () => {
           await obtenerUsuarios(
             (response) => {
               console.log('respuesta de usuarios', response);
               setUsuarios(response.data);
             },
             (error) => {
               console.error(error);
             }
           );
         };
         const fetchProductos = async () => {
           await obtenerProductos(
             (response) => {
               setProductos(response.data);
             },
             (error) => {
               console.error(error);
             }
           );
         };
        fetchUsuarios();
        fetchProductos();
       }, []);

  const listaVendedores = usuarios.filter(v => (v.rol === 'Vendedor') && (v.estado === 'Activo'));
  const listaClientes = usuarios.filter(c => (c.rol === 'Cliente') && (c.estado === 'Activo'));

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });
    
    console.log('form data', nuevaVenta);

   await crearVenta(
      {
        fecha: nuevaVenta.fecha,
        producto: nuevaVenta.producto,
        cantidad: nuevaVenta.cantidad,
        cliente: nuevaVenta.cliente,
        vendedor: nuevaVenta.vendedor,
        estado: nuevaVenta.estado,
        total: nuevaVenta.total,
      },
      (response) => {
        console.log(response.data);
        toast.success('Venta Creada Exitosamente');
        setMostrarTabla(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error Creando Venta');
      }
    );
    setMostrarTabla(true);
  }; 

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold pb-4 text-gray-800'>Nueva Venta</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col justify-center text-center pb-10'>
      
        <label className='flex flex-col py-2 text-gray-800' htmlFor='fecha'>
          Fecha de Venta
          <input
            name='fecha'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 '
            type='date'
            placeholder='Ej: dd/mm/aaaa'
            required/>
        </label>
        
        <label className='flex flex-col py-2 text-gray-800' htmlFor='producto'>
         Producto
         <select
           className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
           name="producto"
           required
           defaultValue={0}>
           <option disabled value={0}>
             Elija una Opción
           </option>
           {productos.map((p) => {
             return (
               <option
                 key={nanoid()}
                 value={p.producto}
               >{p.producto}</option>
             );
           })}
           </select>
         </label>

        <label className='flex flex-col py-2 text-gray-800' htmlFor='cantidad'>    
          Cantidad
          <input
            name='cantidad'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1}
            max={100}
            placeholder='Ej: 2'
            required/>
        </label>

        <label className='flex flex-col py-2 text-gray-800' htmlFor='cliente'>
          Cliente
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='cliente'
            required
            defaultValue={0}>
            <option disabled value={0}>
              Elija una Opción
            </option>
            {listaClientes.map((el) => {
              return <option key={nanoid()}  value={el.name}>{`${el.name}`}</option>;
            })} 
          </select>
        </label>

        <label className='flex flex-col py-2 text-gray-800' htmlFor='vendedor'>
          Vendedor
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='vendedor'
            required
            defaultValue={0}>
            <option disabled value={0}>
              Elija una Opción
            </option>
            {listaVendedores.map((el) => {
              return <option key={nanoid()}  value={el.name}>{`${el.name}`}</option>;
            })}
          </select>
        </label>

        <label className='flex flex-col py-2 text-gray-800' htmlFor='estado'>
          Estado de la Venta
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='estado'
            required
            defaultValue={0}>
            <option disabled value={0}>
              Elija una Opción
            </option>
            <option>En Proceso</option>
            <option>Entregada</option>
            <option>Cancelada</option>            
          </select>
        </label>
        
        <label className='flex flex-col py-2 text-gray-800' htmlFor='total'>    
          Total Venta
          <input
            name='total'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={200}
            max={5000}
            placeholder='Ej: 230'
            required/>
        </label>
        
        <button
          type='submit'
          className='col-span-2 py-3 fondo1 font-bold  text-gray-300 p-2 rounded-full shadow-md hover:bg-blue-600'>
          Crear Venta
        </button>

      </form>
    </div>
  );
};

export default Ventas;