import styled from "styled-components";

export const SignUpContainer = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 600px;
  flex: 1;
  align-self: flex-start;
  background-color: ${props => props.theme.palette.background.default};

  .title {
    margin-bottom: 24px;
    font-weight: bold;
  }

  .wrapper {
    margin: 64px auto;
    width: 100%;
    min-width: 300px;
    max-width: 70%;
    flex: 1;
  }

  .cta {
    font-weight: bold;
    color: ${props => props.theme.palette.common.black};
  }
`