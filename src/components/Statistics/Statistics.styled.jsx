import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;

  & p {
    display: flex;
    justify-content: space-between;
    width: 72%;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #5c6061;
  }
  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const PositivePercentage = styled.div`
  margin-top: 30px;
  font-style: bold;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.03em;

  & span {
    margin-right: 20px;
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 1px;
  margin-bottom: 20px;
  border: 1px solid #5c6061;
`;
