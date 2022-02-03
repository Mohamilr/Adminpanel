import styled from "styled-components";

export const DashboardStyle = styled.div`
  margin: 1.25rem;
`;

export const TableContainer = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0.063rem 0.063rem 0.125rem 0.125rem #eee;
  margin: 1.25rem 0;
  padding: 0.625rem;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-align: center;
  padding: 0.625rem;

  > p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
