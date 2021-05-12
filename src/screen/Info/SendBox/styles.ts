import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.textarea`
  background-color: ${(props) => props.theme.backgrounds.dark};
  color: ${(props) => props.theme.colors.text};

  height: calc(100vh - 10rem);
  max-height: calc(100vh - 10rem);

  padding: 0.7rem;
  overflow-y: auto;
  border: 0;

  outline: 0;
  border-radius: 8px;
  resize: none;

  font-weight: 300;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 500;

  padding: 0px 8px;
  padding-bottom: 4px;

  svg {
    cursor: pointer;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(80%);
    }
  }

  .send-svg {
    transform: rotate(45deg);
  }
  .headers-svg {
    margin-left: 0.8rem;
  }

  .send-headers {
    display: flex;
    align-items: center;
  }
`;
