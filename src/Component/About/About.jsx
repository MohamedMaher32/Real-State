import React from 'react'
import about from "../../Image/about1.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import customer1 from "../../Image/customer1.jpg"
import customer2 from "../../Image/customer2.jpg"
import customer3 from "../../Image/customer3.png"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function About() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
  return (
    <div className='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About-Rental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5'>
          <h2 >About Us</h2>
          <span>Home / About </span>
        </div>
      </div>
      <div className="about">
        <div className="container my-5">
          <div className="row my-5 align-items-center g-5 mx-0">
            <div className="col-lg-6 col-sm-12">
              <div>
                <img src={about} alt="about" className='w-100' />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className='px-lg-5 px-sm-2 text-lg-start text-sm-center txt'>
                <h3>WE ARE ON EXPERT THIS FIELD BUILDINGS SOLUTIONS SINCE 1974.</h3>
                <p>Void gathering midst together you're shall. Beast set he
                  likeness spirit winged two all fourth they're gathered
                  seasons very may heaven saying.</p>
                <Link to="/about" className='btn rounded-2'>learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customer py-5">
        <div className="container mb-5">
          <div className="header text-center py-5">
            <h2>Customer reviews</h2>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <OwlCarousel className='owl-theme' loop items={2} autoplay={true} autoplayTimeout={2000} margin={20} dots {...responsive}>
            <div className="item">
              <div className="test border border-3 p-5">
                <div className="head d-flex justify-content-between align-items-center ">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={customer1} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                    <div>
                      <h5>Kerry D.Silva</h5>
                      <span>New york</span>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                </div>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
              </div>
            </div>
            <div className="item">
              <div className="test border-3 border  p-5">
                <div className="head d-flex justify-content-between align-items-center ">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={customer2} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                    <div>
                      <h5>Kerry D.Silva</h5>
                      <span>New york</span>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                </div>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
              </div>
            </div>
            <div className="item">
              <div className="test border-3 border p-5">
                <div className="head d-flex justify-content-between align-items-center ">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={customer3} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                    <div>
                      <h5>Ali hamad  </h5>
                      <span>cairo</span>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                </div>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
              </div>
            </div>

          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}


