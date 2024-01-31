import React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./Contact.css";
const Contact = () => {
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
      style={{ backgroundColor: "rgba(5, 8, 22)" ,overflow:"hidden" }}
    >
      <div className="row ">
        <div className="col-12   d-flex justify-content-center align-items-center flex-column">
          <h3>Drop Me Message</h3>
          <p className="w-50 text-center">
            You can contact me at the places mentioned social media accounts. I
            will try to get back to you as fast as I can.
          </p>

          <Box
            component="form"
            Validate
            autoComplete="On"
            className=" d-flex justify-content-center align-items-center flex-column"
            style={{
              minWidth: "40vw",
            }}
          >
            <div className=" d-lg-flex justify-content-lg-around  align-items-center mb-2   w-100">
              <CssTextField
                className="me-2 w-100 me-2"
                label="FirstName"
                id="custom-css-outlined-input"
                InputLabelProps={{ style: { color: "white" } }}
              />
              <CssTextField
                label="LastName "
                className="w-100"
                id="custom-css-outlined-input"
                InputLabelProps={{ style: { color: "white" } }}
              />
            </div>

            <CssTextField
              label="Email"
              id="custom-css-outlined-input"
              className="w-100 mb-2"
              InputLabelProps={{ style: { color: "white" } }}
            />

            <CssTextField
              label="Subject"
              id="custom-css-outlined-input"
              className="w-100 5 mb-2"
              InputLabelProps={{ style: { color: "white" } }}
            />

            <Textarea
              slots={{ textarea: InnerTextarea }}
              slotProps={{ textarea: { placeholder: "Type here....." } }}
              sx={{ borderRadius: "6px" }}
              className="w-100 mb-2"
              style={{
                height: "150px",
                color: "white",
                backgroundColor: "rgba(5, 8, 22)",
              }}
            />
            <button className=" submit-btn w-100">Submit</button>
          </Box>
        </div>
      </div>
      <div className="row foot mt-3">
        <div className="col-lg-12 col-12 pt-5 pb-3 px-4 d-lg-flex justify-content-between align-items-end">
          <div className=" ms-5 d-flex align-items-end">
            <p>Copyright © 2024 Hamid Owaisi</p></div>
          <div>
            <ul class="nav ms-5">
              <li class="nav-item me-2">
                <a class="nav-link active icons-nav" aria-current="page" href="#">
                  <FacebookIcon className="s-icons"/>
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link icons-nav" href="#">
                  <InstagramIcon className="s-icons"/>
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link icons-nav
                " href="#">
                  <TwitterIcon className="s-icons"/>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link icons-nav" href="#">
                  <MailOutlineIcon className="s-icons"/>
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
