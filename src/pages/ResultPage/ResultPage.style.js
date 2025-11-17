import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    font-family: Arial, sans-serif;
    background: ${({ theme }) => theme.palette.colors.gray100};
    color: ${({ theme }) => theme.palette.colors.gray900};
`;

export const Tabs = styled.div`
    display: flex;
    border-bottom: 2px solid ${({ theme }) => theme.palette.colors.gray200};
    margin-bottom: 1rem;
`;

export const Tab = styled.button`
    padding: 0.5rem 1rem;
    border: none; /* simpler, safer */
    border-bottom: ${(props) => (props.active ? `3px solid ${props.theme.palette.primary.main}` : "3px solid transparent")};
    background: none;
    cursor: pointer;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? props.theme.palette.primary.main : props.theme.palette.colors.gray600)};

    display: flex;
    align-items: center;
    gap: 0.5rem; /* ensures text + icon have space */

    &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
        background: ${({ theme }) => theme.palette.colors.gray200};
    }
`;
