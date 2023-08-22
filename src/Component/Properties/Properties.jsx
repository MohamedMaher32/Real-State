import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import about2 from "../../Image/about2.png"
import icon1 from "../../Image/i1.png"
import icon2 from "../../Image/i2.png"
import icon3 from "../../Image/i3.png"
import icon4 from "../../Image/i4.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import customer1 from "../../Image/customer1.jpg"
import customer2 from "../../Image/customer2.jpg"
import customer3 from "../../Image/customer3.png"
import { Helmet } from 'react-helmet';
export default function Properties() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
  return (
    <div className='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services-Rental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2 >Our Services</h2>
          <span>Home / Services </span>
        </div>
      </div>
      <div className="work py-5">
        <div className="container">
          <div className="header text-center py-5">
            <h2>What We Provide</h2>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row py-5 g-4">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div div className='text-center shadow p-5 txt rounded-2 h-100'>
                <img src={icon1} alt="icon" />
                <h3>Architecture Design</h3>
                <p>You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                <Link to="/about" className='btn rounded-2'>read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div div className='text-center shadow p-5 txt rounded-2 h-100'>
                <img src={icon2} alt="icon" />
                <h3>Building Construction</h3>
                <p>You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                <Link to="/about" className='btn rounded-2'>read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div div className='text-center shadow p-5 txt rounded-2 h-100'>
                <img src={icon3} alt="icon" />
                <h3>Building Renovation</h3>
                <p>You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                <Link to="/about" className='btn rounded-2'>read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div div className='text-center shadow p-5 txt rounded-2 h-100'>
                <img src={icon4} alt="icon" />
                <h3>Building Maintenance</h3>
                <p>You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                <Link to="/about" className='btn rounded-2'>read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about service">
        <div className="container">
          <div className="row align-items-center g-5 mx-0">
            <div className="col-lg-5 col-sm-12">
              <div>
                <img src={about2} alt="about" className='w-100' />
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className='px-lg-5 px-sm-2 text-lg-start text-sm-center txt'>
                <h3>PROVIDING PERSONALIZED AND HIGH QUALITY SERVICE.</h3>
                <p>Grass bearing make open multiply that may fly cattle gathering be unto
                  void moving. Blessed one evening had them heaven
                  divide said heaven whose brought he. Give It fowl green.</p>
                <div className='d-flex justify-content-between'>
                  <div className='counter d-flex justify-content-center text-start flex-column'>
                    <span><CountUp end={15} enableScrollSpy />K+</span>
                    <p>Happy Customer</p>
                  </div>
                  <div className='counter d-flex justify-content-center flex-column text-start'>
                    <span><CountUp end={10} enableScrollSpy />K+</span>
                    <p>Project Done</p>
                  </div>
                  <div className='counter d-flex justify-content-center text-start flex-column'>
                    <span><CountUp end={9} enableScrollSpy />/10</span>
                    <p>Average Rating</p>
                  </div>
                </div>
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
