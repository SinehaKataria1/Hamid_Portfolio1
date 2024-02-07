import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InboxIcon from '@mui/icons-material/Inbox';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Contact.css";
import { Bounce } from "react-reveal";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with the subject
    const mailtoLink = `mailto:sinehakataria.bscsf21@iba-suk.edu.pk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };

  const StyledTextarea = styled(TextareaAutosize)({
    resize: "none",
    border: "none", // remove the native textarea border
    minWidth: 0, // remove the native textarea width
    outline: 0, // remove the native textarea outline
    padding: 0, // remove the native textarea padding
    paddingBlockStart: "1em",
    paddingInlineEnd: `var(--Textarea-paddingInline)`,
    flex: "auto",
    alignSelf: "stretch",
    color: "inherit",
    backgroundColor: "rgba(5, 8, 22)",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    "&::placeholder": {
      opacity: 0,
      transition: "0.1s ease-out",
    },

    "&:focus::placeholder": {
      opacity: 1,
    },
    // specific to TextareaAutosize, cannot use '&:focus ~ label'
    "&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label":
      {
        top: "0.5rem",
        fontSize: "0.75rem",
      },

    "&:focus + textarea + label": {
      color: "var(--Textarea-focusedHighlight)",
    },
  });

  const StyledLabel = styled("label")(({ theme }) => ({
    position: "absolute",
    lineHeight: 1,
    top: "calc((var(--Textarea-minHeight) - 1em) / 2)",
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  }));

  const InnerTextarea = React.forwardRef(function InnerTextarea(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>Message</StyledLabel>
      </React.Fragment>
    );
  });
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#fe3e57",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fe3e57",
      },
    },
    "& input": {
      color: "white", // Set text color to white
    },
  });

  return (
    <div
      className="container-field text-white pt-3 mb-0 contact" id="Contact"
      style={{ backgroundColor: "rgba(5, 8, 22)", overflow: "hidden" }}
    >
      <div className="row d-flex justify-content-center align-items-center">
      
        <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center flex-column">
        <Bounce top>
          <div className="w-75 text-center">
            <h3>Drop Me Message</h3>
            <p className="">
              You can contact me at the places mentioned social media accounts.
              I will try to get back to you as fast as I can.
            </p>

            <form
              className="d-flex flex-column justify-content-center align-items-center  p-2 "
              onSubmit={handleSubmit}
            >
              <div className="d-lg-flex justify-content-between  w-100 ">
                <div className="form-floating mb-2   me-1 w-100 ">
                  <input
                    type="text"
                    className="form-control  fields"
                    id="firstname"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                  />
                  <label for="firstname">FirstName</label>
                </div>
                <div className="form-floating mb-2   w-100 ">
                  <input
                    type="text"
                    className="form-control fields w-100"
                    id="lastname"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                  />
                  <label for="lastname">LastName</label>
                </div>
              </div>
              <div className="form-floating mb-2   w-100 ">
                <input
                  className="form-control  w-100 fields"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  type="email"
                  name="email"
                  required
                />
                <label for="email">Enter email</label>
              </div>
              <div className="form-floating mb-2   w-100 ">
                <input
                  type="text"
                  className="form-control fields  w-100"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  name="subject"
                  required
                />
                <label for="subject">Subject</label>
              </div>
              <div class="form-floating mb-4 w-100  ">
                <textarea
                  className="form-control fields "
                  style={{ height: "150px" }}
                  id="comment"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  type="text"
                  name="Message"
                  requiredx
                ></textarea>
                <label for="comment">Message</label>
              </div>

              <button type="submit" className="submit-btn w-100 pb-2">
                Submit
              </button>
            </form>
          </div>
          </Bounce>
        </div>
        
      </div>
      
      <div className="pg-footer mt-5">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className=" row p-5">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      {" "}
                      <img
                        src="https://ksr-ugc.imgix.net/assets/009/396/269/4142aff4c50af167caada9c40faadfa7_original.png?ixlib=rb-4.1.0&w=338&h=338&fit=crop&v=1463487975&auto=format&frame=1&q=92&s=7c2f852e38901e676cdba88fc956c5b2"
                        width="90"
                      />{" "}
                    </div>
                    <div>
                      <span style={{ fontSize: "20px" }}>amid</span>{" "}
                    </div>
                   
                  </div>
                 
                 
                </a>
                <Bounce left>
                <div className=" w-100 d-flex justify-content-center flex-column ms-lg-5 ps-lg-5">
               <div className="d-flex mb-3" >
                <div id="diamond" ><LocationOnIcon sx={{marginTop:"3px" }}/></div>
                <div className="ms-lg-4 ms-md-2 fonts">RYK,Punjab Pakistan</div>
               </div>
               <div className="d-flex d-md-flex mb-3">
                <div id="diamond"><PhoneCallbackIcon sx={{marginTop:"4px"}}/></div>
                <div className="ms-lg-4 ms-md-2 fonts">+923342442412</div>
               </div>
               <div className="d-flex  ">
                <div id="diamond"><InboxIcon sx={{marginTop:"4px"}}/></div>
                <div className="ms-lg-4 ms-md-2 fonts "><p className="w-75">HamidOwaisi@gmail.com</p></div>
               </div>
                    </div>
                    </Bounce>
              </div>
            </div>
            <Bounce  top>
            <div className=" col-lg-4 col-md-6  d-flex justify-content-start">
              <div className="footer-menu ms-4">
                <h2 className="footer-menu-name mt-5"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      Home
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      About
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Services</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Experience</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Projects</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            </Bounce>
            <Bounce right>
            <div className="col-lg-4   mt-4 col-md-6 d-flex justify-content-start  flex-column align-items-start">
              <div className="mt-5 ms-4"> 
                <h4>Follow us</h4>
                <ul className="nav d-flex justify-content-between  ">
                  <li className="icons-nav nav-item me-2">
                   <FacebookIcon className="s-icons " />
                  </li>
                  <li className="icons-nav nav-item me-2">
                    <InstagramIcon className="s-icons " />
                  </li>
                  <li className="icons-nav nav-item me-2">
                    <TwitterIcon className="s-icons " />
                  </li>
                  <li className="icons-nav nav-item">
                    <MailOutlineIcon className="s-icons " />
                  </li>
                </ul>
              </div>
              <div className="mt-3 ms-4">
                <h4 className=""> Subscribe</h4>
               
                <div className="custom-search ">
                  <input
                    type="text"
                    className="custom-search-input"
                    placeholder="Enter your email"
                  />
                  <button className="custom-search-botton " type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            </Bounce>
           </div>
           
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#" target="_self">
                  CopyRight ©2020. | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
