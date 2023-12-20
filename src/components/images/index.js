import { MainWrapper } from "../../_principles/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import ImageViewer from "react-simple-image-viewer";
import {
  Description,
  Heading,
  ImageItem,
  ImageWrapper,
  ImageColumn,
  Wrapper,
  VideoWrapper
} from "./styles";
import { Images } from "../../assets/images/wedding";
import { Images1 } from "../../assets/images/wedding1";
import { Images2 } from "../../assets/images/wedding2";
import { Images3 } from "../../assets/images/wedding3";

function ImagesComponent() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const [listImg, setListImg] = React.useState(Images);

  const openImageViewer = React.useCallback((img, index) => {
    setListImg(img)
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <MainWrapper>
      <Wrapper className="container">
        <VideoWrapper>
          <Heading>Video Cưới </Heading>
          <Description>
            Xem video cưới cùng chúng mình nhé
          </Description>
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/wXwtfVT11MI?si=VbLLkk3kHGUHYM6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Heading>Album Hình Cưới</Heading>
        {/* <Description>
          
        </Description> */}
        <ImageWrapper>
          <ImageColumn>
            {Images.map((img, i) => (
              <ImageItem key={i} onClick={() => openImageViewer(Images, i)}>
                <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
              </ImageItem>
            ))}
          </ImageColumn>
          <ImageColumn>
            {Images2.map((img, i) => (
              <ImageItem key={i} onClick={() => openImageViewer(Images2, i)}>
                <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
              </ImageItem>
            ))}
          </ImageColumn>
          <ImageColumn>
            {Images1.map((img, i) => (
              <ImageItem key={i} onClick={() => openImageViewer(Images1, i)}>
                <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
              </ImageItem>
            ))}
          </ImageColumn>
          <ImageColumn>
            {Images3.map((img, i) => (
              <ImageItem key={i} onClick={() => openImageViewer(Images3, i)}>
                <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
              </ImageItem>
            ))}
          </ImageColumn>
          {isViewerOpen && (
            <ImageViewer
              src={listImg.map((img) => img.src)}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </ImageWrapper>
      </Wrapper>
    </MainWrapper>
  );
}

export default ImagesComponent;
