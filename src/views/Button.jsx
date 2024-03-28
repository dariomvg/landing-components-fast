import "./globals.css";

const Button = () => {

  return (
    <button
      onClick={() => alert("My button")}
      className="button">
      Click here
    </button>
  );
};

export default Button;
