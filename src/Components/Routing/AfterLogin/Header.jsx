import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
        <div >
        <Nav defaultActiveKey="/home" as="ul" className="w-full flex justify-evenly bg-slate-400 p-2 border font-bold text-2xl" >
        <Nav.Item as="li">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link to="/about">About</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link to="/setting">Setting</Link>
        </Nav.Item>
      </Nav>
        </div>

    </div>
  );
};

export default Header;
