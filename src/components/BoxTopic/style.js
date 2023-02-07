import styled from "styled-components";

const BoxTopicContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(10px);
  @keyframes fadeInAnimation {
    to {
      opacity: 1;
    }
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 35%;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: hsl(0, 0%, 80%);
    }
    to {
      border-right-color: transparent;
    }
  }

  h2 {
    font-size: 2.2em;
    font-family: "Source Code Pro", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    overflow: hidden;
    border-right: 2px solid hsl(0, 0%, 80%);
    white-space: nowrap;
    animation: typewriter 1s steps(44) 1s 1 normal both,
      blinkTextCursor 500ms infinite;
  }

  p {
    font-size: 1.3em;
    font-family: "Source Code Pro", sans-serif;
    font-weight: 400;
    opacity: 0;
    animation: fadeInAnimation ease-in;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

export { BoxTopicContainer };
