import { Form } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  return (
    <Form method="POST">
      <div className="input-group">
        <input
          type="text"
          name="full-name"
          id="full-name"
          placeholder="Name *"
        />
      </div>
      <div className="input-group">
        <input type="email" name="email" id="email" placeholder="Email *" />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Your Subject *"
        />
      </div>
      <div className="input-group">
        <textarea
          name="message"
          id="message"
          placeholder="Your Message *"
        ></textarea>
      </div>
      <div className="input-group">
        <button className="theme-btn submit-btn" type="submit">
          Send Message
        </button>
      </div>
    </Form>
  );
};

export const contactFormAction = async (data) => {
  try {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);

    // Send email via EmailJS
    await emailjs.send(
      "service_h3jgv3g", // Replace with your EmailJS Service ID
      "template_06qpa2c", // Replace with your Template ID
      postData, // Form data as an object
      "zYx7dLJbEiF6hxc58" // Replace with your Public Key
    );
    alert("Mail Sent");
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    alert("Email sending failed:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};

export default ContactForm;
