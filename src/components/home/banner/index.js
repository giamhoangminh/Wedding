import React, { useEffect } from "react";
import {
  Background,
  BannerText,
  OverlayBanner,
  WrapBanner,
  TopText
} from "./styles";
import { BannerBg, BannerBg1, CuoiThoi, BeautifulInWhite } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";

import { AiOutlineRetweet, AiTwotoneCustomerService, AiOutlinePauseCircle, AiOutlinePlayCircle, AiFillStepBackward, AiFillStepForward, AiFillHeart  } from "react-icons/ai";


export function Banner() {
  const [isShowAudio, setIsShowAudio] = React.useState(false);
  const [isRoleAudio, setIsRoleAudio] = React.useState(false);
  const [widthBar, setWidthbar] = React.useState(0)
  const [timeRun, setTimeRun] = React.useState(0)
  const [timeDefault, setTimeDefault] = React.useState(0)
  const myaudio = document.getElementById("audioID"); 
 
  const onShowAudio = () => {
    setIsShowAudio(true)
    setIsRoleAudio(true)
    var myaudio = document.getElementById("audioID");
    myaudio.play();
    myaudio.muted = false;
  };
  const onHideAudio = () => {
    setIsShowAudio(false)
    setIsRoleAudio(false)
    var myaudio = document.getElementById("audioID");
    myaudio.pause();
  };

  useEffect(() => {
   if (myaudio) {
      myaudio.addEventListener("timeupdate", updateProgress);
      function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        setTimeRun(currentTime)
        setTimeDefault(duration)
        const progressPercent = (currentTime / duration) * 100;
        setWidthbar(progressPercent.toFixed(2))
      }
   }
  }, [myaudio]);

  return (
    <SectionWrapper>
      <Background bg={BannerBg1}>
        {/* <Image src={BannerBg1} alt="baner" /> */}
        <OverlayBanner></OverlayBanner>
        {/* <TextLeft>
          There is only one happiness in this life, to love and be loved
        </TextLeft> */}
        <WrapBanner>
          <BannerText>
            <TopText>
              <div className="from">PHÁT TỪ</div>
              <div>Our wedding</div>
              <div>--- <AiFillHeart></AiFillHeart> ---</div>
            </TopText>
            <img src={BannerBg} alt="" className={`img-cirle  ${isRoleAudio ? 'play' : 'pause'}`}></img>
            <div className="content">
              <div className="content__date">07/01/2024</div>
              <div className="content__name">Minh Giám & Xuân Nga</div>
              <div className="content__line" timeRun={((Math.floor(timeRun/60)) + (Math.floor(timeRun)%60)/100).toFixed(2)} timeEnd={((Math.floor(timeDefault/60)) + (Math.floor(timeDefault)%60)/100).toFixed(2)}>
                <div className="line-active" style={{ width: `${widthBar}%`}} >
                </div>
              </div>
              <div className="content__play">
                <div className="wrap-audio">
                  <audio id="audioID" controls>
                    {/* <source src={BeautifulInWhite} type="audio/mp3"></source> */}
                    <source src={BeautifulInWhite} type="audio/ogg" />
                    <source src={BeautifulInWhite} type="audio/mpeg" />
                  </audio>
                </div>
                <AiTwotoneCustomerService fontSize={'25px'}></AiTwotoneCustomerService>
                <AiFillStepBackward fontSize={'25px'}></AiFillStepBackward>
                { isShowAudio ? (
                  <AiOutlinePauseCircle fontSize={'50px'} onClick={() => onHideAudio()}></AiOutlinePauseCircle>
                  ) : (
                  <AiOutlinePlayCircle fontSize={'50px'} onClick={() => onShowAudio()}></AiOutlinePlayCircle>
                )}
                <AiFillStepForward fontSize={'25px'}></AiFillStepForward>
                <AiOutlineRetweet fontSize={'25px'}></AiOutlineRetweet>
              </div>
            </div>
          </BannerText>
        </WrapBanner>
      </Background>
    </SectionWrapper>
  );
}
