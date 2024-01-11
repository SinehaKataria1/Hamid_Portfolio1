import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./Navigation"
const Home = () => {
  return (
    <div>
          <Navigation/>
        <div className="container-fluid bg-dark text-white">
            <div className="row d-flex justify-content-center p-5">
                <div className="col-lg-6 p-5">
                        <h1 className='w-25' style={{fontSize:"45px"}}>Hi! I am
                        Jacob Watson</h1> 
                        <p className='fs-4'>As a marketing expert, I have a wealth of knowledge and experience in 
                          developing and implementing marketing strategies to promote products, services, or brands.</p>    
                        <button className='btn bg-danger'>Get Started</button>
                        <button className='btn bg-white ms-3'>Contact Me</button>
                        {/* <div>
                          <img 
                        src="https://rarathemesdemo.com/perfect-portfolio-pro-dark-3/wp-content/uploads/sites/193/2022/12/Vector-10-1-1.png" 
                        alt="" /></div> */}
                </div>
                <div className="col-lg-6">
                    <img 
                    src="https://rarathemesdemo.com/perfect-portfolio-pro-dark-3/wp-content/uploads/sites/193/2022/12/banner-img-1.png
                    " alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home