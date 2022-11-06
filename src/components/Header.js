/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: #fafafa;
  position: sticky;
  z-index: 1000;

  img {
    position: absolute;
    left: 24px;
    top: 32px;
  }

  /* .hamb {
    background: url('/images/icon-hamburger.svg');
    position: absolute;
    width: 32px;
    height: 32px;
    left: 320px;
    top: 24px;

    @media (min-width: 376px) {
      background-color: #fff;
      width: 0;
      height: 0;
    }
  } */

  /* Nav menu */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    position: absolute;
    width: 327px;
    height: 56px;
    left: 24px;
    top: 259px;

    border: 2px solid #fafafa;
    background-color: #2d2640;

    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fafafa;
    text-transform: uppercase;
    cursor: pointer;
  }

  .bgImg {
    background: url('/images/bg-pattern-mobile-nav.svg');
    position: absolute;
    width: 100%;
    height: 219px;
    top: 368px;
  }

  .nav {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 80px;
    background-color: #2d2640;
    overflow: hidden;
  }

  .menu a {
    display: block;

    color: #fafafa;
    font-family: 'Karla';
    font-size: 20px;
    font-weight: 700;
    padding-top: 52px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }
  .menu a:hover {
    background-color: gray;
  }
  .nav {
    max-height: 0;
    transition: max-height 0.5s ease-out;
  }

  /* Menu Icon */
  .hamb {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
  } /* Style label tag */

  .hamb-line {
    background: black;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;

    ::before,
    ::after {
      background: black;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    ::before {
      top: 5px;
    }

    ::after {
      top: -5px;
    }
  } /* Style span tag */

  .hamb-line::before,
  .hamb-line::after {
    background: black;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .hamb-line::before {
    top: 5px;
  }
  .hamb-line::after {
    top: -5px;
  }

  .side-menu {
    display: none;

    :checked ~ nav {
      max-height: 100%;
    }

    :checked ~ .hamb .hamb-line {
      background: transparent;
    }

    :checked ~ .hamb .hamb-line::before {
      transform: rotate(-45deg);
      top: 0;
    }

    :checked ~ .hamb .hamb-line::after {
      transform: rotate(45deg);
      top: 0;
    }
  } /* Hide checkbox */

  /* Toggle menu icon */
  .side-menu:checked ~ nav {
    max-height: 100%;
  }
  .side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
  }
  .side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top: 0;
  }
  .side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (min-width: 376px) {
    width: 1440px;
    z-index: 1;

    img {
      position: absolute;
      width: 112px;
      height: 18px;
      left: 168px;
      top: 32px;
    }

    button {
      position: absolute;
      left: 308px;
      top: 19px;
      width: 144px;
      height: 40px;
      color: #2c2830;
      background: #fafafa;
      border: 2px solid #2c2830;
    }

    button:hover {
      color: #fafafa;
      background: #2c2830;
    }

    .nav {
      max-height: none;
      margin: 0;
      top: 0px;
      position: absolute;
      width: 452px;
      left: 822px;
      background: #fafafa;
      z-index: 2;
    }
    .menu li {
      float: left;
      margin-right: 24px;
    }

    .menu a {
      font-family: 'Karla';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: center;

      color: #837d87;
      position: absolute;
      bottom: 29px;
    }

    .blog {
      position: absolute;
      left: 140px;
      bottom: 29px;
    }

    .account {
      position: absolute;
      left: 208px;
      bottom: 29px;
    }

    .menu a:hover {
      background-color: transparent;
      color: var(--gray);
    }

    .hamb {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <div css={headerStyle}>
      <img src="/images/logo.svg" alt="logo" />
      {/* <div className="hamb" /> */}
      {/* Hamburger icon */}
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line" />
      </label>
      {/* <!-- Menu --> */}
      <nav className="nav">
        <ul className="menu">
          <li>
            <a>how we work</a>
          </li>
          <li>
            <a className="blog">blog</a>
          </li>
          <li>
            <a className="account">account</a>
          </li>
          <li>
            <button>view plans</button>
          </li>
        </ul>
        <div className="bgImg" />
      </nav>
    </div>
  );
}
