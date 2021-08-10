import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import React from 'react'
import { useOnboard } from "use-onboard";

const Header = () => {
  const [session, loading] = useSession();
const {
  selectWallet,
  address,
  isWalletSelected,
  disconnectWallet,
  balance
} = useOnboard();
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">
            <span style={{ color: '#f06292' }}>O</span>
            <span style={{ color: '#29b6f6' }}>p</span>
            <span style={{ color: '#8bc34a' }}>S</span>
            <span style={{ color: '#f06292' }}>c</span>
            <span style={{ color: '#29b6f6' }}>i</span>
          </a>
        </Link>

        <p>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <button className="signInButton">Sign in</button>
            </a>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className="avatar"
                  />
                </a>
              </Link>
              <span className="email">{session.user.email}</span>
              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <button className="signOutButton">Sign out</button>
              </a>
            </>
          )}
      {
        <button className="signOutButton"
          onClick={async () => {
            if (isWalletSelected) disconnectWallet();
            else await selectWallet();
          }}
        >
          {isWalletSelected ?   "Disconnect Wallet" : "Connect Wallet"}
        </button>
      }
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

        .logo {
          text-decoration: none;
          font-size: 1.95rem;
          font-weight: 620;
          padding: 0.2rem 4.25rem;

        }

        .avatar {
          border-radius: 2rem;
          float: left;
          height: 2.2rem;
          width: 2.2rem;
          background-color: white;
          background-size: cover;
          border: 2px solid #ddd;
        }

        .email {
          margin-right: 1rem;
          margin-left: 0.25rem;
          font-weight: 600;
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
        .span{
          height:2rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
