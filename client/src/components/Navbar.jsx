import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h2>WorkoutBuddy</h2>
            </Link>
        </div>
    </header>    
  );
}
