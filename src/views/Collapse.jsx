import { useState } from "react";
import iconBottom from "../assets/arrow-bottom.svg";
import iconTop from "../assets/arrow-top.svg";
import "./globals.css";

const Collapse = () => {
  const [active, setActive] = useState(false);
  const handleContent = () => setActive(!active);

  return (
    <div
      className={`container ${active ? "visible" : ""}`}>
      <div className="sec-title">
        <h3 className="title">título 1</h3>
        <img
          src={active ? iconTop.src : iconBottom.src  }
          alt="icon arrow"
          width={20}
          height={20}
          className="icon"
          onClick={handleContent}
        />

      </div>
      <div className="content">Este es mi contenido</div>
    </div>
  );
};

export default Collapse;
