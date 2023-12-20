import styled from "styled-components";
import { colors } from "../../_principles/colors";

export const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 60px 0;
  @media only screen and (max-width: 425px) {
    padding: 40px 0;
  }
  .react-simple-image-viewer__close {
    opacity: 1;
    font-size: 60px;
    right: 20px;
    top: 10px;
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 38px;
  margin-bottom: 10px;
  // @media only screen and (max-width: 992px) {
  //   margin-bottom: 15px;
  // }
`;

export const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  @media only screen and (max-width: 992px) {
    padding: 0 8px;
  }
`;

export const ImageWrapper = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
  @media only screen and (max-width: 425px) {
    padding: 0 8px;
  }
  #ReactSimpleImageViewer {
    z-index: 1021;
  }
`;

export const ImageColumn = styled.div`
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  // @media only screen and (max-width: 992px) {
  //   -ms-flex: 33.3333333333333%;
  //   flex: 33.3333333333333%;
  //   max-width: 33.3333333333333%;
  // }
  @media only screen and (max-width: 768px) {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
`

export const ImageItem = styled.div`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  background-color: #f7f7f7;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;

export const VideoWrapper = styled.div`
  margin-bottom: 50px;
  video {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    iframe {
      height: 300px;
    }
  }
`