import { Link } from "react-router-dom";
import Logo from "../../Image/footer_logo.png"
export default function Footer() {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row py-5 gy-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">ABOUT US</h5>
                            <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                            <Link to='/' className="navbar-brand" ><img src={Logo} alt="logo"/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">IMPORTANT LINKS</h5>
                            <div className="categories mt-4">
                                <Link to='/home'>WHMCS-bridge</Link>
                                <Link to='/home'>Search Domain</Link>
                                <Link to='/home'>My Account</Link>
                                <Link to='/home'>Our Shop </Link>
                                <Link to='/home'>FAQs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold mb-4">GET IN TOUCH</h5>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="social d-flex my-3">
                                <i className="fa-brands fa-facebook-f btn-bg"></i>
                                <i className="fa-brands fa-twitter  btn-bg"></i>
                                <i className="fa-brands fa-linkedin-in  btn-bg"></i>
                                <i className="fa-brands fa-github  btn-bg"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">NEWSLETTER</h5>
                            <input type="email" className="form-control my-4" placeholder="Email"/>
                            <button className="btn btn-bg rounded-2">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 text-white text-center bg-dark">All Rights Reserved Copy Right 2023 <i className=" fa fa-heart solid text-danger"></i> By Mohamed Maher </div>
        </div>
    )
}