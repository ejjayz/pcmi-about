import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://www.chatbase.co/embed.min.js";
    script1.async = true;
    script1.setAttribute('chatbotId', '1pinMRw1TkrVsdpf5idKg');
    script1.setAttribute('domain', 'www.chatbase.co');
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "1pinMRw1TkrVsdpf5idKg",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    <div></div>
  );
};

export default Chatbot;
