import React from "react";
import Fade from "react-reveal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Experience = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="container-fluid mb-2" style={{backgroundColor:"rgba(5, 8, 22)"}}>
      <div className="row  ">
      <Fade left>
        <div className="col-lg-6  d-flex justify-content-center ">
          
          <img src="https://pearllemonleads.com/wp-content/uploads/2021/09/it-telemarketing-1024x939.png"  
          className="image-fluid h-75"/>
        </div>
        </Fade>
        <Fade right>
        <div className="col-lg-6 " style={{ marginTop: "120px" }}>
          <h1
            className=" text-center fs-1"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            Experience & Education
          </h1>
          <p
            className="text-center "
            style={{ color: "rgb(141, 141, 141)", fontSize: "20px" }}
          >
            I've completed one internship. I've mostly done projects on my own
            and I am actively looking for internships / Jobs. I love organizing
            workshops to share my knowledge with others.
          </p>
        </div>
        </Fade>
      </div>
      <div>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
          style={{ backgroundColor: "#1d1d1d", color: "white" , border:".1px solid hsla(0,0%,82.7%,.397)" }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{ backgroundColor: "#1d1d1d", color: "white" }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className=" skill1 pe-2">
          
                <div className="d-flex justify-content-between ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">

                    <div className=" ">
                    <img
                    src="https://tv.dreamworks.com/games/remix/video/images/carousel_king_julien.png"
                    width="85"
                       className="img-fluid "
                  />
                    </div>
                    <div className="ms-2">
                      
                      <span className=" fs-5">
                        King Julien Ambassador 
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
                
              </div>

              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/474/original/reddit-logo-reddit-icon-transparent-free-png.png"
                    width="75"
                       className="img-fluid "
                  />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                        Redot Ambassador 
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0 ms-1  text-center">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://static.coinpaprika.com/exchanges/lbank/logo.png?rev=10659857"
                        width="55"
                       className="img-fluid "
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                        LBank Ambassador 
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0 ms-1  text-center">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-1 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className="  ">
                      <img
                        src="https://nunuspirits.io/wp-content/uploads/2022/06/nunu-coin-1.png"
                       width="50"
                       className="img-fluid "
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                      CMO of NunuSpiritsNFT
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                      Eagle's Digital Marketing is the well-known Digital Marketing agency 
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0 ms-1  text-center">2022 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://www.freepnglogos.com/uploads/eagles-png-logo/philadelphia-eagles-logo-png-13.png"
                        className="img-fluid"
                        width="80"
                      />
                    </div>
                    <div className="">
                      <span className=" fs-5">
                      CEO of Eagles Digital Marketing
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                      Eagle's Digital Marketing is the well-known Digital Marketing agency 
                      </p>
                    </div>
                  </div>
                  /</Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">May 2022- Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                        src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-eagles-logo-vector-png-image_11243286.png"
                        className="img-fluid"
                        width="80"
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                      CMO of Crypto Eagles
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }} className="w-75">
                      Crypto Eagles leading marketing brand and scaling agency provides blockchain
                      projects and web3 companies with best-in-class marketing and scaling services
                       that cover the global market.

                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">April 2019 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/11423.png"
                        className="img-fluid"
                        width="55"
                       
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-6">
                      International Marketing Manager - VEMP DDAO
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                      Crypto City is an investment research platform positioned in the research analysis

                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">October 2021 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/8055/8055582.png"
                        className="img-fluid"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                      CMO of Crypto City
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                      Crypto City is an investment research platform positioned in the research analysis
                      and evaluation of primary market projects
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">October 2020 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://i.pinimg.com/originals/24/c8/66/24c86637b6427986f6fbd478495b6ed9.png"
                        className="img-fluid"
                        width="40"
                      />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                      Remote Guardian at Uptrennd
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                      Worked for Uptrennd as lead Guardian
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0 ms-1  text-center">2019 - 2021</p>
                    <p className="text-center">Work from home</p>
                  </div>
                  </Fade>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  style={{ backgroundColor: "#1d1d1d", color: "white" , border:".1px solid hsla(0,0%,82.7%,.397)" }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{ backgroundColor: "#1d1d1d", color: "white" }}
              />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             

              
            <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/WikiProject_Physics_Logo_%28Deus_WikiProjects%29.svg/1200px-WikiProject_Physics_Logo_%28Deus_WikiProjects%29.svg.png"
                    className="img-fluid"
                        width="70"
                  />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                        Bachelor Of Physics
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events 
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">2017 - 2021</p>
                    <p className="text-center">KFUEIT</p>
                  </div>
                  </Fade>
                </div>
              </div>

              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  ps-2 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://rankur.com/wp-content/uploads/2015/06/digitalmarketing.png"
                    className="img-fluid"
                    width="70"
                  />
                    </div>
                    <div className="ms-2">
                      <span className=" fs-5">
                      Diploma - Digital Marketing
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">2022</p>
                    <p className="text-center">Ryk-Pakistan</p>
                  </div>
                  </Fade>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between  ps-1 pt-2">
                <Fade left>
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/education-59/128/MBA-512.png"
                        className="img-fluid"
                        width="80"
                      />
                    </div>
                    <div className="">
                      <span className=" fs-5">
                       MBA
                      </span>

                      <p style={{ color: "rgb(141, 141, 141)" }}>
                        As an Active Member of Computer Society, I was
                        responsible for organizing 
                      </p>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className="mb-0 ms-1  text-center">Ongoing</p>
                    <p className="text-center">KFUEIT</p>
                  </div>
                  </Fade>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
