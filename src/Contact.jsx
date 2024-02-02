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
import "./Contact.css";
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
      className="container-field text-white pt-3 mb-0 contact"
      style={{ backgroundColor: "rgba(5, 8, 22)", overflow: "hidden" }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center flex-column">
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
        </div>
      </div>
     <div className="pg-footer mt-5">
      <footer className="footer">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <div className="d-flex justify-content-between align-items-center">
              <div>
                {" "}
                <img
                  src="https://ksr-ugc.imgix.net/assets/009/396/269/4142aff4c50af167caada9c40faadfa7_original.png?ixlib=rb-4.1.0&w=338&h=338&fit=crop&v=1463487975&auto=format&frame=1&q=92&s=7c2f852e38901e676cdba88fc956c5b2"
                  width="60"
                />{" "}
              </div>
              <div>
                <span style={{fontSize:"20px"}}>amid</span>{" "}
              </div>
            </div>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Company</h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact</a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">News</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="#">Privacy Notice</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" className="footer-menu-list">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Home</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">About</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Services</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Experience</a>
              </li>
              <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                <a href="#">Projects</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
            <p className="footer-call-to-action-description"> Have a support question?</p>
            <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
          </div>
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> You Call Us</h2>
            <p className="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
          </div>
        </div>
          <div className="footer-social-links">
            <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
              <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
            </svg>
            <a className="footer-social-link linkedin" href="#" target="_blank">
              <span className="hidden-link-text">Linkedin</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30">
              <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
            </svg>
            </a>
            <a className="footer-social-link twitter" href="#" target="_blank">
              <span className="hidden-link-text">Twitter</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
              <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
            </svg>
            </a>
            <a className="footer-social-link youtube" href="#" target="_blank">
            <MailOutlineIcon className="s-icons" />
             
            
            </a>
            <a className="footer-social-link github" href="#" target="_blank">
            <FacebookIcon className="s-icons" />
         
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self"> ©2020. | Designed By: Sineha Kataria. | All rights reserved. </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Contact;
