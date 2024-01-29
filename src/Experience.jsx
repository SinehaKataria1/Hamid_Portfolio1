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
      <div className="row p-5">
        <div className="col-lg-6">
          <img src="https://www.yourgold.cz/_nuxt/Strefapartnera1.5d857f95.png" />
        </div>
        <div className="col-lg-6" style={{ marginTop: "80px" }}>
          <h1
            className=" text-center"
            style={{ color: "rgb(255, 255, 255)", fontSize: "50px" }}
          >
            Experience
          </h1>
          <h3
            className="text-center"
            style={{ color: "rgb(255, 255, 255)", fontSize: "25px" }}
          >
            Work, Internship and Volunteership
          </h3>
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
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a802c051-4d68-4ba9-b132-563de8f15b5f/dgdtzzd-85d376ec-a3dd-4515-a3d2-15cb637f5400.png/v1/fill/w_554,h_554/king_julien_png__by_miguelucm_dgdtzzd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU0IiwicGF0aCI6IlwvZlwvYTgwMmMwNTEtNGQ2OC00YmE5LWIxMzItNTYzZGU4ZjE1YjVmXC9kZ2R0enpkLTg1ZDM3NmVjLWEzZGQtNDUxNS1hM2QyLTE1Y2I2MzdmNTQwMC5wbmciLCJ3aWR0aCI6Ijw9NTU0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pfWT2vRGkl497n-Di49np0KRiWzGjppxrgiCHGFZsl4"
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
                        src="https://static.coinpaprika.com/exchanges/lbank/logo.png?rev=10659857"
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
            <Typography>Volunteerships</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             

              
              <div className=" skill1 pe-2">
                <div className="d-flex justify-content-between ps-2 pt-2">
                  <div className=" d-flex justify-content-between ">
                    <div className=" ">
                    <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a802c051-4d68-4ba9-b132-563de8f15b5f/dgdtzzd-85d376ec-a3dd-4515-a3d2-15cb637f5400.png/v1/fill/w_554,h_554/king_julien_png__by_miguelucm_dgdtzzd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU0IiwicGF0aCI6IlwvZlwvYTgwMmMwNTEtNGQ2OC00YmE5LWIxMzItNTYzZGU4ZjE1YjVmXC9kZ2R0enpkLTg1ZDM3NmVjLWEzZGQtNDUxNS1hM2QyLTE1Y2I2MzdmNTQwMC5wbmciLCJ3aWR0aCI6Ijw9NTU0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pfWT2vRGkl497n-Di49np0KRiWzGjppxrgiCHGFZsl4"
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
                        src="https://static.coinpaprika.com/exchanges/lbank/logo.png?rev=10659857"
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
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
