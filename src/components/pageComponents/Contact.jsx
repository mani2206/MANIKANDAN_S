// import React, { useRef ,useState} from "react";
// import emailjs from "@emailjs/browser";
// import * as yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const userValidation = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().email().required(),
//   });

//   const form = useRef();
//   const [FormData,setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     let formData = {
//       name: e.target[0].value,
//       email: e.target[1].value,
//     };

//     console.log(formData);

//     if (!formData.name || !formData.email) {
//       toast.error("Name and email are required");
//       return;
//     }

//     try {
//       await userValidation.validate(formData, { abortEarly: false });
//       console.log("Form is valid:", formData);

//       await emailjs.sendForm(
//         "service_7gxs5sf",
//         "template_c24o00b",
//         form.current,
//         "DuOtFHeSDVRI9FibR"
//       );
//       setFormData({
//         name: "",
//         email: "",
//       });
//       toast.success("Send succefully!");
//       console.log("SUCCESS!");
//       console.log("message sent");
//     } catch (validationError) {
//       console.error("Validation error:", validationError.errors);
//     }
//   };

//   return (
//     <>
//       <div className=" contact">
//         <ToastContainer />

//         <h4 className="text-dark text-center ">CONTACT</h4>
//         <div className="line_contact text-center"></div>
//         <p className="text-center contact-heading">
//           "I will get back to u ASAP by submitting the form below"
//         </p>
//         <div
//           className="contacts d-md-flex justify-content-around align-items-center"
//           id="contact"
//         >
//           <div>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1" className="fw-bold pb-2">
//                   Name<span className="text-danger">*</span>{" "}
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   name="user_name"
//                   placeholder="Enter Your Name"
//                 />
//                 <div className="text-danger error"></div>
//               </div>
//               <div className="form-group py-3">
//                 <label htmlFor="exampleInputEmail1" className="fw-bold pb-2">
//                   E-mail<span className="text-danger">*</span>{" "}
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   name="user_email"
//                   placeholder="Enter Your Email"
//                 />
//                 <div className="text-danger error"></div>
//               </div>
//               <div className="form-group">
//                 <label
//                   htmlFor="exampleFormControlTextarea1"
//                   className="fw-bold pb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   placeholder="Text Here....."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 value="Send"
//                 className="btn btn-primary my-3"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//           <img
//             className=" contact_shadow"
//             src={"../.././images/blog-3.jpeg"}
//             alt="React Image"
//             data-aos="zoom-in"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import * as yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const userValidation = yup.object().shape({
//     name: yup.string().required("Name is required"),
//     email: yup
//       .string()
//       .email("Invalid email address")
//       .required("Email is required"),
//   });

//   const [value,setValue]= useState({user_name:"",user_email:"",message:""})
//   const [error,setError]= useState({})
   
