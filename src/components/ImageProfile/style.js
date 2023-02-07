import styled from "styled-components";

const ImageProfileContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  div {
    width: 250px;
    height: 250px;
    transform: rotate(0deg);
    background-color: #c91842;
    border-radius: 12px;
    z-index: 1;
    animation: rotation 5s;
    animation-fill-mode: forwards;

    @keyframes rotation {
      to {
        transform: rotate(-10deg);
      }
    }
  }

  img {
    width: 250px;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
  }
`;

export { ImageProfileContainer };
