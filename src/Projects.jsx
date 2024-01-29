import React from "react";
import "./Projects.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Projects = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1580: { items: 4 },
    2200: { items: 5 },
  };

  const items = [
    //   <div className=" card1   d-flex justify-content-center">
    //       <div className=" relative-card1  text-white   p-3 w-75 h-50">
    //   <div className="absolute-card1"></div>
    //   <div className="card-content1  d-flex justify-content-center">
    //     <h3 className="text-center w-50" style={{ marginTop: "50px" }}>
    //       CVT Offical Group
    //     </h3>
    //     <p className="text-center"></p>
    //   </div>
    //   <div className="card-details1 relative-card1  d-flex justify-content-center align-items-center">
    //     <p >Connected TV advertising, also known as CTV advertising, is advertising that is delivered
    //     to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
    //   </div>
    // </div>
    //   </div>
    <div className="d-flex justify-content-center">
      <div className="card  mt-5 " style={{ width: "350px" }}>
        <div className="card-header card-header1">
          <div className="headerimg">
            <img
              src="https://d25thuhsbcr6yb.cloudfront.net/m/s/27722/27712371/a-0072.png"
              className=" img-fluid"
              alt=""
              width="150px"
            />
          </div>
        </div>
        <div className="card-body">
          <div className="absolute-card1 "></div>
          <h5 className="text-center mt-2">CVtnnn</h5>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quos voluptatem est iste sequi alias corrupti incidunt quis
            architecto officia ab sapiente error, hic autem ut! Aperiam
            consectetur corporis suscipit.
          </p>
        </div>
      </div>
    </div>,
    <div className="d-flex justify-content-center">
    <div className="card  mt-5 " style={{ width: "350px" }}>
      <div className="card-header card-header2">
        <div className="headerimg">
          <img
            src="https://d25thuhsbcr6yb.cloudfront.net/m/s/27722/27712371/a-0072.png"
            className=" img-fluid"
            alt=""
            width="150px"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="absolute-card2 "></div>
        <h5 className="text-center mt-2">CVtnnn</h5>
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quos voluptatem est iste sequi alias corrupti incidunt quis
          architecto officia ab sapiente error, hic autem ut! Aperiam
          consectetur corporis suscipit.
        </p>
      </div>
    </div>
  </div>,

<div className="d-flex justify-content-center">
<div className="card  mt-5 " style={{ width: "350px" }}>
  <div className="card-header card-header3">
    <div className="headerimg">
      <img
        src="https://d25thuhsbcr6yb.cloudfront.net/m/s/27722/27712371/a-0072.png"
        className=" img-fluid"
        alt=""
        width="150px"
      />
    </div>
  </div>
  <div className="card-body">
    <div className="absolute-card3 "></div>
    <h5 className="text-center mt-2">CVtnnn</h5>
    <p className="text-center ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      quos voluptatem est iste sequi alias corrupti incidunt quis
      architecto officia ab sapiente error, hic autem ut! Aperiam
      consectetur corporis suscipit.
    </p>
  </div>
</div>
</div>,
    <div className="d-flex justify-content-center">
    <div className="card  mt-5 " style={{ width: "350px" }}>
      <div className="card-header card-header4">
        <div className="headerimg">
          <img
            src="https://d25thuhsbcr6yb.cloudfront.net/m/s/27722/27712371/a-0072.png"
            className=" img-fluid"
            alt=""
            width="150px"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="absolute-card4 "></div>
        <h5 className="text-center mt-2">CVtnnn</h5>
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quos voluptatem est iste sequi alias corrupti incidunt quis
          architecto officia ab sapiente error, hic autem ut! Aperiam
          consectetur corporis suscipit.
        </p>
      </div>
    </div>
  </div>,
     <div className="d-flex justify-content-center">
     <div className="card  mt-5 " style={{ width: "350px" }}>
       <div className="card-header card-header5 ">
         <div className="headerimg">
           <img
             src="https://d25thuhsbcr6yb.cloudfront.net/m/s/22360/22350525/a-0036.png"
             className=" img-fluid"
             alt=""
             style={{left:"15%",top:"15%"}}
             width="220px"
           />
         </div>
       </div>
       <div className="card-body">
         <div className="absolute-card5 "></div>
         <h5 className="text-center mt-2">CVtnnn</h5>
         <p className="text-center ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
           quos voluptatem est iste sequi alias corrupti incidunt quis
           architecto officia ab sapiente error, hic autem ut! Aperiam
           consectetur corporis suscipit.
         </p>
       </div>
     </div>
   </div>,
    <div className="d-flex justify-content-center">
    <div className="card  mt-5 " style={{ width: "350px" }}>
      <div className="card-header card-header6">
        <div className="headerimg">
          <img
            src="https://d25thuhsbcr6yb.cloudfront.net/m/s/22360/22350525/a-0036.png"
            className=" img-fluid"
            alt=""
            style={{left:"15%",top:"17%"}}
            width="220px"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="absolute-card6 "></div>
        <h5 className="text-center mt-2">CVtnnn</h5>
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quos voluptatem est iste sequi alias corrupti incidunt quis
          architecto officia ab sapiente error, hic autem ut! Aperiam
          consectetur corporis suscipit.
        </p>
      </div>
    </div>
  </div>,
  ];

  return (
    <div className="container-fluid  text-white mb-5" style={{backgroundColor:"rgba(5, 8, 22)"}}>
      <div className="row mb-5">
        <div className="col-lg-12 ps-5" style={{ marginTop: "80px" }}>
          <h1
            className=" "
            style={{ color: "rgb(255, 255, 255)", fontSize: "50px" }}
          >
            Projects
          </h1>
          <p
            className=""
            style={{ color: "rgb(141, 141, 141)", fontSize: "20px" }}
          >
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
        </div>
        {/* <div className="col-lg-6 imagepro  d-flex justify-content-end ">
          <div className="d-flex justify-content-end align-items-center  pe-5">
          <img
            src="https://cdn.create.vista.com/api/media/medium/471159984/stock-vector-bowling-gold-plated-metalic-icon-logo-vector?token="
            alt=""
            className="projectimg"
          />
          </div>
        
        </div> */}
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Projects;
