/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyle = css`
  position: absolute;
  width: 100%;
  height: 1026px;
  left: 0px;
  top: 2825px;
  background-color: #fafafa;

  a {
    cursor: pointer;
  }

  .bgFooter {
    background: url('/images/bg-pattern-footer-mobile.svg');
    width: 100%;
    height: 173px;
  }

  .footerIcon {
    background: url('/images/logo.svg');
    position: absolute;
    width: 112px;
    height: 18px;
    top: 89px;
    left: 131px;
  }

  .facebook {
    background: url('/images/icon-facebook.svg');
    position: absolute;
    width: 24px;
    height: 24px;
    top: 139px;
    left: 116px;
  }

  .twitter {
    background: url('/images/icon-twitter.svg');
    position: absolute;
    width: 24px;
    height: 20px;
    top: 139px;
    left: 156px;
  }

  .pinterest {
    background: url('/images/icon-pinterest.svg');
    position: absolute;
    width: 24px;
    height: 24px;
    top: 139px;
    left: 196px;
  }

  .instagram {
    background: url('/images/icon-instagram.svg');
    position: absolute;
    width: 24px;
    height: 24px;
    top: 139px;
    left: 236px;
  }

  .footerLine {
    position: absolute;
    width: 330px;
    top: 203px;
    left: 27.5px;
    border: 1px solid #e4e4e4;
  }

  .footerInfo {
    margin-top: 50px;

    h4 {
      text-transform: uppercase;
      font-family: 'Karla';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 44px;
      /* identical to box height, or 275% */

      text-align: center;

      color: #837d87;
    }

    p {
      text-transform: uppercase;
      font-family: 'Karla';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      /* or 162% */

      text-align: center;

      color: #000000;
    }
  }

  @media (min-width: 376px) {
    position: absolute;
    height: 394px;
    top: 2016px;
    width: 1440px;
    background-color: #fafafa;

    .bgFooter {
      background: url('/images/bg-pattern-footer-desktop.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 528px;
      height: 231px;
      top: 0;
    }

    .footerIcon {
      position: absolute;
      top: 66px;
      left: 164px;
    }

    .facebook,
    .twitter,
    .pinterest,
    .instagram {
      top: 61px;
      left: 1136px;
    }

    .twitter {
      left: 1178px;
    }

    .pinterest {
      left: 1218px;
    }

    .instagram {
      left: 1258px;
    }

    .footerLine {
      position: absolute;
      width: 1116px;
      left: 164px;
      top: 121px;
    }

    .footerInfo {
      h4,
      p {
        text-align: left;
      }
    }
    .ourCompany {
      position: absolute;
      left: 164px;
      top: 82px;
    }

    .helpMe {
      position: absolute;
      left: 454px;
      width: 120px;
      height: 173px;
      top: 82px;
    }

    .contact {
      position: absolute;
      width: 76px;
      height: 147px;
      left: 746px;
      top: 82px;
    }

    .others {
      position: absolute;
      width: 74px;
      height: 147px;
      left: 994px;
      top: 82px;
    }
  }
`;

export default function Footer() {
  return (
    <div css={footerStyle}>
      <div className="bgFooter" />
      <div className="footerIcon" />
      {/* icons */}
      <div className="socialMediaIcons">
        <div className="facebook" />
        <div className="twitter" />
        <div className="pinterest" />
        <div className="instagram" />
      </div>
      {/* line */}
      <div className="footerLine" />
      <div className="footerInfo ourCompany">
        <h4>our company</h4>
        <div className="layout">
          <p>
            <a>how we work </a>
            <br />
            <a>why insurance? </a>
            <br />
            <a>check price</a> <br />
            <a>reviews</a>
          </p>
        </div>
      </div>
      <div className="footerInfo helpMe">
        <h4>help me</h4>
        <p>
          <a>faq</a> <br />
          <a>terms of use</a> <br />
          <a>privacy policy</a> <br />
          <a>cookies</a>
        </p>
      </div>
      <div className="footerInfo contact">
        <h4>contact</h4>
        <p>
          <a>sales</a> <br />
          <a>support</a> <br />
          <a>live chat</a>
        </p>
      </div>
      <div className="footerInfo others">
        <h4>others</h4>
        <p>
          <a>careers</a> <br />
          <a>press</a> <br />
          <a>licenses</a>
        </p>
      </div>
    </div>
  );
}
