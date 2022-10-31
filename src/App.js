/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

const appStyle = css`
  .intro {
    background: url('/images/image-intro-mobile.jpg');
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 451px;
    top: 80px;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 500px;
    background-color: #2d2640;
    color: #fafafa;
    top: 531px;

    h1 {
      position: absolute;
      color: #fafafa;
      text-align: center;
      width: 333px;
      line-height: 44px;
      height: 88px;
      left: 21px;
      top: 99px;
      font-weight: 700;
      font-size: 40px;
    }

    p {
      position: absolute;
      width: 334px;
      height: 117px;
      left: 16px;
      top: 201px;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      text-align: center;
      color: #fafafa;
      font-family: 'Karla-Bold', Georgia, serif;
    }

    .bgLeft {
      background: url('/images/bg-pattern-intro-left-mobile.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 168px;
      height: 165px;
      left: 0px;
      top: 0px;
    }

    .bgRight {
      background: url('/images/bg-pattern-intro-right-desktop.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: 124px;
      height: 330px;
      left: 251px;
      top: 374px;
    }
  }

  .secondContainer {
    position: absolute;
    width: 100%;
    height: 1793px;
    display: flex;

    h3 {
      color: #2c2830;
      position: absolute;
      top: 1219px;
      left: 25px;
      font-weight: 400;
      font-size: 48px;
      line-height: 44px;
      /* identical to box height, or 92% */

      text-align: center;

      color: #2c2830;
    }

    .line {
      position: absolute;
      width: 150px;
      height: 1px;
      left: 122.99px;
      top: 1171px;
      // border: 1px solid #837d87;
      background-color: #9e96c6;
    }

    .firstWrapper {
      position: absolute;
      top: 1350px;
      text-align: center;

      h4 {
        position: absolute;
        left: 86px;
        width: 193px;
        height: 37px;
        margin-top: 118px;
        font-size: 28px;
        font-weight: 400;
      }
      p {
        position: absolute;
        width: 308px;
        height: 74px;
        top: 150px;
        left: 25px;
        font-weight: 700;
        line-height: 24px;
      }

      .snappyIcon {
        background: url('/images/icon-snappy-process.svg');
        width: 86px;
        height: 86px;
        position: absolute;
        left: 140px;
      }
    }

    .secondWrapper {
      position: absolute;
      text-align: center;
      top: 1660px;
      h4 {
        position: absolute;
        width: 241px;
        height: 37px;
        left: 62px;
        margin-top: 118px;
        font-size: 28px;
        font-weight: 400;
      }
      p {
        position: absolute;
        width: 328px;
        height: 74px;
        top: 150px;
        left: 25px;
        font-weight: 700;
        line-height: 24px;
      }
      .priceIcon {
        background: url('/images/icon-affordable-prices.svg');
        width: 86px;
        height: 86px;
        position: absolute;
        left: 140px;
      }
    }

    .thirdWrapper {
      position: absolute;
      text-align: center;
      top: 1968px;
      h4 {
        position: absolute;
        width: 241px;
        height: 37px;
        left: 62px;
        margin-top: 118px;
        font-size: 28px;
        font-weight: 400;
      }
      p {
        position: absolute;
        width: 328px;
        height: 74px;
        top: 150px;
        left: 25px;
        font-weight: 700;
        line-height: 24px;
      }
      .peopleIcon {
        background: url('/images/icon-people-first.svg');
        width: 86px;
        height: 86px;
        position: absolute;
        left: 140px;
      }
    }
  }
`;

function App() {
  return (
    <div css={appStyle}>
      <Header />
      <div className="intro" />
      <div className="container">
        <div className="bgLeft" />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <div className="bgRight" />
      </div>
      <div className="secondContainer">
        <div className="line" />
        <h3>We’re different</h3>
        <div className="firstWrapper">
          <div className="snappyIcon" />
          <h4>Snappy Process</h4>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="secondWrapper">
          <div className="priceIcon" />
          <h4>Affordable Prices</h4>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="thirdWrapper">
          <div className="peopleIcon" />
          <h4>People First</h4>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
