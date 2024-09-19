import React from "react";


function Contact(){//this code from web3forms for submitting the form details to my email id
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9c478c6a-c18f-4a77-92f5-35a668d183e1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return(
        <div className="Contact">
             <div className="contact-title">
            <h4>Contact us</h4>
            <h2>Get in touch</h2>
            </div>
            <div className="contact-container">
        <div className="contact-content">
            <h3>Send us a message</h3>
            <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and
             suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li>edukun@study.com</li>
                <li>+5677989899</li>
                <li>45 kev, Miami
                , United States</li>
            </ul>
        </div>
        <div className="contact-form">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input placeholder="enter your full name" type="text" name="name"/>
                <label>Phone NO.</label>
                <input placeholder="enter your phone no." type="tel" name="phone"/>
                <label>Email-id</label>
                <input placeholder="enter your email-id" type="email" name="phone"/>
                <label>Message</label>
                <textarea name="message" type="text" rows="4" placeholder="enter your message"></textarea>
                <button className="prog-btn">Submit</button> 
                <span>{result}</span> 
            </form>

        </div>
        </div>    
        </div>

    );

}




export default Contact;