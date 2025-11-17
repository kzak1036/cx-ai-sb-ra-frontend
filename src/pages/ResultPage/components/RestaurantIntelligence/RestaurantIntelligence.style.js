import styled from "styled-components";

export const CardBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.palette.colors.gray900};
  line-height: 1.6;

  p {
    margin: ${({ theme }) => theme.spacing.sm} 0;
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.palette.colors.gray100};
    border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: ${({ theme }) => theme.border.radius.md};
  }
`;

export const List = styled.ul`
  padding-left: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};

  li {
    background: ${({ theme }) => theme.palette.colors.gray200};
    border: 1px solid ${({ theme }) => theme.palette.colors.gray250};
    border-radius: ${({ theme }) => theme.border.radius.full};
    padding: 4px 10px;
    color: ${({ theme }) => theme.palette.colors.gray900};
    font-size: 13px;
  }
`;