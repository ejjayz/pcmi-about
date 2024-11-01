import { useState } from 'react';
import Button from '../components/Button.jsx';
import Clients from './Clients'; // Import the Clients component

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pcminfanta@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/pcmi-logo.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Who we are?</p>
              <p className="grid-subtext">
                Pag-ibig Christian Ministries Infanta Quezon is a local branch of the respected Pag-ibig Christian Ministries, originally founded in Biñan Laguna. We are a Full-Gospel and Bible-based church whose mission is to fulfill God's Great Commission. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/pcmi1.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext mb-8">Gathering Schedules</p>
              <p className="grid-subtext mb-2 mt-4 ml-8">
                • Sunday Worship Service - 9 AM | IN-PERSON
              </p>
              <p className="grid-subtext mb-2 ml-8">
                • Located at Purok Langka Brgy. Binulasan, Infanta, Quezon
              </p>
              <p className="grid-subtext mb-2 ml-8">
                • Youth Fellowship (Every First Sunday of the Month)
              </p>
              <p className="grid-subtext mb-4 ml-8">
                • Kamustahan 6PM | ONLINE, Every Saturday
              </p>
            </div>
          </div>
        </div>
       
        {/* Insert the Clients component here */}
        <div className="xl:col-span-2 xl:row-span-3">
          <Clients /> {/* This will render the Church Leadership section */}
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img
              src="pic/contact1-unscreen.gif"
              alt="grid-4"
              style={{ width: '50%', height: 'auto' }}
              className="md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Us</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">pcminfanta@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;