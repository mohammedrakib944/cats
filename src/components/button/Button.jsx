import "./button.css";

const Button = ({ text, fonts }) => {
  return (
    <button className={fonts ? "Cbutton alsoFonts" : "Cbutton"}>{text}</button>
  );
};

export default Button;
