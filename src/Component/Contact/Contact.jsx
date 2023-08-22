import React from 'react'
import { Helmet } from 'react-helmet'
export default function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us-Rental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>Contact Us </h2>
          <span>Home / Contact </span>
        </div>
      </div>
      <div className="lessons py-5">
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925149.3130079734!2d56.41033888957776!3d25.072581192552402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6829bbccf13f%3A0x3e7d654868612ec8!2z2YbZjtin2YHZj9mI2LHZjtipINio2Y_YsdmS2KzZkCDYrtmO2YTZkNmK2YHZjtip2ZAg2K_Zj9io2Y7Zig!5e0!3m2!1sar!2sae!4v1689280802618!5m2!1sar!2sae" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <h3>Get in Touch</h3>
          <div className="row g-4">
            <div className="col-md-7 col-sm-12">
              <form>
                <div className="my-4">
                  <textarea cols="30" rows="10" placeholder="Enter your message" className=" form-control rounded-0"></textarea>
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center">
                  <input type="text" className=" form-control rounded-0 me-2 py-3" placeholder="Enter your name" />
                  <input type="email" className=" form-control rounded-0 ms-3 py-3" placeholder="Enter Email" />
                </div>
                <div className="my-4">
                  <input type="text" className=" form-control rounded-0 py-3" placeholder="Enter your subject" />
                </div>
                <button className="btn">SEND</button>
              </form>
            </div>
            <div className="col-md-4 col-sm-12 offset-md-1">
              <div className="d-flex align-items-center my-5">
                <i className="fa-solid fa-house fs-3 me-3"></i>
                <div className="text">
                  <h5 className="m-0">Dubai , UAE.</h5>
                  <p className="text-muted m-0">Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-5">
                <i className="fa-solid fa-square-phone fs-3 me-3"></i>
                <div className="text ">
                  <h5 className="m-0">+971564620155</h5>
                  <p className="text-muted m-0">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-5">
                <i className="fa-solid fa-envelope fs-3 me-3"></i>
                <div className="text ">
                  <h5 className="m-0 ">Mhalosh43@gmail.com</h5>
                  <p className="text-muted m-0">Send us your query anytime!</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-5">
                <i className="fa-solid fa-globe fs-3 me-3"></i>
                <div className="text">
                  <h5 className="m-0">MohamedMaher32</h5>
                  <p className="text-muted m-0">See my projects in githup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
