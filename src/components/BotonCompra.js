import React from 'react';

const WhatsappChatButton = ({ tipocompra }) => {
  const handleButtonClick = () => {
    const message= `Hola panadería Oblitas, quiero pedir un ${tipocompra}`;
    const whatsappLink = `https://wa.me/+51941939547?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <button className='border border-white bg-white text-black mx-4 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'
    onClick={handleButtonClick} >
      Delivery Gratis
    </button>
  );
};

export default WhatsappChatButton;
