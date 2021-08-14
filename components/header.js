import React from 'react'
import { IconContext } from 'react-icons';
import { FaBeer,FaUserAstronaut } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <nav>
        <p />
        <p>
          <div className="user">
<span className='avatar'>

  <IconContext.Provider value={{ color: "black", className: "react-icons",size:"1.4em",style:{float:"right",transform:"translate(-40%,40%)"}}}>
          <FaUserAstronaut />
</ IconContext.Provider>
</span>
<span className="name" style={{ 
      margin: "auto",
    borderRadius: "0px 6px 6px 0px",
    border: "1px solid #ddd",
    fontFamily: "roboto",
    textShadow: "0px -1px 0px rgba(0,0,0,0.5)",
    verticalAlign:"middle",
    textAlign: "center",
    float: "left",
    }}>&nbsp;&nbsp;Nickname&nbsp;</span>

          </div>
        </p>
      </nav>

      <style jsx>{`
        header {
          border-bottom: 1px solid #ccc;
          background-color: #6b6feg;
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          max-width: 82rem;
          margin: 0 auto;
          background-color: #6b6feg;
          
        }

        .user {
          margin-left: auto; 
          margin-right: auto;
          background-size: cover;
          height: 50px;
          vertical-align: middle;
          boxShadow:  "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",


          
        }
        .avatar {
        border-radius: 2rem;
           float: left;
           height: 2.8rem;
           width: 2.8rem;
           background-color: white;
           background-size: cover;
           border: 2px solid #ddd;
           vertical-align: middle;
           transform: translateY(10%);
          overflow: hidden;
          z-index: -10;

          }
          .name{
            transform: translate(-4%,80%);
            z-index: 10;
            background-color:#f1f1f1;
            position:relative;

          }
 .signInButton,
        .signOutButton {
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .signInButton {
          background-color: #1eb1fc;
        }
        .signInButton:hover {
          background-color: #1b9fe2;
        }
        .signOutButton {
          background-color: #333;
        }
        .signOutButton:hover {
          background-color: #555;
        }
      
      `}</style>
    </header>
  );
};

export default Header;
