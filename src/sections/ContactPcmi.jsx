import React, { useState } from 'react';

const ContactPcmi = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pcminfanta@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="grid-subtext text-center text-2xl font-semibold">Contact Us</p>
      <div className="copy-container cursor-pointer" onClick={handleCopy}>
        <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">pcminfanta@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactPcmi;