import styled from 'styled-components';

import theme from '../../theme';

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const StyledSection = styled.h2(({ $size, $color }) => {
    return `
    font-weight: bold;
    color: ${$color ? $color : theme.palette.colors.gray900};
    margin: 0;
    font-size: ${theme.typography.fontSizes[$size]};
    `;
});
