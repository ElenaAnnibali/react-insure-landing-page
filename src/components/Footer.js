/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyle = css`
  position: absolute;
  width: 375px;
  height: 1026px;
  left: 0px;
  top: 2825px;
  background-color: #fafafa;

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
`;

export default function Footer() {
  return (
    <div css={footerStyle}>
      <div className="bgFooter" />
      <div className="footerIcon" />
      {/* icons */}
      <div className="facebook" />
      <div className="twitter" />
      <div className="pinterest" />
      <div className="instagram" />
      {/* line */}
      <div className="footerLine" />
      <div className="footerInfo">
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
      <div className="footerInfo">
        <h4>help me</h4>
        <p>
          <a>faq</a> <br />
          <a>terms of use</a> <br />
          <a>privacy policy</a> <br />
          <a>cookies</a>
        </p>
      </div>
      <div className="footerInfo">
        <h4>contact</h4>
        <p>
          <a>sales</a> <br />
          <a>support</a> <br />
          <a>live chat</a>
        </p>
      </div>
      <div className="footerInfo">
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
