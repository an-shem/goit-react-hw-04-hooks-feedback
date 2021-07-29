import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 30px;
  }

  & p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 0.03em;
  }
  & p:not(:last-child) {
    margin-bottom: 10px;
  }
`;
