
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_n8brfo6",
      "template_vquagj7",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "17MNa_EjgvseTCVvo"
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      alert("Error sending message");
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <p className="text-slate-400 mt-2">Feel free to send a message anytime.</p>
      </div>

      <form
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto mt-10 bg-[#0B1120] p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-[#0F172A] border border-slate-600 text-white outline-none"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-[#0F172A] border border-slate-600 text-white outline-none"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-[#0F172A] border border-slate-600 text-white outline-none"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg font-medium"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && <p className="text-green-400 text-center">Message sent successfully! ✔</p>}
      </form>
    </section>
  );
};

export default Contact;