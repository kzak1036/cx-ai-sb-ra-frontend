import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.colors.gray100};
  color: ${({ theme }) => theme.palette.colors.gray900};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background: ${({ theme }) => theme.palette.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.gray200};
  margin-bottom: 20px;

  h1 {
    font-size: 30px;
  }
`;

export const Navigation = styled.div`
  display: block;
`;

export const Content = styled.div`
  display: flex;
  padding: 0 20px;
  margin-bottom: 20px;
`;
