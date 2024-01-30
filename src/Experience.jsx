import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
const Experience = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="container-fluid " style={{backgroundColor:"rgba(5, 8, 22)"}}>
      <div className="row p-2">
        <div className="col-lg-6">
          <img src="https://pearllemonleads.com/wp-content/uploads/2021/09/it-telemarketing-1024x939.png"  className="image-fluid"/>
        </div>
        <div className="col-lg-6" style={{ marginTop: "80px" }}>
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
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://www.voicify.ai/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2F9cbc4a4c-9a82-49f2-8a89-04ed26707279.png&w=3840&q=100"
                    width="60"
                    className="img"
                  />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                        King Julien Ambassador 
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>

              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/474/original/reddit-logo-reddit-icon-transparent-free-png.png"
                    width="60"
                    className="img"
                  />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                        Redot Ambassador 
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="data:image/png;base64,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"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                        LBank Ambassador 
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">September 2023 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://nunuspirits.io/wp-content/uploads/2022/06/nunu-coin-1.png"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      CMO of NunuSpiritsNFT
                      </span>

                      <p className="w-75">
                      Eagle's Digital Marketing is the well-known Digital Marketing agency dedicated to
elevating your brand through innovative marketing solutions, custom strategies
channel expertise, and flawless execution.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">2022 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://www.freepnglogos.com/uploads/eagles-png-logo/philadelphia-eagles-logo-png-13.png"
                        className="img"
                        width="65"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      CEO of Eagles Digital Marketing
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible 
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">May 2022- Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                        src="https://www.freepnglogos.com/uploads/eagles-png-logo/philadelphia-eagles-logo-png-13.png"
                        className="img"
                        width="100"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      CMO of Crypto Eagles
                      </span>

                      <p className="w-75">
                      Crypto Eagles leading marketing brand and scaling agency provides blockchain
                      projects and web3 companies with best-in-class marketing and scaling services
                       that cover the global market and meet any specific requirement needs and
                      requirements our clients may have.

                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">April 2019 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/11423.png"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      International Marketing Manager - VEMP DDAO
                      </span>

                      <p className="w-75">
                      Crypto City is an investment research platform positioned in the research analysis
and evaluation of primary market projects
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">October 2021 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://img1.wsimg.com/isteam/ip/b08165c0-5344-41dd-81a5-7efdc3a45499/highrez_transparent.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      CMO of Crypto City
                      </span>

                      <p className="w-75">
                      Crypto City is an investment research platform positioned in the research analysis
                      and evaluation of primary market projects
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">October 2020 - Present</p>
                    <p className="text-center">Work from home</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://i.pinimg.com/originals/24/c8/66/24c86637b6427986f6fbd478495b6ed9.png"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      Remote Guardian at Uptrennd
                      </span>

                      <p className="w-75">
                      Worked for Uptrennd as lead Guardian
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">2019 - 2021</p>
                    <p className="text-center">Work from home</p>
                  </div>
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
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/WikiProject_Physics_Logo_%28Deus_WikiProjects%29.svg/1200px-WikiProject_Physics_Logo_%28Deus_WikiProjects%29.svg.png"
                    width="60"
                    className="img"
                  />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                        Bachelor Of Physics
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">2017 - 2021</p>
                    <p className="text-center">KFUEIT</p>
                  </div>
                </div>
              </div>

              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://rankur.com/wp-content/uploads/2015/06/digitalmarketing.png"
                    width="60"
                    className="img"
                  />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                      Diploma - Digital Marketing
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">2022</p>
                    <p className="text-center">Ryk-Pakistan</p>
                  </div>
                </div>
              </div>
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/education-59/128/MBA-512.png"
                        className="img"
                        width="55"
                      />
                    </div>
                    <div className="ms-2">
                      <span style={{ fontSize: "25px" }}>
                       MBA
                      </span>

                      <p className="w-75">
                        As an Active Member of Computer Society, I was
                        responsible for organizing the events and making sure
                        that the event is a success.
                      </p>
                    </div>
                  </div>
                  <div style={{ color: "rgb(141, 141, 141)" }}>
                    <p className=" mb-0">Ongoing</p>
                    <p className="text-center">KFUEIT</p>
                  </div>
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
