/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardStyle = css`
  width: 327px;
  height: 344px;
  background-color: #2d2640;
  position: absolute;
  left: 24px;
  top: 2359px;
  text-align: center;

  h2 {
    position: absolute;
    top: 36px;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #fafafa;
  }

  button {
    position: absolute;
    width: 160px;
    height: 40px;
    top: 251px;
    left: 82px;
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

  button:hover {
    background-color: #fafafa;
    color: #2d2640;
    border: 2px solid #2d2640;
  }

  .bgWork {
    background: url('/images/bg-pattern-how-we-work-mobile.svg');
    position: absolute;
    width: 176px;
    height: 317px;
    left: 151px;
  }

  @media (min-width: 376px) {
    position: absolute;
    width: 1111px;
    height: 250px;
    left: 164px;
    top: 1632px;

    h2 {
      position: absolute;
      width: 354px;
      height: 88px;
      left: 78px;
      top: 72px;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 44px;
      /* or 110% */
      text-align: left;
      margin: 0;

      color: #ffffff;
    }

    button {
      position: absolute;
      left: 880px;
      top: 103px;
      z-index: 2;
    }

    .bgWork {
      background: url('/images/bg-pattern-how-we-work-desktop.svg');
      background-repeat: no-repeat;

      position: absolute;
      left: 688px;
      right: 0;
      top: 0;
      bottom: 0;
      width: 424px;
      height: 250px;
      z-index: 1;
    }
  }
`;

export default function Card() {
  return (
    <div css={cardStyle}>
      <h2>Find out more about how we work</h2>
      <button>how we work</button>
      <div className="bgWork" />
    </div>
  );
}
