import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../../canvas/Earth";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { useRef, useState } from "react";
import "./Contact.css";

//template_romglpe
//service_7194vt9
//_4Yl4WSN-DPrBdAbF
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yogesh",
          from_email: form.email,
          to_email: "yogeshachare3@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="portfolio__contact section__padding">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="portfolio__contact-motion"
      >
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="portfolio__contact-form"
        >
          <label className="portfolio__contact-form-label">
            <span className="portfolio__contact-form-label-text">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="portfolio__contact-form-label-input"
            />
          </label>
          <label className="portfolio__contact-form-label">
            <span className="portfolio__contact-form-label-text">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="portfolio__contact-form-label-input"
            />
          </label>
          <label className="portfolio__contact-form-label">
            <span className="portfolio__contact-form-label-text">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="portfolio__contact-form-label-input"
            />
          </label>

          <button type="submit" className="custom__button-blue buttonSend">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="portfolio__contact-earth"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
