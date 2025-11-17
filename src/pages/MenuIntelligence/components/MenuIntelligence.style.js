import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    /* Make card full-width and flat (no box/shadow) */
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    margin: ${({ theme }) => theme.spacing.md} 0;
    padding: 0;
    border: none;
`;

export const CardBody = styled.div`
    margin-top: ${({ theme }) => theme.spacing.md};
    font-size: 14px;
    color: ${({ theme }) => theme.palette.colors.gray900};
`;

export const Category = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CategoryHeader = styled.div`
    cursor: pointer;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.palette.colors.gray100};
    border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: ${({ theme }) => theme.border.radius.md};
    color: ${({ theme }) => theme.palette.secondary.main};

    &:hover {
        background: ${({ theme }) => theme.palette.colors.gray200};
    }
`;

export const ItemWrapper = styled.div`
    margin-left: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.5;
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
    margin: ${({ theme }) => theme.spacing.xs} 0 0;
`;

export const IngredientItem = styled.li`
    background: ${({ theme }) => theme.palette.colors.gray200};
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: ${({ theme }) => theme.border.radius.full};
    padding: 4px 10px;
    margin: 4px;
    font-size: 13px;
    color: ${({ theme }) => theme.palette.colors.gray900};
`;

// Page-level wrapper to provide padding around the full-width content
export const Wrapper = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.lg};
`;