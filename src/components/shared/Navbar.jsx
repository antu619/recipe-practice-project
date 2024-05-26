import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user);
  const handleLogout = async () => {
    await signOut();
  };

  const menu = (
    <>
      <li>
        <NavLink to={"/allrecipes"}>All Recepies</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      {user?.email ? (
        <li>
          <NavLink to={"/dashboard"}>
            Dashboard
          </NavLink>
        </li>
      ) : (
        <div></div>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            {menu}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl text-rose-600 font-semibold">
          Recipes
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {menu}
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn btn-neutral w-28">
            Login
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          {user?.photoURL ? (
              <img className="w-12 border-2 rounded-full" src={user?.photoURL} />
            ) : (
              <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content border-2 rounded-full w-12">
                <span>UI</span>
              </div>
            </div> 
            )}
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
