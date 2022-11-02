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

    @media (min-width: 376px) {
      background: url('/images/image-intro-desktop.jpg');
      background-repeat: no-repeat;
      // background-size: contain;
      position: absolute;
      width: 540px;
      height: 650px;
      left: 734px;
      top: 185px;
      z-index: 2;
    }
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

    button {
      position: absolute;
      width: 146px;
      height: 40px;
      left: 110px;
      top: 376px;

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
      background: url('/images/bg-pattern-intro-right-mobile.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: 124px;
      height: 330px;
      left: 251px;
      top: 374px;
      z-index: 3;
    }

    @media (min-width: 376px) {
      position: absolute;
      width: 1440px;
      height: 598px;
      left: 0px;
      top: 82px;
      z-index: 1;

      h1 {
        position: absolute;
        width: 472px;
        height: 128px;
        left: 164px;
        top: 126px;
        font-style: normal;
        font-weight: 400;
        font-size: 68px;
        line-height: 64px;
        /* or 94% */
        text-align: left;
      }

      p {
        position: absolute;
        width: 550px;
        height: 80px;
        left: 164px;
        top: 305px;
        text-align: left;
        font-family: 'Karla';
        font-weight: 500;
      }

      .bgLeft {
        background: url('/images/bg-pattern-intro-left-desktop.svg');
        background-repeat: no-repeat;
        position: absolute;
        width: 195px;
        height: 504px;
        left: 0px;
        top: 438px;
      }

      .bgRight {
        background: url('/images/bg-pattern-intro-right-desktop.svg');
        background-repeat: no-repeat;

        position: absolute;
        z-index: 3;
        width: 436px;
        height: 593px;
        left: 1002px;
        top: 7px;
      }

      .button {
        position: absolute;
        width: 146px;
        height: 40px;
        left: 164px;
        top: 423px;
      }

      .desktopLine {
        position: absolute;
        width: 150px;
        left: 164px;
        top: 85px;
        border: 1px solid #fafafa;
        z-index: 2;
        height: 0px;
      }
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

    @media (min-width: 376px) {
      position: absolute;
      width: 100%;
      // height: 1336px;

      .line {
        position: absolute;
        width: 150px;
        height: 0px;
        left: 164px;
        top: 984px;

        border: 1px solid #9e96c6;
      }

      h3 {
        position: absolute;
        width: 315px;
        height: 44px;
        left: 164px;
        top: 1056px;
        font-weight: 400;
        font-size: 48px;
        line-height: 44px;
        /* identical to box height, or 92% */

        text-align: center;

        color: #2c2830;
      }

      .firstWrapper {
        position: absolute;
        top: 1207px;

        h4 {
          position: absolute;
          width: 193px;
          height: 37px;
          left: 164px;
          line-height: 44px;
          text-align: left;
        }

        p {
          left: 164px;
          text-align: left;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* or 150% */
          width: 344px;
          height: 74px;

          color: #837d87;
        }

        .snappyIcon {
          left: 164px;
        }
      }

      .secondWrapper {
        position: absolute;
        top: 1207px;
        left: 545px;

        h4 {
          text-align: left;
          position: absolute;
          width: 241px;
          height: 37px;
          left: 0;
        }

        p {
          text-align: left;
          left: 0;
          width: 355px;
          height: 74px;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* or 150% */
          color: #837d87;
        }

        .priceIcon {
          left: 0;
        }
      }

      .thirdWrapper {
        position: absolute;
        top: 1207px;
        left: 926px;

        h4 {
          width: 190px;
          height: 37px;
          text-align: left;
          left: 0;
        }

        p {
          left: 0;
          text-align: left;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* or 150% */
          width: 349px;
          height: 74px;

          color: #837d87;
        }

        .peopleIcon {
          left: 0;
        }
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
        <div className="desktopLine" />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="button">view plans</button>
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
