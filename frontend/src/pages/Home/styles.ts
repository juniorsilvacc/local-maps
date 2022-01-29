import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg") no-repeat 600px bottom;
  background-color: ${(props) => props.theme.background};
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 500;
  color: ${(props) => props.theme.primary};
  padding-bottom: 35px;
  text-align: center;
  max-width: 500px;
  @media (max-width: 480px) {
    font-size: 42px;
  }
`;


export const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.primary};
  padding-bottom: 40px;
  max-width: 600px;
  line-height: 28px;
  @media (max-width: 481px) {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.secondery};
  color: ${(props) => props.theme.white};
  font-weight: 600;
  width: 350px;
  height: 60px;
  border: none;
  border-radius: 6px;
  position: relative;
  &:hover {
    filter: opacity(0.9);
  }
  @media (max-width: 480px) {
    width: 300px;
    font-size: 16px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 70%;
`;