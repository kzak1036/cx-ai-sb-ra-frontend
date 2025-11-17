import styled from "styled-components";

export const CardBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 14px;
  color: ${({ theme }) => theme.palette.colors.gray900};
`;

export const ItemWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.palette.colors.gray100};
  border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.border.radius.md};
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IngredientItem = styled.li`
  background: ${({ theme }) => theme.palette.colors.gray200};
  border: 1px solid ${({ theme }) => theme.palette.colors.gray250};
  border-radius: ${({ theme }) => theme.border.radius.full};
  padding: 4px 10px;
  margin: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.colors.gray900};
`;

export const Metric = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.sm};
  border-left: 3px solid ${({ theme }) => theme.palette.secondary.main};
`;