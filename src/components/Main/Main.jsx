import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDollarSign, FaHourglassHalf, FaCar, FaBuilding, FaArrowCircleRight } from 'react-icons/fa';
import Swal from 'sweetalert2';


import './main.css';

export default function Main() {

  useEffect(() => {
    AOS.init();
  }, []);

  const handleScrollToForm = (modelo) => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('modelo').value = modelo
    }
  };


  const enviarForm = async () => {

    let form = {
        nombre: "",
        email: "",
        tel: "",
        modelo: "",
        sucursal: "",
    };

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const modelo = document.getElementById('modelo').value;
    const sucursal = document.getElementById('sucursal').value;

    if(!nombre) return Swal.fire({title: 'Ingresa un nombre', confirmButtonText: 'OK',confirmButtonColor: '#111',  customClass: { popup: 'custom-background', title: 'custom-title' }})
    if(!email) return Swal.fire({title: 'Ingresa un email', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})
    if(!tel) return Swal.fire({title: 'Ingresa un telefono', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})
    if(!modelo) return Swal.fire({title: 'Ingresa el modelo que buscas', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})
    if(!sucursal) return Swal.fire({title: 'Ingresa una sucursal de interes', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})

    if(nombre) form = {...form, nombre}
    if(email) form = {...form, email}
    if(tel) form = {...form, tel}
    if(modelo) form = {...form, modelo}
    if(sucursal) form = {...form, sucursal}

    form = {...form,token: 'gqptewbrqfgmxsgh'}

    console.log(form)

    const response = await fetch('http://backend.taraborelli.com:8080/send-email', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify(form),
    });

    console.log(response)

    if(response.status == 200) {
      Swal.fire({title: 'Enviando Formulario', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})
      
      setTimeout(() => {
        location.reload()
      }, 1500);
    } else {
      Swal.fire({title: 'Error al enviar formulario', confirmButtonText: 'OK',confirmButtonColor: '#111', customClass: { popup: 'custom-background', title: 'custom-title' }})
    }
  }

  return (
    <main className="main">
      <section className="main-section-1">
        <article className="main-section-1-article">
          <img id="banner" className="main-section-1-article-img" src="./images/banner.jpg" alt="banner" />
        </article>

        <article className="main-section-2-article" id="form">
          <h1 className="main-section-2-article-title" id="title-form">Contactanos</h1>
          <form className="main-section-2-article-form">
            <input id="nombre" className="main-section-2-article-form-input" type="text" placeholder="Nombre" />
            <input id="email" className="main-section-2-article-form-input" type="text" placeholder="Correo Electrónico" />
            <input id="tel" className="main-section-2-article-form-input" type="text" placeholder="Teléfono" />

            <img src="../../../public/images/loading.gif" style={{ display: "none" }} className="main-section-2-article-form-loader" id="loader" />

            <input id="modelo" className="main-section-2-article-form-input" type="text" placeholder="¿Qué modelo estás buscando?" />
            <select id="sucursal" className="main-section-2-article-form-select">
              <option className="main-section-2-article-form-select-option" value="">Sucursal de Interés</option>
              <option className="main-section-2-article-form-select-option" value="Entre Rios">Entre Ríos</option>
              <option className="main-section-2-article-form-select-option" value="Caballito">Caballito</option>
              <option className="main-section-2-article-form-select-option" value="Palermo">Palermo</option>
              <option className="main-section-2-article-form-select-option" value="Paternal">Paternal</option>
              <option className="main-section-2-article-form-select-option" value="San Miguel">San Miguel</option>
              <option className="main-section-2-article-form-select-option" value="Bariloche">Bariloche</option>
            </select>

            <button onClick={() => enviarForm()} type="button" className="main-section-2-article-form-button" id="boton-enviar-form">
                ENVIAR
            </button>
          </form>
        </article>
      </section>

      <section className="main-info">
        <article className="main-info-banda" id="line-match-header"></article>

        <article className="main-info-article">
          <p data-aos="fade-down" data-aos-duration="1400" id="info-text1"><b style={{color: '#E40428'}}>Taraborelli</b> es una compañía con más de 35 años de experiencia en la comercialización de vehículos y servicios. Brindamos cobertura de venta en diferentes canales: Convencional, Planes de Ahorro y Venta Corporativa. Nuestra trayectoria revela más de 60.000 vehículos entregados y un equipo de trabajo que supera los 400 colaboradores, especialmente capacitados para ofrecer el <b style={{color: '#E40428'}}>mejor servicio al cliente.</b></p>
          <p data-aos="fade-down" data-aos-duration="1400" id="info-text2">Contamos con un complejo de concesionarias diseñadas para lograr la mejor experiencia de compra. 6 sucursales de ventas, más de 8.000 metros cuadrados de talleres integrales para brindarle el mejor servicio postventa y tres Centros de Entrega de 0km propios.</p>

          <h2 id="title-info" data-aos="fade-down" data-aos-duration="1400">ELEGÍ TARABORELLI</h2>
          <h4 id="subtitle-info" data-aos="fade-down" data-aos-duration="1400">Te brindamos las mejores condiciones para que puedas acceder a tu 0km</h4>

          <div data-aos="fade-down" data-aos-duration="1400" className="main-info-article-container">
            <div className="main-info-article-container-finance">
              <FaDollarSign id="info-icon1" className="main-info-article-container-finance-icon" />                      
              <h6 id="info-text3" className="main-info-article-container-finance-text">Financiación en Pesos sin interés hasta en 84 cuotas sólo con tu DNI.</h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaHourglassHalf id="info-icon2" className="main-info-article-container-finance-icon" />
              <h6 id="info-text4" className="main-info-article-container-finance-text">Entregas inmediatas y pactadas.</h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaCar id="info-icon3" className="main-info-article-container-finance-icon" />
              <h6 id="info-text5" className="main-info-article-container-finance-text">Tomamos tu usado en parte de pago y te ofrecemos la mejor financiación del mercado.</h6>
            </div>
          </div>
        </article>
      </section>

      <section className='main-planes'>
        <article className="main-planes-banda"> </article>

        <article className='main-planes-title' data-aos="fade-down" data-aos-duration="1400">
          <h3 className='main-planes-title-text'>MODELOS DESTACADOS</h3>
        </article>
  
        <article className='main-planes-container' data-aos="fade-down" data-aos-duration="1400">
          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Cronos')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Cronos</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/cronos.png' />
            <span className='main-planes-container-plan-button'>
              <p>CONSULTAR</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>

          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Argo')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Argo</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/argo.png' />
            <span className='main-planes-container-plan-button'>
              <p>Consultar</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>
          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Mobi')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Mobi</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/mobi.png' />
            <span className='main-planes-container-plan-button'>
              <p>CONSULTAR</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>
          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Toro')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Toro</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/toro.png' />
            <span className='main-planes-container-plan-button'>
              <p>CONSULTAR</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>
          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Fiorino')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Fiorino</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/fiorino.png' />
            <span className='main-planes-container-plan-button'>
              <p>CONSULTAR</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>
          <div className='main-planes-container-plan' onClick={() => handleScrollToForm('Strada')}>
            <span className='main-planes-container-plan-title'><p className='main-planes-container-plan-title-text'>Strada</p></span>
            <img className='main-planes-container-plan-img' src='../../../public/images/strada.png' />
            <span className='main-planes-container-plan-button'>
              <p>CONSULTAR</p>
              <FaArrowCircleRight className='main-planes-container-plan-button-icon'/>
            </span>
          </div>
        </article>
      </section>

      <section className="main-sucursales">
        <article className="main-sucursales-banda" id="line-match-header2"></article>

        <article className="main-sucursales-info" data-aos="fade-down" data-aos-duration="1400">
          <div className="main-sucursales-info-contenedor" id="branch-offices-container">
            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL PATERNAL</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Av. San Martín 3078</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Capital Federal</p>  
            </div>

            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL CABALLITO</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Av. Rivadavia 6150</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Capital Federal</p>  
            </div>

            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL PALERMO</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Av. Córdoba 4002</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Capital Federal</p>  
            </div>

            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL SAN MIGUEL</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Av. Balbín 2406</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">San Miguel, Buenos Aires</p>  
            </div>

            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL ENTRE RÍOS</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Sansoni 2080</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Concepción del Uruguay, Entre Ríos</p>  
            </div>

            <div className="main-sucursales-info-contenedor-direccion">
              <FaBuilding style={{marginBottom: '15px'}} className="main-sucursales-info-contenedor-direccion-icono"/>
              <h3 className="main-sucursales-info-contenedor-direccion-titulo">SUCURSAL BARILOCHE</h3>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">Comandante Luis Piedrabuena 6038</p>
              <p className="main-sucursales-info-contenedor-direccion-subtitulo">San Carlos de Bariloche, Río Negro</p>  
            </div>
          </div>
        </article>

        <article className="main-sucursales-banda-2" id="line-match-header3"></article>
      </section>
    </main>
  )
}
