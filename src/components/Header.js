/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: #fafafa;

  img {
    position: absolute;
    left: 24px;
    top: 32px;

    @media (min-width: 376px) {
      position: absolute;
      width: 112px;
      height: 18px;
      left: 168px;
      top: 32px;
    }
  }

  .menu {
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
  }
`;

export default function Header() {
  return (
    <div css={headerStyle}>
      <img src="/images/logo.svg" alt="logo" />
      <div className="menu" />
    </div>
  );
}
