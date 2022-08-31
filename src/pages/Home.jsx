import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PolylineAnimate from "../assets/images/svg/polyline_animate.svg";
import AnimKey from "../assets/images/gif/anim_key.gif";
import AnimAnchor from "../assets/images/gif/anim_anchor.gif";
import AnimDividers from "../assets/images/gif/anim_dividers.gif";
import { getCookie } from "../utils/cookie";

const KeyHover = "keyHover";
const AnchorHover = "anchorHover";
const DividersHover = "dividersHover";

const Home = () => {
  const [triggers, setTriggers] = useState({
    keyHover: false,
    anchorHover: false,
    dividersHover: false
  });

  const [move, setMove] = useState({
    isPointsAnimating: false,
    isEnded: false
  });

  const [passedAnimationSteps, setPassedAnimationSteps] = useState({
    showPoints: false,
    showTitle: false,
    showPetr: false,
    showPetrMob: false,
    showPointsMob: false
  });

  useEffect(() => {
    let showTitleTimeout;
    let showPointsAndPetrMobTimeout;
    let showPointsMobTimeout;
    let showPetrAndisPointsAnimatingTimeout;
    let isEndedTimeout;

    if (!getCookie("visitedBefore")) {
      document.cookie = "visitedBefore=true";
      const onLoadHandler = () => {
        showTitleTimeout = setTimeout(() => {
          setPassedAnimationSteps((prevState) => ({ ...prevState, showTitle: true }));
        }, 1500);

        showPointsAndPetrMobTimeout = setTimeout(() => {
          setPassedAnimationSteps((prevState) => ({
            ...prevState,
            showPoints: true,
            showPetrMob: true
          }));
        }, 2500);

        showPointsMobTimeout = setTimeout(() => {
          setPassedAnimationSteps((prevState) => ({ ...prevState, showPointsMob: true }));
        }, 3500);

        showPetrAndisPointsAnimatingTimeout = setTimeout(() => {
          setPassedAnimationSteps((prevState) => ({ ...prevState, showPetr: true }));
          setMove((prevState) => ({ ...prevState, isPointsAnimating: true }));
        }, 7500);

        isEndedTimeout = setTimeout(() => {
          setMove((prevState) => ({ ...prevState, isEnded: true }));
        }, 8500);
      };
      if (document.readyState === "complete") {
        onLoadHandler();
      } else {
        window.addEventListener("load", onLoadHandler);
      }
    } else {
      setPassedAnimationSteps((prevState) => ({
        showPointsMob: true,
        showTitle: true,
        showPetr: true,
        showPoints: true,
        showPetrMob: true
      }));
      setMove(() => ({ isEnded: true, isPointsAnimating: true }));
    }
    return () => {
      clearTimeout(showTitleTimeout);
      clearTimeout(showPointsAndPetrMobTimeout);
      clearTimeout(showPointsMobTimeout);
      clearTimeout(showPetrAndisPointsAnimatingTimeout);
      clearTimeout(isEndedTimeout);
    };
  }, []);

  const { isEnded, isPointsAnimating } = move;
  const { showPoints, showTitle, showPetr, showPetrMob, showPointsMob } = passedAnimationSteps;
  const { keyHover, anchorHover, dividersHover } = triggers;

  const mouseOver = (point) => {
    if (isEnded === true) {
      setTriggers((prevState) => ({ ...prevState, [point]: true }));
    }
  };

  return (
    <>
      <main className="layout_index0 desktop-only">
        <div className="i0_back_container flex column content--start items--center">
          <div className="i0_title">
            {isEnded &&
              showTitle &&
              ((keyHover && (
                <span className="i0_title fade_show" key="1">
                  Цифровая коллекция первого русского императора
                </span>
              )) ||
                (anchorHover && (
                  <span className="i0_title fade_show" key="2">
                    Открой для&nbsp;себя кабинет чудес Петра&nbsp;Великого
                  </span>
                )) ||
                (dividersHover && (
                  <span className="i0_title fade_show" key="3">
                    Интерактивная карта петровской эпохи
                  </span>
                )))}
            {!anchorHover && !dividersHover && !keyHover && showTitle && (
              <span className="i0_title fade_show" key="4">
                Wunderkammer
              </span>
            )}
          </div>
          {showPetr && (
            <div className="i0_portrait_container fade_show">
              <div className="i0_portrait"></div>
            </div>
          )}
        </div>

        <div className="i0_front_container">
          {isEnded ? (
            <div className="i_line"></div>
          ) : (
            <div
              className="i0_line"
              style={{
                backgroundImage: `url(${PolylineAnimate})`
              }}
            ></div>
          )}

          {showPoints && (
            <div className="fade_show">
              <div
                className={`i0_point i0_point-1 ${isPointsAnimating ? "move" : ""}`}
                onMouseEnter={() => mouseOver(KeyHover)}
                onClick={() => setTriggers({ ...triggers, keyHover: false })}
              >
                <Link to="/collection">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <circle r="50%" cx="50%" cy="50%"></circle>
                  </svg>
                </Link>
              </div>

              <div
                className={`i0_point i0_point-2 ${isPointsAnimating ? "move" : ""}`}
                onMouseEnter={() => mouseOver(AnchorHover)}
                onClick={() => setTriggers({ ...triggers, anchorHover: false })}
              >
                <Link to="/cabinet">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <circle r="50%" cx="50%" cy="50%"></circle>
                  </svg>
                </Link>
              </div>

              {!dividersHover && (
                <div
                  className={`i0_point i0_point-3 fade_show ${isPointsAnimating ? "move" : ""}`}
                  onMouseEnter={() => mouseOver(DividersHover)}
                  onClick={() =>
                    setTriggers({
                      ...triggers,
                      dividersHover: false
                    })
                  }
                >
                  <Link to="/map">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <circle r="50%" cx="50%" cy="50%"></circle>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          )}
          {isEnded &&
            ((keyHover && (
              <div
                className="i0_item i0_key fade_show"
                onMouseLeave={() => setTriggers({ ...triggers, keyHover: false })}
                onClick={() => setTriggers({ ...triggers, keyHover: false })}
              >
                <Link to="/collection">
                  <img src={AnimKey} alt="" />
                </Link>
              </div>
            )) ||
              (anchorHover && (
                <div
                  className="i0_item i0_anchor fade_show"
                  onMouseLeave={() => setTriggers({ ...triggers, anchorHover: false })}
                  onClick={() => setTriggers({ ...triggers, anchorHover: false })}
                >
                  <Link to="/cabinet">
                    <img src={AnimAnchor} alt="" />
                  </Link>
                </div>
              )) ||
              (dividersHover && (
                <div
                  className="i0_item i0_dividers fade_show"
                  onMouseLeave={() => setTriggers({ ...triggers, dividersHover: false })}
                  onClick={() => setTriggers({ ...triggers, dividersHover: false })}
                >
                  <Link to="/map">
                    <img src={AnimDividers} alt="" />
                  </Link>
                </div>
              )))}
        </div>
      </main>
      <main className="layout_index mobile-only">
        <div className="i_back_container flex column content--start items--center">
          <div className="i_title" v-cloak="">
            {showTitle && <div className="fade_show">Wunderkammer</div>}
          </div>
          {showPetrMob && (
            <div className="i_portrait_container fade_show">
              <div className="i_portrait"></div>
            </div>
          )}
        </div>

        {showPointsMob && (
          <div className="i_front_container fade_show">
            <div className="i_line"></div>

            <div className="i_point i_point-1">
              <Link to="/collection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%"></circle>
                </svg>
              </Link>
            </div>

            <div className="i_point i_point-2">
              <Link to="/cabinet">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%"></circle>
                </svg>
              </Link>
            </div>

            <div className="i_point i_point-3">
              <Link to="/map">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%"></circle>
                </svg>
              </Link>
            </div>

            <div className="i_item i_key">
              <Link to="/collection">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1065.5 338.4">
                  <path
                    d="M61.7,209.3C13.1,192.7-5.9,146.5,1.5,108.3c8-41.5,46.5-74.7,93.4-71c23.8,1.9,43.7,12,59.4,29.9
                            c15.7,17.9,22.6,39.1,21.8,63.2c144.1-0.5,287.8,0.2,431.9-1c0-8.1,0-15.9,0-23.9c9.1,0,17.9,0,27,0c0,7.8,0,15.6,0,23.7
                            c1.6,0.1,2.9,0.1,4.5,0.2c7-8.2,16.2-12.8,26.9-12.8c10.6,0,19.7,4.2,26.8,12.5c0.8,0.1,1.6,0.2,2.4,0.3c0.6,0,1.3-0.1,2.2-0.1
                            c0.3-0.9,0.7-1.8,0.9-2.8c1-5,1.9-10.1,3.1-15.1c2.8-11.7,7.2-22.8,13-33.3c8.4-15.3,19-28.9,32.1-40.5c19.3-17.1,41.7-28.4,66.8-34
                            c13.4-3,27-4.2,40.6-3.2c12.9,1,25.6,3.3,37.9,7.6c18.3,6.3,34.7,15.6,49.5,28.2c12.3,10.5,22.5,22.7,30.7,36.5
                            c8.5,14.2,14.6,29.4,17.6,45.8c0.7,3.7,1.5,7.5,2.3,11.7c4.1-4.9,8-9.7,13.4-12.8c5.6-3.2,11.5-5.2,17.9-5.4
                            c6.4-0.2,12.5,0.5,18.5,3.3c5.9,2.7,10.9,6.6,14.8,11.6c12.6,16.3,11.1,40.4-6,54.7c-14.9,12.3-42,14.3-59.4-10.5
                            c-7,41.1-27.1,73.9-60.5,98c-26.7,19.3-56.9,28.3-89.9,27.4c-36.6-1-68.5-13.7-95.5-38.2c-26.9-24.3-42.5-54.9-47.8-91.3
                            c-15.4,26-48.5,25-62.8,0c-0.3,3.3-0.1,5.8-0.2,8.3c0,2.5,0,5,0,7.5c0,2.6,0,5.3,0,8.2c-9,0-17.8,0-26.9,0c0-10.5,0-20.9,0-31.3
                            c-5.9-1-429.1-0.3-439.3,0.6c-11.3,24.4-29.8,40.9-55.7,49.2c0,42.8,0,85.4,0,128c-4,0.9-39.3,1.2-50.5,0.5
                            c-0.1-0.1-0.3-0.2-0.3-0.4c-0.1-0.1-0.2-0.3-0.2-0.4c0-1-0.1-2-0.1-3c0-41.3,0-82.7-0.1-124C62,210,61.9,209.9,61.7,209.3z
                             M925.1,236c25.2-22.1,43.3-60.1,38-103.5c-3.1-25.7-23.3-63.5-39.7-72.5c-0.6,0.5-1.3,1-1.9,1.6c-28.4,28.4-56.7,56.8-85.1,85.2
                            c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0,0.3,0,0.1C866,176.9,895.5,206.4,925.1,236z M790.9,43.2C757,59,727.5,97.6,726.3,145.1
                            c-1.4,50.7,29.1,91.9,64.6,108.6C790.9,183.5,790.9,113.4,790.9,43.2z M902.2,252.7c-28.3-28.3-56.1-56.1-83.9-83.9
                            c0,31.4,0,63.1,0,95.4C847.7,270.7,875.5,266.8,902.2,252.7z M818.3,32.6c0,31.3,0,62.3,0,93.5c4.8-3.8,80.4-79.6,82.6-82.9
                            C874.7,30,847.5,26.1,818.3,32.6z M1025.9,132.1c-10.2,0.1-19,8.8-18.8,18.8c0.3,11.5,8.8,19.3,19.5,19.1
                            c12-0.3,18.6-10.4,18.5-19.1C1045,140.3,1036.6,132,1025.9,132.1z"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="i_item i_anchor">
              <Link to="/cabinet">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 181 687.2">
                  <path
                    d="M168.1,640c-7.6,0-14.2,0-21,0c-0.9-2.4-0.5-4.6-0.4-7.3c11.5-0.2,22.8,0.3,34.3,0.3c0,11.7,0,23.1,0,34.1
                            c-1.7,1.1-2.8,0.8-4,0.7c-1,0-2,0.1-3.2-0.8c-0.7-6.9,0.4-14,0.3-21.4c-2.3,0.6-3.2,2.5-4.3,3.9c-5.8,7.2-12.5,13.4-20,18.7
                            c-13.7,9.8-28.8,15.8-45.5,18c-25.3,3.4-48.7-2.1-70.1-16c-9.4-6.1-17.5-13.8-24.5-22.6c-0.6-0.7-0.9-1.8-2.4-2.1
                            c0,7.1,0,14.2,0,21.2c-2.5,1.4-4.7,0.8-7.3,0.6c0-11.6,0-22.9,0-34.7c11.3-0.5,22.5,0.2,33.8,0.1c1.1,2.4,0.7,4.5,0.4,7.2
                            c-6.7,0-13.4,0-21.2,0c19.2,25,43.3,38.1,74.2,39.9c0-53.4,0-106.3,0-159.8c-9.1-0.1-18.3-0.3-27.5-0.4c-0.7-2.5-0.3-4.7-0.4-7.2
                            c9.4,0,18.5,0,27.7,0c1.2-3.8,0.5-7.3,0.7-10.7c0.1-3.3,0-6.6,0-9.7c-1.3-1.7-3.1-1.7-4.7-2.3c-11.4-4.6-15.4-15.5-14.5-23.4
                            c1.2-10.8,9.5-19.2,19.6-20.4c11-1.3,20.8,4.6,24.5,14.8c4.1,11.1-1.2,23.5-12.1,28.3c-1.7,0.7-3.4,1.3-5.4,2.1c0,6.1,0,12.3,0,18.4
                            c0,0.8-0.1,1.7,0.7,2.6c4.2,0.7,8.7,0.3,13.2,0.4c4.5,0.1,9,0,13.4,0c1.4,2.4,0.5,4.5,1,7.2c-9.5,0.2-18.6-0.1-28.2,0.1
                            c0,53.3,0,106.3,0,159.8C125.5,677.8,149.3,664.6,168.1,640z M106.7,468.7c0.1-8.7-6.9-15.7-15.4-15.6c-8.4,0.1-15.1,6.9-15.2,15.3
                            c-0.1,8.6,6.9,15.7,15.4,15.6C99.8,483.9,106.6,477.1,106.7,468.7z"
                  ></path>

                  <path d="M91.7,70.2c1.6,0,3,1.5,2.9,3.3c-0.1,1.8-1.1,2.7-2.7,2.9c-1.5,0.2-3.2-1.5-3.3-3C88.5,71.9,90.1,70.3,91.7,70.2z"></path>
                  <path d="M94.6,136.6c-0.1,1.7-1.6,3.1-3.2,3c-1.6-0.2-3.1-1.9-2.8-3.4c0.3-1.6,1.3-2.6,3-2.7C93.2,133.3,94.6,134.9,94.6,136.6z"></path>
                  <path d="M91.8,234.5c1.6,0.1,2.9,1.6,2.8,3.4c-0.1,1.8-1.3,2.6-2.8,2.8c-1.4,0.2-3.2-1.6-3.2-3.1C88.5,236,90.2,234.4,91.8,234.5z"></path>
                  <path d="M94.6,338.5c0,1.7-1.4,3.2-3,3.2c-1.5,0-3.2-1.8-3-3.3c0.2-1.6,1.2-2.7,2.8-2.9C93,335.3,94.5,336.8,94.6,338.5z"></path>
                  <path d="M88.6,275.6c-0.1-1.5,1.5-3.2,3-3.2c1.6,0,3,1.5,3,3.2c0,1.8-1.1,2.7-2.7,3C90.4,278.8,88.6,277.1,88.6,275.6z"></path>
                  <path d="M94.6,174.3c0.1,1.8-1.3,3.3-3,3.1c-1.7-0.1-2.7-1.1-3-2.7c-0.3-1.5,1.2-3.2,2.8-3.4C93,171.1,94.5,172.6,94.6,174.3z"></path>
                  <path d="M94.6,376.6c0,1.7-1.5,3.1-3.2,2.9c-1.7-0.2-2.6-1.3-2.8-2.9c-0.2-1.5,1.5-3.2,3.1-3.2C93.2,373.3,94.6,374.9,94.6,376.6z"></path>
                  <path d="M94.6,439.8c-0.1,1.7-1.7,3.1-3.3,2.9c-1.6-0.2-3-2-2.7-3.5c0.3-1.6,1.4-2.6,3.1-2.6C93.3,436.5,94.7,438.1,94.6,439.8z"></path>
                  <path d="M94.5,123.8c0,1.7-0.8,2.9-2.6,3.1c-1.6,0.3-3.3-1.3-3.4-2.9c-0.1-1.7,1.4-3.2,3.2-3.1C93.5,121,94.4,122.1,94.5,123.8z"></path>
                  <path d="M94.5,149.2c0,1.7-0.9,2.8-2.7,3c-1.7,0.2-3.3-1.3-3.3-3c0-1.6,1.7-3.3,3.3-3.1C93.6,146.3,94.4,147.4,94.5,149.2z"></path>
                  <path d="M94.5,161.9c-0.1,1.8-1.1,2.8-2.8,2.9c-1.6,0.2-3.2-1.6-3.2-3.2c0-1.6,1.7-3.1,3.4-2.8C93.7,159.1,94.5,160.2,94.5,161.9z"></path>
                  <path d="M91.7,190c-1.9-0.1-3.4-1.8-3.1-3.4c0.3-1.6,1.3-2.7,3.1-2.6c1.8,0,3,1.6,2.8,3.4C94.3,189.1,93.3,190,91.7,190z"></path>
                  <path d="M91.8,196.7c1.7,0.2,2.7,1.2,2.7,3c0,1.8-1.5,3.3-3.1,3.1c-1.6-0.2-3.1-2-2.8-3.5C89,197.5,90.1,196.7,91.8,196.7z"></path>
                  <path d="M94.5,212.4c0,1.6-1,2.6-2.7,2.8c-1.7,0.2-3.3-1.3-3.3-3c0-1.6,1.7-3.3,3.3-3.1C93.6,209.4,94.5,210.5,94.5,212.4z"></path>
                  <path d="M91.7,265.9c-1.6,0-3.3-1.6-3.2-3.2c0.1-1.7,1.1-2.7,2.9-2.8c1.9-0.1,3.1,1.2,3.1,3.1C94.5,264.6,93.2,265.9,91.7,265.9z"></path>
                  <path d="M94.5,288.2c-0.1,1.7-1,2.7-2.8,2.8c-1.7,0.1-3.2-1.5-3.1-3.2c0.1-1.7,1.8-3.1,3.4-2.9C93.8,285.3,94.5,286.5,94.5,288.2z"></path>
                  <path d="M91.6,297.8c1.7,0.1,2.7,1,2.9,2.7c0.2,1.7-1.3,3.4-2.9,3.4c-1.5,0-3.3-1.8-3.1-3.3C88.8,298.8,89.8,297.8,91.6,297.8z"></path>
                  <path d="M91.7,316.3c-1.9-0.1-2.8-1.1-3.1-2.8c-0.2-1.6,1.5-3.3,3.1-3.3c1.6,0,3.1,1.6,2.9,3.4C94.4,315.3,93.3,316.2,91.7,316.3z"></path>
                  <path d="M94.5,48.5c-0.2,1.6-1.1,2.6-2.9,2.6c-1.7,0-3.3-1.6-3-3.2c0.3-1.6,1.2-2.7,3-2.8C93.3,45,94.7,46.5,94.5,48.5z"></path>
                  <path d="M94.5,351.5c0,1.3-0.8,2.4-2.6,2.7c-1.7,0.2-3.4-1.2-3.4-2.9c0-1.6,1.6-3.2,3.2-3.2C93.3,348.2,94.5,349.4,94.5,351.5z"></path>
                  <path d="M94.5,363.8c0,1.8-0.9,2.9-2.6,3.2c-1.6,0.3-3.3-1.3-3.3-3c-0.1-1.7,1.4-3.1,3.2-3C93.6,361,94.4,362.1,94.5,363.8z"></path>
                  <path d="M94.5,60.9c-0.2,1.8-1.1,2.8-2.9,2.9c-1.6,0.1-3.2-1.7-3.1-3.3c0.1-1.6,1.7-3,3.5-2.7C93.8,58.1,94.5,59.3,94.5,60.9z"></path>
                  <path d="M94.5,389.5c-0.2,1.5-1.1,2.5-2.9,2.6c-1.7,0-3.3-1.6-3-3.2c0.3-1.6,1.2-2.7,3-2.8C93.4,386,94.6,387.4,94.5,389.5z"></path>
                  <path d="M91.6,398.8c1.7,0.1,2.7,1,2.9,2.7c0.2,1.7-1.3,3.4-2.9,3.3c-1.5,0-3.3-1.8-3.1-3.3C88.8,399.9,89.8,398.9,91.6,398.8z"></path>
                  <path d="M94.5,414.4c0,1.7-0.9,2.7-2.6,2.9c-1.7,0.2-3.3-1.3-3.3-2.9c0-1.6,1.7-3.3,3.2-3.1C93.5,411.5,94.5,412.5,94.5,414.4z"></path>
                  <path d="M94.5,86c-0.1,1.7-0.9,2.8-2.7,3c-1.7,0.2-3.3-1.3-3.3-3c0-1.7,1.6-3.2,3.3-3C93.6,83.2,94.5,84.3,94.5,86z"></path>
                  <path d="M91.7,101.9c-2.3-0.8-3.5-2-2.9-4.2c0.4-1.4,1.6-2.1,3.1-2c1.2,0.1,2.2,0.8,2.5,2C94.9,99.9,93.9,101.2,91.7,101.9z"></path>
                  <path d="M91.8,108.1c1.5,0.2,2.6,1.1,2.7,2.8c0.2,1.9-1,3.3-2.9,3.3c-1.8,0-2.8-1.1-3-2.7C88.3,109.9,90,108.2,91.8,108.1z"></path>
                  <path d="M91.7,253.2c-1.8,0-2.8-1-3.1-2.7c-0.3-1.6,1.3-3.3,2.9-3.4c1.7-0.1,3.1,1.4,3,3.2C94.5,252,93.3,253.1,91.7,253.2z"></path>
                  <path d="M91.4,228c-1.6-0.1-3.1-1.9-2.8-3.5c0.4-1.6,1.4-2.6,3.2-2.5c1.8,0.1,3,1.6,2.7,3.4C94.3,227,93,228.1,91.4,228z"></path>
                  <path d="M94.5,427c0,1.7-0.9,2.8-2.6,3.1c-1.6,0.2-3.3-1.3-3.3-3c-0.1-1.7,1.5-3.2,3.2-3C93.6,424.1,94.4,425.2,94.5,427z"></path>
                  <path d="M94.5,326c-0.1,1.7-1,2.8-2.7,3c-1.6,0.2-3.3-1.4-3.3-3.1c0-1.7,1.5-3.2,3.3-3C93.6,323.1,94.5,324.2,94.5,326z"></path>
                </svg>
              </Link>
            </div>

            <div className="i_item i_dividers">
              <Link to="/map">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 929 627.5">
                  <g>
                    <path
                      d="M78.9,413.4c5.4-2.8,7.6-2.9,10-0.7c2,1.8,2.5,4.4,1.5,6.8c-1.2,2.7-4.1,4.5-6.8,4c-3.9-0.8-5.3-3.6-5.6-7.9
                                c-5.9,8.6-9.4,17.9-14.7,26.1c-5.4,8.3-9.9,17.3-14.8,26c-4.9,8.7-9.7,17.4-14.7,26.2c-3.4-0.7-5.9-2.7-8.7-4
                                c-5-2.4-5.2-7.7-0.6-11c2.6-1.9,2.6-1.9,3.9-4.8c-4.1-4.5-4.7-6.7-2.7-10c1.8-2.9,4.3-3.5,9.7-1.8c1.8-3.2,3.7-6.5,5.5-9.8
                                c-0.7-1.1-1.5-2-2-3.1c-1.7-3.8,0.5-8.6,4.6-8.6c3.6-0.1,4.8-2,6.1-4.6c9.7-19.3,14.3-39.7,13.7-61.2c-0.1-3.8,0.6-7.2,2.2-10.6
                                c8.9-18.8,17.7-37.6,26.6-56.5c0.8-1.6,1.5-3.3,2.4-5.3C57.8,280.3,26.4,252.2,0,217.8c11.7-8.9,23.7-17.2,35.3-26.6
                                c16.6,21.5,35.3,40.2,56.5,56.3c6.7,5.1,13.6,10.1,20.9,14.3c1.7-0.6,1.8-2.1,2.4-3.2c27.6-58.9,55.2-117.8,82.9-176.7
                                c1.4-3,1.4-5.5,0.1-8.5c-5.6-13.1-5.7-26.7-0.4-39.5c7.3-17.7,20.7-29.2,39.9-32.9c28.5-5.5,55.8,12.6,62.3,40.9
                                c2.2,9.8,1.8,19.6-1.8,29c-1.4,3.8-1.2,6.7,0.5,10.3c36.7,78.2,73.3,156.4,110,234.6c3.7,8,7.5,16,11.3,23.9c0.5,1,1.1,2,1.6,2.9
                                c5.6-0.8,8.4,0,9.7,3.1c1.3,3,0.3,5.7-4,9.5c1.6,3.5,3.3,7.1,5,10.7c1.4,2.8,1.8,5.5,1.7,8.7c-0.7,22.1,4,42.9,14,62.6
                                c8,15.6,16.9,30.6,25.3,45.9c0.8,1.4,2,2.7,2.1,4.7c-3.6,2.5-7.5,4.5-11.8,6.8c-26.9-48-53.7-95.9-80.6-143.9
                                c-3.2,5.9-6.3,7.7-10.1,6c-2.9-1.3-4.3-5-3.1-8c1.5-3.5,4.9-4.4,10.6-2.4c-5.2-9.3-10.1-18-14.9-26.6c-1.6-0.7-2.8,0.2-4,0.6
                                c-21.5,7.9-43.6,13.2-66.3,16.3c-21.8,3-43.7,4-65.8,2.8c-27.7-1.6-54.8-6.4-81.4-14.4c-4-1.2-7.9-2.6-11.8-3.9
                                c-4.3-1.5-4.3-1.5-6.5,2.4c-9.1,16.3-18.2,32.5-27.3,48.8C94.5,385.5,87,399,78.9,413.4z M342.9,279.6
                                c-31.5-56.3-62.8-112.1-94.1-168.1c-3.3,3.8-93.4,164.9-94.5,168.9c37.1,12.2,75.1,17.1,114.1,14.3
                                C293.7,292.9,318.5,288.1,342.9,279.6z M401.9,356.1c5.6,10,11.1,19.7,16.6,29.4c0.3-0.1,0.6-0.2,0.9-0.4
                                c-0.5-5.5,0.9-11.1-1.7-16.6c-43-91.5-85.9-183.1-128.8-274.7c-0.6-1.3-0.8-2.9-2.3-3.6c-8.6,7.8-8.6,7.8-24.9,15.3
                                c44.6,79.7,89.2,159.4,133.8,239c5.6-1.9,8.7-1.2,10.4,1.9C407.4,349.6,406.4,352.4,401.9,356.1z M136.3,282
                                c33-59,65.8-117.5,98.8-176.4c-10-2.9-18.4-7.4-25.8-14.8c-28.5,60.8-56.8,121.2-85.2,181.8c2.5,1.4,5,1.9,7,3.5
                                C133,277.6,134.3,279.7,136.3,282z M137.9,308.2c74,25.2,147.1,25,220.7-0.5c-3.3-5.9-6.3-11.2-9.3-16.6c-1.4,0.4-2.3,0.6-3.2,0.9
                                c-28.7,9.8-58.3,15.1-88.6,16c-18.2,0.5-36.3-0.3-54.3-3c-17.8-2.6-35.3-6.7-52.4-12.4c-3.4-1.1-3.5-1.1-5.1,1.7
                                C143.1,298.6,140.7,303,137.9,308.2z M247.3,92.8c21.7,0.1,39.6-17.6,39.6-39.2c0.1-21.6-17.8-39.7-39.4-39.5
                                c-23.4,0.3-39.1,18.7-39.3,39C208,74.8,225.6,92.7,247.3,92.8z M18.2,220.1c23.5,28.4,50.5,51.7,81.6,70.9c2.7-5.8,5.2-11.2,8-17.1
                                c-28.3-17.7-53-39.3-74.5-65C28.1,212.8,23.3,216.3,18.2,220.1z M77.2,385.8c0.3,0.1,0.5,0.2,0.8,0.3
                                c15.2-27.2,30.5-54.4,46.1-82.3c-5.1,0.7-9-0.9-12.6-3.3c-0.6,0.8-1,1.1-1.2,1.5c-10.7,22.8-21.4,45.7-32.2,68.6
                                c-0.6,1.4-1,2.8-1,4.3C77.3,378.5,77.2,382.1,77.2,385.8z"
                    ></path>
                    <path d="M849.3,562c0.1,3.5-2.6,6.4-6.1,6.6c-3.4,0.2-6.5-2.8-6.4-6.3c0-3.3,3.1-6.3,6.5-6.3C846.4,556,849.2,558.7,849.3,562z"></path>
                    <path
                      d="M575.5,611.7c3.4,0.3,5.8,3.1,5.6,6.4c-0.2,3.5-3.1,6-6.8,5.8c-3.6-0.2-6.3-3.3-5.9-6.7
                                C568.8,613.7,571.8,611.3,575.5,611.7z"
                    ></path>
                    <path
                      d="M764.9,373.8c3.5,0.1,6.4,3.1,6.2,6.5c-0.1,3.3-2.9,5.9-6.2,5.9c-3.6,0-6.5-2.8-6.5-6.2
                                C758.3,376.6,761.4,373.7,764.9,373.8z"
                    ></path>
                    <path d="M314.4,611.6c-0.1,3.5-3.1,6.3-6.6,6c-3.6-0.3-6.1-3.2-5.9-6.8c0.2-3.3,3-5.8,6.3-5.8C311.8,605.1,314.5,608,314.4,611.6z"></path>
                    <path
                      d="M788.8,380.7c3.7,0.1,6.4,2.8,6.3,6.3c-0.1,3.4-2.6,5.9-6.1,6c-3.8,0.1-6.9-3-6.7-6.5C782.6,383.1,785.4,380.6,788.8,380.7
                                z"
                    ></path>
                    <path
                      d="M812.9,400.7c-3.4,0.1-6.5-2.7-6.7-6c-0.2-3.3,2.7-6.4,6.1-6.5c3.4-0.1,6.5,2.7,6.7,6C819.2,397.6,816.3,400.6,812.9,400.7
                                z"
                    ></path>
                    <path
                      d="M56.1,527.5c-0.1,3.4-3.2,6.3-6.5,6.1c-3.3-0.2-6.2-3.4-6.1-6.6c0.1-3.3,3.3-6.3,6.6-6.1C53.3,521.1,56.2,524.2,56.1,527.5
                                z"
                    ></path>
                    <path d="M748.1,586.7c3.4,0.1,6,2.6,6,6c0.1,3.5-2.6,6.2-6.3,6.3c-3.6,0-6.5-2.7-6.4-6.2C741.6,589.3,744.5,586.6,748.1,586.7z"></path>
                    <path
                      d="M691.4,370.7c-3.6,0-6.4-2.8-6.3-6.3c0-3.5,2.9-6.3,6.5-6.1c3.3,0.2,6.1,2.9,6.2,6.1C697.9,367.7,694.8,370.7,691.4,370.7z
                                "
                    ></path>
                    <path d="M556.2,619.3c0,3.4-3,6.3-6.5,6.3c-3.2-0.1-6.1-2.9-6.3-6c-0.2-3.3,2.9-6.4,6.3-6.5C553.1,612.9,556.2,615.8,556.2,619.3z"></path>
                    <path
                      d="M389.2,618.3c0,3.5-3,6.3-6.5,6.2c-3.2-0.1-6.1-2.9-6.2-6.1c-0.1-3.3,2.9-6.4,6.3-6.5C386.3,611.9,389.2,614.8,389.2,618.3
                                z"
                    ></path>
                    <path d="M643.1,610.2c0.1-3.4,3.1-6.2,6.6-6.1c3.3,0.1,6.1,3,6.1,6.2c0,3.3-3,6.3-6.5,6.3C645.9,616.6,643,613.7,643.1,610.2z"></path>
                    <path d="M874.1,426.2c0-3.5,2.9-6.3,6.3-6.2c3.3,0.1,6.3,3.1,6.4,6.4c0,3.3-3,6.4-6.4,6.2C877,432.5,874.1,429.5,874.1,426.2z"></path>
                    <path d="M209.5,600.7c-3.5-0.1-6.4-3.1-6.3-6.5c0.1-3.5,3.1-6.1,6.8-5.8c3.4,0.2,6,2.9,6,6.1C216,598,213,600.8,209.5,600.7z"></path>
                    <path d="M131.1,574.1c0-3.3,2.7-6.1,6-6.2c3.6-0.1,6.9,3.2,6.7,6.6c-0.2,3.2-3.2,6-6.3,6C134.1,580.5,131.1,577.5,131.1,574.1z"></path>
                    <path d="M120.3,565.2c0.1,3.6-2.7,6.5-6.2,6.4c-3.4-0.1-6.4-3-6.4-6.4c0-3.2,2.8-6.1,6-6.2C117.1,558.9,120.2,561.8,120.3,565.2z"></path>
                    <path d="M858.9,419.9c-3.6,0-6.5-2.7-6.6-6.1c-0.1-3.4,2.9-6.3,6.4-6.2c3.6,0.1,6.4,3,6.3,6.4C865,417.3,862.3,419.9,858.9,419.9z"></path>
                    <path d="M699.5,596.7c3.4,0.3,5.8,3,5.7,6.4c-0.1,3.5-3,6-6.7,5.8c-3.6-0.2-6.3-3.1-6-6.6C692.9,598.9,695.9,596.4,699.5,596.7z"></path>
                    <path d="M648.2,357.2c0.1,3.5-2.7,6.4-6.2,6.5c-3.4,0-6.5-3-6.5-6.3c0-3.2,2.8-6,6.1-6.2C645,350.9,648,353.7,648.2,357.2z"></path>
                    <path
                      d="M319.1,355.6c-0.1-3.5,2.7-6.4,6.3-6.5c3.4-0.1,6.5,2.9,6.5,6.3c-0.1,3.2-2.8,6-6.1,6.2
                                C322.3,361.8,319.2,359.1,319.1,355.6z"
                    ></path>
                    <path
                      d="M184.2,381.8c0,3.5-2.7,6.2-6.3,6.2c-3.4,0-6.1-2.4-6.3-5.7c-0.2-3.3,2.7-6.4,6.2-6.5C181.3,375.6,184.1,378.2,184.2,381.8
                                z"
                    ></path>
                    <path d="M905.5,528c-3.3,0-6.1-2.6-6.2-5.9c-0.1-3.4,2.8-6.4,6.2-6.5c3.6-0.1,6.5,2.6,6.5,6.1C911.9,525.1,908.9,528,905.5,528z"></path>
                    <path d="M69.8,548.7c-3.3,0-6.4-2.9-6.6-6.2c-0.1-3.3,2.8-6.4,6.2-6.4c3.3,0,6.4,2.9,6.5,6.2C76.1,545.7,73.2,548.7,69.8,548.7z"></path>
                    <path d="M275.8,355.6c3.7,0,6.4,2.7,6.3,6.2c-0.1,3.5-2.9,6.1-6.6,6c-3.3-0.1-6.1-2.7-6.2-6C269.3,358.4,272.2,355.6,275.8,355.6z"></path>
                    <path
                      d="M723.4,604.4c-3.3,0-6.1-2.6-6.3-5.8c-0.2-3.7,2.9-6.7,6.6-6.6c3.2,0.1,6.1,2.9,6.1,6.1C729.9,601.4,727,604.3,723.4,604.4
                                z"
                    ></path>
                    <path d="M592.1,358.4c-3.6,0-6.3-2.8-6.2-6.4c0.1-3.4,2.6-6,6-6.1c3.5-0.1,6.4,2.6,6.5,6.2C598.4,355.7,595.6,358.5,592.1,358.4z"></path>
                    <path d="M666.4,354.6c3.7-0.1,6.6,2.5,6.6,6c0.1,3.5-2.8,6.3-6.4,6.2c-3.4,0-6.1-2.6-6.4-5.8C660,357.5,662.8,354.7,666.4,354.6z"></path>
                    <path
                      d="M226.8,364.4c3.4,0.1,6.1,2.7,6.2,5.9c0.1,3.3-2.9,6.3-6.4,6.4c-3.5,0.1-6.5-2.8-6.4-6.2
                                C220.3,367.1,223.2,364.4,226.8,364.4z"
                    ></path>
                    <path
                      d="M740.7,380.4c-3.5,0.1-6.5-2.8-6.5-6.2c0-3.5,2.8-6.4,6.3-6.3c3.4,0.1,6.4,3.1,6.4,6.4
                                C746.7,377.6,743.9,380.4,740.7,380.4z"
                    ></path>
                    <path
                      d="M829.7,402.6c0.4-3.3,3.4-5.8,6.6-5.5c3.8,0.4,6.3,3.6,5.8,7.3c-0.5,3.3-3.6,5.6-6.8,5.2
                                C831.8,409.1,829.3,406,829.7,402.6z"
                    ></path>
                    <path
                      d="M357.8,622.7c-3.5-0.1-6.4-3.2-6.2-6.5c0.2-3.5,3.2-6.1,6.8-5.9c3.4,0.2,5.9,2.9,5.9,6.2
                                C364.2,620,361.3,622.8,357.8,622.7z"
                    ></path>
                    <path
                      d="M886.8,531.8c3.4-0.1,6.4,2.9,6.3,6.3c-0.1,3.3-3.1,6.3-6.4,6.3c-3.3,0.1-6.4-3-6.3-6.3
                                C880.4,534.9,883.5,531.9,886.8,531.8z"
                    ></path>
                    <path
                      d="M859.2,551.2c0.1-3.3,3.2-6.2,6.5-6.2c3.3,0,6.3,3.1,6.2,6.4c-0.1,3.3-3.2,6.2-6.5,6.2
                                C861.9,557.6,859.1,554.7,859.2,551.2z"
                    ></path>
                    <path
                      d="M258.5,610.5c-3.4-0.1-6.3-3.2-6.2-6.4c0.1-3.3,3.2-6.2,6.6-6.1c3.4,0.1,6.3,3.2,6.2,6.4
                                C265,607.8,261.9,610.6,258.5,610.5z"
                    ></path>
                    <path
                      d="M624.8,607.1c3.4,0.1,6.3,3.2,6.2,6.4c-0.1,3.3-3.2,6.1-6.6,6.1c-3.4-0.1-6.3-3.1-6.2-6.4
                                C618.3,609.8,621.4,607,624.8,607.1z"
                    ></path>
                    <path d="M599.9,622c-3.6,0.1-6.6-2.6-6.6-6.1c0-3.4,2.9-6.2,6.5-6.2c3.4,0,6.1,2.6,6.3,5.9C606.3,619.1,603.5,621.9,599.9,622z"></path>
                    <path d="M408,613.6c3.6,0.1,6.3,2.9,6.1,6.4c-0.2,3.3-2.8,5.8-6.3,5.8c-3.6,0-6.5-2.8-6.5-6.2C401.5,616.2,404.4,613.5,408,613.6z"></path>
                    <path d="M531.2,620.3c0,3.4-2.9,6.3-6.4,6.3c-3.4,0-6.5-3.2-6.4-6.4c0.1-3.2,3-5.9,6.2-6.1C528.1,614,531.1,616.9,531.2,620.3z"></path>
                    <path d="M439.2,620.7c-0.1,3.5-3,6.2-6.6,6c-3.4-0.1-6.4-3.3-6.2-6.6c0.2-3.2,3-5.7,6.4-5.7C436.5,614.5,439.2,617.2,439.2,620.7z"></path>
                    <path
                      d="M464.2,621.3c-0.1,3.4-3.1,6.2-6.6,6.1c-3.2-0.1-6.1-3-6.2-6.1c0-3.3,3.1-6.4,6.5-6.3C461.4,614.9,464.3,617.8,464.2,621.3
                                z"
                    ></path>
                    <path
                      d="M826.1,571.7c-0.1,3.4-3,6.2-6.5,6.2c-3.3,0-6.1-2.7-6.2-5.9c-0.1-3.6,3-6.5,6.8-6.4C823.6,565.7,826.2,568.3,826.1,571.7z
                                "
                    ></path>
                    <path
                      d="M294.2,358.1c0.1-3.3,3.2-6.2,6.6-6.1c3.4,0.1,6.3,3.2,6.2,6.5c-0.1,3.3-3.3,6.1-6.6,6.1
                                C297,364.5,294.1,361.4,294.2,358.1z"
                    ></path>
                    <path d="M283.5,614.1c-3.7,0-6.4-2.6-6.4-6.2c0-3.5,2.9-6.3,6.4-6.1c3.3,0.1,6.1,2.8,6.2,6C289.9,611.3,287.1,614.1,283.5,614.1z"></path>
                    <path
                      d="M566.8,356.7c-3.5-0.2-6.1-3.2-5.8-6.8c0.2-3.5,3.3-6,6.9-5.6c3.4,0.4,5.7,3,5.6,6.4C573.3,354.2,570.3,356.9,566.8,356.7z
                                "
                    ></path>
                    <path d="M339.3,614.4c-0.1,3.5-3.1,6.2-6.6,6c-3.4-0.2-5.9-3-5.9-6.3c0-3.5,3-6.3,6.5-6.2C336.7,608,339.4,610.9,339.3,614.4z"></path>
                    <path d="M113.3,406c0.1,3.5-2.6,6.4-6.1,6.6c-3.4,0.2-6.5-2.8-6.5-6.2c0-3.3,3-6.3,6.4-6.4C110.4,400.1,113.2,402.7,113.3,406z"></path>
                    <path
                      d="M154.1,382.8c3.4,0,6,2.6,6.1,5.9c0.1,3.5-2.6,6.3-6.2,6.4c-3.6,0.1-6.5-2.6-6.4-6.1C147.5,385.6,150.6,382.8,154.1,382.8z
                                "
                    ></path>
                    <path
                      d="M722.2,368.9c0.1,3.7-2.5,6.2-6.3,6.2c-3.5,0-6.1-2.4-6.3-5.8c-0.2-3.4,2.6-6.4,6.1-6.5
                                C719.3,362.7,722.1,365.4,722.2,368.9z"
                    ></path>
                    <path d="M617,360.7c-3.5,0-6.4-2.9-6.4-6.4c0.1-3.5,3-6.1,6.6-6c3.4,0.1,5.9,2.7,6,6.1C623.3,358,620.6,360.7,617,360.7z"></path>
                    <path
                      d="M350.5,346.7c3.6,0.1,6.4,2.9,6.2,6.4c-0.2,3.5-3.1,6-6.8,5.8c-3.4-0.2-5.9-2.7-5.8-6.1
                                C344.1,349.2,346.8,346.6,350.5,346.7z"
                    ></path>
                    <path d="M899.8,447.7c-3.5-0.3-6-3.3-5.8-6.9c0.2-3.3,3.1-5.9,6.3-5.8c3.7,0.2,6.4,3.5,6,7.2C906,445.6,903.1,448,899.8,447.7z"></path>
                    <path d="M517.4,354.3c-3.6,0.1-6.4-2.6-6.5-6.1c0-3.6,2.7-6.3,6.3-6.3c3.3,0,6,2.6,6.2,5.9C523.6,351.4,521,354.2,517.4,354.3z"></path>
                    <path d="M481.2,621c0.1,3.5-2.7,6.4-6.2,6.4c-3.3,0-6-2.7-6.1-6c-0.1-3.5,2.7-6.5,6.1-6.5C478.3,615,481.1,617.7,481.2,621z"></path>
                    <path d="M506.2,621.2c-0.1,3.5-3,6.1-6.6,5.9c-3.4-0.1-6.1-2.9-6.1-6c0-3.3,3-6.3,6.5-6.3C503.4,614.8,506.2,617.7,506.2,621.2z"></path>
                    <path
                      d="M97.7,555.1c-0.1,3.3-2.7,5.9-6.1,5.9c-3.6,0-6.4-2.6-6.5-6.1c-0.1-3.6,2.7-6.3,6.3-6.2C94.9,548.8,97.7,551.7,97.7,555.1z
                                "
                    ></path>
                    <path d="M913.1,501c0.1-3.6,2.9-6.3,6.4-6.3c3.5,0.1,6.1,3,5.9,6.6c-0.2,3.5-3.3,6.3-6.6,6.1C915.5,507.2,913,504.3,913.1,501z"></path>
                    <path d="M680.5,607.1c-0.1,3.6-2.7,6.1-6.5,6c-3.5-0.1-5.9-2.5-6-6c0-3.5,2.6-6.3,6.2-6.3C677.8,600.8,680.5,603.5,680.5,607.1z"></path>
                    <path d="M40.2,508.2c-0.1,3.4-2.7,6-6,6c-3.7,0-6.5-3-6.3-6.8c0.2-3.4,2.8-5.8,6.2-5.7C37.6,501.8,40.3,504.6,40.2,508.2z"></path>
                    <path
                      d="M915.8,454.5c3.5,0,6.3,2.7,6.4,6.2c0.1,3.6-2.6,6.3-6.2,6.2c-3.5-0.1-6.2-2.8-6.1-6.4C909.9,457,912.3,454.6,915.8,454.5z
                                "
                    ></path>
                    <path
                      d="M191.6,588.7c-0.1,3.5-2.9,6.2-6.5,6.1c-3.6-0.2-6.2-2.9-6.1-6.5c0.1-3.4,2.7-5.8,6.2-5.8
                                C188.9,582.5,191.7,585.2,191.6,588.7z"
                    ></path>
                    <path d="M240.3,599.6c0,3.6-2.6,6.2-6.3,6.2c-3.6-0.1-6.3-2.8-6.2-6.3c0.1-3.5,2.5-5.8,6-5.9C237.6,593.5,240.3,596,240.3,599.6z"></path>
                    <path d="M542.3,355.1c-3.7,0-6.4-2.5-6.3-6.1c0-3.6,2.8-6.2,6.4-6.1c3.4,0.1,6,2.6,6.1,6C548.6,352.4,546,355,542.3,355.1z"></path>
                    <path d="M491.9,353.7c-3.6-0.1-6.2-3-6-6.5c0.2-3.5,3-6,6.7-5.8c3.4,0.2,5.8,2.8,5.8,6.2C498.4,351.2,495.5,353.9,491.9,353.7z"></path>
                    <path d="M456.4,347.8c-0.1,3.5-2.9,6.1-6.6,6c-3.6-0.2-6.1-3-5.9-6.6c0.2-3.4,2.8-5.7,6.3-5.7C454,341.6,456.6,344.2,456.4,347.8z"></path>
                    <path
                      d="M130.2,403.2c-3.4,0.1-6-2.4-6.2-5.8c-0.2-3.5,2.4-6.4,6-6.6c3.5-0.2,6.4,2.5,6.5,6.1C136.5,400.4,133.8,403.1,130.2,403.2
                                z"
                    ></path>
                    <path d="M208.4,375.7c0,3.6-2.6,6.2-6.3,6.2c-3.5,0-6-2.3-6.2-5.7c-0.2-3.6,2.4-6.3,6-6.5C205.6,369.6,208.3,372.1,208.4,375.7z"></path>
                    <path d="M802.4,579.7c0,3.5-2.8,6.2-6.4,6.1c-3.6,0-6.2-2.9-6-6.4c0.2-3.5,3.1-6,6.7-5.8C800,573.7,802.4,576.3,802.4,579.7z"></path>
                    <path d="M161.3,588c-3.7,0-6.3-2.7-6.3-6.2c0-3.6,2.8-6.2,6.4-6c3.6,0.2,6.2,3,6,6.5C167.3,585.7,164.8,588,161.3,588z"></path>
                    <path d="M481.2,347.2c0.1,3.5-2.7,6.4-6.2,6.4c-3.3,0-6-2.6-6.1-6c-0.1-3.6,2.6-6.4,6.1-6.4C478.4,341.3,481.1,343.9,481.2,347.2z"></path>
                    <path d="M929,484.1c0.1,3.2-3,6.5-6.3,6.5c-3.1,0-6.1-2.9-6.2-6c-0.2-3.3,3-6.5,6.3-6.5C925.8,478.1,928.8,481,929,484.1z"></path>
                    <path
                      d="M251.4,359.7c3.6,0.1,6.2,2.9,5.9,6.5c-0.2,3.5-3,5.9-6.8,5.7c-3.4-0.2-5.8-2.7-5.7-6.2C245,362.2,247.8,359.6,251.4,359.7
                                z"
                    ></path>
                    <path d="M778.4,586.9c-0.1,3.5-2.8,6.1-6.5,6c-3.4-0.1-5.9-2.5-6-6c-0.1-3.7,2.9-6.5,6.7-6.3C776,580.8,778.4,583.4,778.4,586.9z"></path>
                    <path
                      d="M247.3,92.8c-21.7-0.1-39.4-17.9-39.1-39.7c0.2-20.3,15.9-38.7,39.3-39
                                c21.6-0.3,39.5,17.9,39.4,39.5C286.9,75.2,269.1,92.9,247.3,92.8z M247.7,29.4c-13.3-0.1-24.3,10.6-24.4,23.9
                                c-0.1,13.1,10.9,24.3,24,24.4c13.2,0.1,24.2-10.7,24.4-24C271.9,40.5,261.1,29.5,247.7,29.4z"
                    ></path>
                    <path
                      d="M247.7,29.4c13.4,0.1,24.2,11.1,24,24.3c-0.2,13.3-11.2,24.1-24.4,24c-13.1-0.1-24.1-11.3-24-24.4
                                C223.4,40,234.4,29.3,247.7,29.4z M257.4,53.5c0-5.5-4.2-9.8-9.6-9.9c-5.6-0.1-10.3,4.4-10.3,9.9c0,5.4,4.9,10.2,10.3,10
                                C253.1,63.4,257.4,58.9,257.4,53.5z"
                    ></path>
                    <path
                      d="M257.4,53.5c0,5.4-4.3,9.9-9.6,10c-5.4,0.2-10.2-4.6-10.3-10c0-5.5,4.7-10,10.3-9.9
                                C253.2,43.7,257.4,48,257.4,53.5z"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
