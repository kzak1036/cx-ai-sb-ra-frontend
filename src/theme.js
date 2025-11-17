const theme = {
    palette: {
        primary: {
            main: '#0281c5',
        },
        secondary: {
            main: '#6db33f',
        },
        error: {
            main: '#EC0A05',
            background: '#d60000',
        },
        warning: {
            background: '#fdf7dc',
        },
        success: {
            main: '#56b146',
        },
        status: {
            processing: '#f4a118',
            completed: '#018431',
            error: '#E71313',
        },
        colors: {
            gray100: '#fafafa',
            gray200: '#e4e5e6',
            gray250: '#dedfdf',
            gray300: '#dadada',
            gray400: '#aaacae',
            gray500: '#a1a1a1',
            gray600: '#6A737B',
            gray900: '#2a2f33',
            blue500: '#008cd2',
            white: '#ffffff',
            blue: '#008CD2',
        },
    },
    typography: {
        families: {
            main: 'myriad-pro, sans-serif',
        },
        fontSizes: {
            xxs: '10px',
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '24px',
            xxl: '32px',
        },
        buttonSizes: {
            base: {
                width: '122px',
                height: '32px',
            },
            xl: {
                width: '144px',
                height: '32px',
            },
        },
        lineHeights: {
            xs: '1.4',
            sm: '1.5',
            base: '1.5',
            lg: '1.5',
            xl: '1.4',
            xxl: '1.3',
        },
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        xxxl: '64px',
    },
    breakpoints: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
    },
    shadow: {
        card: {
            main: '0 0 10px 0 rgba(42, 47, 51, 0.1)',
        },
        panel: {
            main: '0px 0px 10px 0px #00000040',
        },
        page: {
            main: '0px 0px 10px 0px #00000040',
        },
    },
    transition: {
        all: 'all 0.2s ease-in-out',
    },
    border: {
        radius: {
            xs: '3px',
            sm: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            xxl: '16px',
            xxxl: '24px',
            full: '9999px',
        },
    },
    header: {
        height: '68px',
    },
    zIndex: {
        min: 10,
        low: 100,
        medium: 500,
        high: 1000,
        max: 5000,
    },
};

export default theme;
