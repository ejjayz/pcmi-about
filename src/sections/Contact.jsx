import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import Button from '../components/Button.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the mobile number matches the pattern
    const mobilePattern = /^(09\d{9})|(\+63\d{10})$/;
    if (!mobilePattern.test(form.mobile)) {
      showAlert({
        show: true,
        text: "Number Format error: Please enter a valid mobile number format: '09XXXXXXXXXX' or '+63XXXXXXXXXXX'.",
        type: 'danger',
      });
      return; // Stop the function if the format is invalid
    }

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Pcmi - Infanta',
        from_mobile: form.mobile,
        to_mobile: '09982238464', // Update to the relevant mobile number
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(
      () => {
        setLoading(false);
        showAlert({
          show: true,
          text: 'Thank you, your message has been sent 😇',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({ name: '', mobile: '', message: '' });
        }, 3000);
      },
      (error) => {
        setLoading(false);
        console.error(error);
        showAlert({
          show: true,
          text: "Sorry, there was a problem receiving your message 😢",
          type: 'danger',
        });
      },
    );
  };

  const handleRedirectClick = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    // Temporarily apply active class
    const appButton = e.currentTarget;
    appButton.classList.add('active');

    // Remove active class after a short delay to return to original size
    setTimeout(() => {
      appButton.classList.remove('active');
    }, 200);

    // Redirect after a delay
    setTimeout(() => {
      window.location.href = "https://pcmi-infanta.vercel.app";
    }, 8000);
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="col-span-1 xl:row-span-4 mb-10">
        <div className="grid-container">
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
            />
          </div>
          <div>
            <p className="grid-headtext">“ I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. ”</p>
            <p className="grid-subtext">— John 16:33</p>
            <Button name="Contact Us" isBeam containerClass="w-full mt-10" />
          </div>
        </div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text mt-3">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            If you have any questions or suggestions, just send us a message. We'll truly appreciate!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex. Juan Dela Cruz"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Mobile Number</span>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex. 09171234567"
                pattern="^(09\d{9})|(\+63\d{10})$"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or questions..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
            <a
              className={`app big gradient-background ${isActive ? 'active' : ''}`}
              href="#"
              onClick={handleRedirectClick}
              style={{ width: 'auto' }}  // Allow auto width to match content size
            >
              {isRedirecting ? (
                <div className="loading-container">
                  <img src="/gif/load.gif" alt="loading" className="loading" />
                </div>
              ) : (
                "Continue to App"
              )}
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;