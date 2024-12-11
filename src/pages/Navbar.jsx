import "./Navbar.css"; // Import the CSS file
import UserForm from "./UserForm";
const Navbar = () => {
  return (<>
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Instagram</div>
        <div className="menu">
          <span>❤️</span>
          <span>👤</span>
        </div>
       
      </nav>
    </div>
    <UserForm/>
   
  </>
  );
};

export default Navbar;
