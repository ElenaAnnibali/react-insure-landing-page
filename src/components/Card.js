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
  }

  .bgWork {
    background: url('/images/bg-pattern-how-we-work-mobile.svg');
    position: absolute;
    width: 176px;
    height: 317px;
    left: 151px;
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
