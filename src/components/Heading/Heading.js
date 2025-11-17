import PropTypes from 'prop-types';

import { StyledSection, StyledHeading } from './Heading.style';

export const Heading = ({ size = 'base', title, color, icon, iconPosition = 'right' }) => {
    return (
        <StyledHeading className={`heading-${size}`}>
            {iconPosition === 'left' && icon}
            <StyledSection $size={size} $color={color}>
                {title}
            </StyledSection>
            {iconPosition === 'right' && icon}
        </StyledHeading>
    );
};

Heading.propTypes = {
    size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'base', 'lg', 'xl', 'xxl']),
    title: PropTypes.string,
    icon: PropTypes.object,
    color: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right']),
};
