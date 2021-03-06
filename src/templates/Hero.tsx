import React from 'react';

// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <div className="header-area" style={{ paddingBottom: '8%' }}>
    <div className="cbp-af-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <a href="#top">
                <h1>
                  <img src={`${process.env.baseUrl}/assets/img/logo.png`} alt="chipsofic" />
                </h1>
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="main-menu">
              <ul id="navigation">
                <li><a data-scroll href="#about-us">TENTANG</a></li>
                <li><a data-scroll href="#our-products">PRODUK</a></li>
                <li><a data-scroll href="#pic-gallery">GALERI</a></li>
                <li><a data-scroll href="#our-team">TIM</a></li>
                {/* <li><a data-scroll href="#customer-feedback">TESTIMONI</a></li> */}
                <li><a data-scroll href="#purchase-now">PESAN</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container"><div className="responsive-menu-wrap" /></div>

    <div className="container">
      <div className="row">
        <div className="top-area text-center">
          <h1><img src={`${process.env.baseUrl}/assets/img/berani_coba.png`} alt="chipsofic" style={{ width: '80%' }} /></h1>
          <p>
            Produksi
            {' '}
            <b>Bandung</b>
            , Pelopor Keripik Pisang Tipis, Tanpa MSG aman bagi semua kalangan, dan dibuat dari bahan berkualitas terbaik. Sangat cocok menjadi camilan saat bersantai, atau pun teman ngobrol bersama keluarga. Menjadi Buah tangan atau hadiah pun tidak kalah cocok.
          </p>
          <a data-scroll href="#our-products" className="btn">Pilih Rasa</a>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