//   const handleInput = (e)=>{
//     const { name, value } = e.target;
//     setValue((prevValue) => ({
//       ...prevValue,
//       [name]: value,
//     }));
//     }

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     if(value.user_name ===""){
//       error.name = "Name is required"
//     }
//     setError(value);

//   }



//   const form = useRef();

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     let formData = {
//       name: e.target[0].value,
//       email: e.target[1].value,
//       message:e.target[2].value
//     };

//     console.log(formData);

//     if (!formData.name || !formData.email) {
//       toast.error("Name and email are required");
//       return;
//     }

//     try {
//       await userValidation.validate(formData, { abortEarly: false });

//       await emailjs.sendForm(
//         "service_7gxs5sf",
//         "template_c24o00b",
//         form.current,
//         "DuOtFHeSDVRI9FibR"
//       );

//       toast.success("Send successfully!");
//       e.target.reset();
//     } catch (validationError) {
//       console.error("Validation error:", validationError.errors);
//     }
//   };

//   return (
//     <>
//       <div className=" contact">
//         <ToastContainer />

//         <h4 className="text-dark text-center d-flex justify-content-center">
//           CONTACT
//           <p className="m-0 px-1" style={{ color: "#e12c5b" }}>
//              ME
//           </p>
//           </h4>
//         <div className="line_contact text-center"></div>
//         <p className="text-center contact-heading">
//           "I will get back to u ASAP by submitting the form below"
//         </p>
//         <div
//           className="contacts d-md-flex justify-content-around align-items-center"
//           id="contact"
//         >
//           <div>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="form-group">
//                 <label htmlFor="name" className="fw-bold pb-2">
//                   Name<span className="text-danger">*</span>{" "}
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   name="user_name"
//                   onChange={handleInput}
//                   placeholder="Enter Your Name"
//                 />
//                 {error.user_name && <p className="text-danger">{error.user_name}</p>}
//               </div>
//               <div className="form-group py-3">
//                 <label htmlFor="email" className="fw-bold pb-2">
//                   E-mail<span className="text-danger">*</span>{" "}
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   onChange={handleInput}
//                   name="user_email" 
//                   placeholder="Enter Your Email"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message" className="fw-bold pb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   className="form-control"
//                   id="message"
//                   rows="3"
//                   onChange={handleInput}
//                   value={FormData.message}
//                   placeholder="Text Here....."
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary my-3" onSubmit={handleSubmit}>
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//           <img
//             className=" contact_shadow"
//             src={"../.././images/blog-3.jpeg"}
//             alt="React Image"
//             data-aos="zoom-in"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const userValidation = yup.object().shape({
    user_name: yup.string().required("Name is required*"),
    user_email: yup.string().email("Invalid email address*").required("Email is required*"),
  });

  const form = useRef();
  const [value, setValue] = useState({ user_name: "", user_email: "", message: "" });
  const [error, setError] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await userValidation.validate(value, { abortEarly: false });

      await emailjs.sendForm(
        "service_7gxs5sf",
        "template_c24o00b",
        form.current,
        "DuOtFHeSDVRI9FibR"
      );

      toast.success("Send successfully!");
      form.current.reset();
      setValue({ user_name: "", user_email: "", message: "" });
      setError({});
    } catch (validationError) {
      const errors = {};
      validationError.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setError(errors);
    } finally {
      setSubmitting(false);
    }
    
  };

  return (
    <>
      <div className="contact">
        <ToastContainer />

        <h4 className="text-dark text-center d-flex justify-content-center">
          CONTACT<span className="text-danger px-1">ME </span>
        </h4>
        <div className="line_contact text-center"></div>
        <p className="text-center contact-heading">
          "I will get back to you ASAP by submitting the form below"
        </p>

        <div className="contact-cards">
           <div className="contact-card1">
              <img className="email"src={"../.././images/email.png"} alt="email"/>
              <a href="mailto:mani220696@gmail.com ? subject = Happy day" className="text-decoration-none text-dark text-lowercase">mani220696@gmail.com</a>
           </div>
           <div className="contact-card2">
              <img className="mobile"src={"../.././images/mobile.png"} alt="phone"/>
              <a href="tel: +919047578635" className="text-decoration-none  text-dark">+91-9047578635</a>
           </div>
        </div>
        <div
          className="contacts d-md-flex justify-content-around align-items-center"
          id="contact"
        >
          <div className="animates fadeInUps">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="fw-bold pb-2">
                  Your Full Name<span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  onChange={handleInput}
                  value={value.user_name}
                  placeholder="Enter Your Name"
                />
                {error.user_name && <p className="text-danger m-0"  style={{fontSize:"15px"}}>{error.user_name}</p>}
              </div>
              <div className="form-group py-3">
                <label htmlFor="email" className="fw-bold pb-2">
                  Your Email<span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  onChange={handleInput}
                  value={value.user_email}
                  placeholder="Enter Your Email"
                />
                {error.user_email && <p className="text-danger m-0" style={{fontSize:"15px"}}>{error.user_email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message" className="fw-bold pb-2">
                  Anything you'd like to say
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="3"
                  onChange={handleInput}
                  value={value.message}
                  placeholder="Text Here....."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-3"  disabled={submitting}>
              {submitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
          <img
            className="contact_shadow"
            src={"../.././images/blog-3.jpeg"}
            alt="React Image"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

