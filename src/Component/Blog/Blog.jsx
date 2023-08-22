import React from 'react'
import blog from '../../Image/blog1.jpg'
import { Helmet } from 'react-helmet'
export default function Blog() {
  return (
    <div className="resent">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>Our Blog </h2>
          <span>Home / Blog </span>
        </div>
      </div>
      <div className="lessons py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-sm-12">
              <div className="card border-0 shadow">
                <img src={blog} className="card-img-top" alt="..." />
                <div className="card-body p-5">
                  <h5 className="card-title">Google links pact for new 35-storey office.</h5>
                  <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                  <div>
                    <i className="fa-solid fa-user fs-6 text-muted me-2"></i>
                    <span className='text-muted'>Lifestyle</span> |
                    <i className="fa-solid fa-comment fs-6 text-muted mx-2"></i>
                    <span className='text-muted'>03 Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="news p-3 rounded-2 shadow">
                <h4 className='mb-4 head'>Recent Post</h4>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="col-5">
                    <img src={blog} alt="blog" className='w-100' />
                  </div>
                  <div className="col-7">
                    <h6>From life was you fish...</h6>
                    <p>January 12, 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
