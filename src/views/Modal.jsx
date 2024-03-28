import { useState } from "react";
import "./globals.css";

const Modal = () => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <button className="btn-modal" onClick={handleModal}>
        este es mi modal
      </button>
      <section className={`container-modal ${active ? "active" : ""}`}>
        <div className="modal">
          <button onClick={handleModal} className="close-modal">X</button>
          <p>
            Hola!! este es el modal...
          </p>
        </div>
      </section>
    </>
  );
};

export default Modal;
