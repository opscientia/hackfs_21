import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <p />
        <p>
          <div className="user">
          <span>Nickname</span>
          <span>
            <Image 
            alt="avatar"
            src="/headshot.png"
            objectFit="fill"
            quality={100}
            width={50}
            height={50}
            className="border border-gray-200 shadow-md rounded-md cursor  
              pointer p-2"
          />
          </span>
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
          border-radius: 2rem;
          height: 2.2rem;
          margin-left: auto; 
          margin-right: 0;
          background-size: cover;
        }

        .avatar {
          vertical-align: middle;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        // .avatar {
        //   border-radius: 2rem;
        //   float: left;
        //   height: 2.2rem;
        //   width: 2.2rem;
        //   background-color: white;
        //   background-size: cover;
        //   border: 2px solid #ddd;
        // }

        .span{
          height:2rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
