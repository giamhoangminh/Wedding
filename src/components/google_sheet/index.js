import styled from "styled-components";

function GoogleSheet() {
  const IframeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    iframe {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <IframeWrapper>
      <iframe
        src="https://docs.google.com/spreadsheets/d/18c1DTnNtXGJRuxHHKky6XVkxEGDVQc386z40ZQkPxJI/edit?usp=sharing"
        title="google sheet"
      ></iframe>
    </IframeWrapper>
  );
}

export default GoogleSheet;
