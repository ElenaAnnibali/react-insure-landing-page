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
  }

  .menu {
    background: url('/images/icon-hamburger.svg');
    position: absolute;
    width: 32px;
    height: 32px;
    left: 320px;
    top: 24px;
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
