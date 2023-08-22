import React from 'react'
import gallary1 from "../../Image/1.jpg"
import gallary2 from "../../Image/2.jpg"
import gallary3 from "../../Image/3.jpg"
import gallary4 from "../../Image/4.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import customer1 from "../../Image/customer1.jpg"
import customer2 from "../../Image/customer2.jpg"
import customer3 from "../../Image/customer3.png"
import { Helmet } from 'react-helmet'
export default function Projects() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
  return (
    <div className='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Projects-Rental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2 >Our Projects</h2>
          <span>Home / Projects </span>
        </div>
      </div>
      <div className="profile py-5">
        <div className="container">
          <div className="header text-center py-5">
            <h2>Our Recent Project</h2>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-ALL-tab" data-bs-toggle="pill" data-bs-target="#pills-ALL" type="button" role="tab" aria-controls="pills-ALL" aria-selected="true">ALL</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-BUILDINGS-tab" data-bs-toggle="pill" data-bs-target="#pills-BUILDINGS" type="button" role="tab" aria-controls="pills-BUILDINGS" aria-selected="false">BUILDINGS</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-OFFICES-tab" data-bs-toggle="pill" data-bs-target="#pills-OFFICES" type="button" role="tab" aria-controls="pills-OFFICES" aria-selected="false">OFFICES</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-REBUILD-tab" data-bs-toggle="pill" data-bs-target="#pills-REBUILD" type="button" role="tab" aria-controls="pills-REBUILD" aria-selected="false" >REBUILD</button>
            </li>
          </ul>
          <div className="tab-content py-3" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-ALL" role="tabpanel" aria-labelledby="pills-ALL-tab" tabIndex="0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary1} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary2} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary3} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary h-100 shadow'>
                      <img src={gallary4} alt="gallary1" className='w-100 h-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-BUILDINGS" role="tabpanel" aria-labelledby="pills-BUILDINGS-tab" tabIndex="0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary2} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-OFFICES" role="tabpanel" aria-labelledby="pills-OFFICES-tab" tabIndex="0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary3} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary h-100 shadow'>
                      <img src={gallary4} alt="gallary1" className='w-100 h-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-REBUILD" role="tabpanel" aria-labelledby="pills-REBUILD-tab" tabIndex="0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary1} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className='gallary shadow'>
                      <img src={gallary3} alt="gallary1" className='w-100' />
                      <div className="layer">
                        <div className='info'>
                          <p>CONSTRUCTION</p>
                          <h4>Desert Work, Dubai</h4>
                        </div>
                      </div>
                    </div>
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
