import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Connect() {

  const userValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required()
  });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
    };

    console.log(formData);

    if (!formData.name || !formData.email) {
      toast.error("Name and email are required");
      return;
    }

    try {
      await userValidation.validate(formData, { abortEarly: false });
      console.log("Form is valid:", formData);
  
      await emailjs.sendForm(
        "service_7gxs5sf",
        "template_c24o00b",
        form.current,
        "DuOtFHeSDVRI9FibR"
      );
      toast.success("Send succefully!");
      console.log("SUCCESS!");
      console.log("message sent");
    } catch (validationError) {
      console.error("Validation error:", validationError.errors)
    } 
  };

  const { pending } = useFormStatus();

  return (
    <div className="container">
       <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="user_name"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="exampleInputEmail1">Email<span className="text-danger">*</span> </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="user_email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message:</label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button  disabled={pending} type="submit" value="Send" className="btn btn-primary my-3">
        {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Connect;
