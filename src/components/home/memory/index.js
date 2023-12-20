import React from "react";
import { Images } from "../../../assets/images/wedding";
import { SectionWrapper } from "../../../_principles/styles";
import {
  ButtonShowMore,
  Description,
  Heading,
  ImageItem,
  ImageWrapper,
  Wrapper,
} from "./styles";
import ImageViewer from "react-simple-image-viewer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function Memory() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <SectionWrapper>
      {/* <RingBg bg={Ring}></RingBg> */}
      <Wrapper className="container">
        <Heading>Album Hình Cưới</Heading>
        <Description>
        {/* Thật hạnh phúc vì đã gặp được nhau. */}
        </Description>
        <ImageWrapper>
          {Images.slice(0, 4).map((img, i) => (
            <ImageItem key={i} onClick={() => openImageViewer(i)}>
              <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
            </ImageItem>
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={Images.slice(0, 4).map((img) => img.src)}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </ImageWrapper>
        <ButtonShowMore>
          <Button variant="outline-secondary">
            <Link className="nav-link px-4 py-2" to="/images">
              Xem thêm...
            </Link>
          </Button>
        </ButtonShowMore>
      </Wrapper>
    </SectionWrapper>
  );
}
