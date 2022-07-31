import styled from "styled-components";

export const SignUpFormContainer = styled.form`
  margin-bottom: 24px;

  .forgot-password {
    margin-top: 12px;
    margin-bottom: 24px;
    align-self: flex-end;
    color: ${props => props.theme.palette.common.black};
  }

  .error-message {
    text-align: center;
  }

  button {
    margin-top: 48px;
  }
`