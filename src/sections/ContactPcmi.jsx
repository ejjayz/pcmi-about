import React, { useState } from 'react';

const ContactPcmi = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('09982238464');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <>
      <div className="xl:col-span-1 xl:row-span-2 mb-10 mt-0">
        <div className="grid-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="pic/contact1-unscreen.gif"
            alt="grid-4"
            style={{ width: '55%', height: 'auto' }}
            className="md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
          />
          <div className="space-y-2">
            <p className="contact text-center">Contact Us</p>
            <div className="copy-container" onClick={handleCopy}>
              <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">(+63) 998-223-8464</p>
            </div> {/* Closing div for copy-container */}
          </div>
        </div>
      </div>
      <p className="head-text">Be a part of the Pcmi Youth Fam</p> 
    </>
  );
};

export default ContactPcmi;