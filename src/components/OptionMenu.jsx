import { Link } from "react-router-dom";

export function OptionMenu({ title, link }) {
  return (
    <div className="option-menu">
      <Link to={link}>{title}</Link>
    </div>
  );
}
