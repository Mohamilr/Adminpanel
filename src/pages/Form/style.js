import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const FormStyle = styled.div`
  margin: 1.25rem;
`;

export const FormContainer = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0.063rem 0.063rem 0.125rem 0.125rem #eee;
  margin: 1.25rem 0;
  padding-top: 0.7rem;

  > h3 {
    margin: 0 1.25rem 1.25rem;
    font-size: 1.25rem;
  }
`;

export const FormArea = styled.div`
  padding: 1.25rem 7.25rem;

  @media ${device.mobile} {
    padding: 1.25rem 2.25rem;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem;
`;
