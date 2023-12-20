import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../_principles/colors";

function Header() {
  const Wrapper = styled.div`
    .navbar-brand {
      font-size: 32px;
    }
    a {
      font-size: 24px;
      font-weight: bold;
      &:hover {
        color: ${colors.pink} !important;
      }
    }
  `;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Wrapper className="container">
        <a
          className="navbar-brand"
          href="#home"
          style={{ color: colors.pink }}
        >
          G ♡ N
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a
              className="nav-link"
              href="#home"
              style={{ color: colors.black }}
            >
              Trang chủ
            </a>
            <a
              className="nav-link"
              href="#image"
              style={{ color: colors.black }}
            >
              Album cưới
            </a>
            <a
              className="nav-link"
              href="#bank"
              style={{ color: colors.black }}
            >
              Mừng cưới
            </a>
            <a
              className="nav-link"
              href="#timeline"
              style={{ color: colors.black }}
            >
              Sự kiện
            </a>
            <a
              className="nav-link"
              href="#message"
              style={{ color: colors.black }}
            >
              Gửi những lời chúc
            </a>
            {/* <a
              className="nav-link"
              href="#map"
              style={{ color: colors.black }}
            >
              Bản đồ
            </a> */}
            {/* <a
              className="nav-link"
              href="https://www.google.com/maps/place/20%C2%B024'60.0%22N+106%C2%B026'31.7%22E/@20.4165208,106.4419777,65m/data=!3m1!1e3!4m13!1m8!3m7!1s0x3135f967aa8dfbb5:0xc21f37c2cd3e6e1f!2zxJDDrG5oIFBow7luZywgS2nhur9uIFjGsMahbmcsIFRow6FpIELDrG5oLCBWaeG7h3QgTmFt!3b1!8m2!3d20.4205911!4d106.4494214!16s%2Fg%2F1hb_fhgtj!3m3!8m2!3d20.416658!4d106.442124?hl=vi&entry=ttu"
              style={{ color: colors.black }}
              target="_blank"
              rel="noreferrer"
            >
              Bản đồ
            </a> */}
          </Nav>
        </Navbar.Collapse>
      </Wrapper>
    </Navbar>
  );
}

export default Header;
