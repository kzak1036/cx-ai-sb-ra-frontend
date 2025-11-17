import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Content, Header, LayoutWrapper, Navigation } from './Layout.style';
import Logo from '../../config/assets/sysco_logo.png';

// Import feature components directly so they are accessible from Layout
import { RestaurantIntelligence } from '../../pages/ResultPage/components/RestaurantIntelligence';
import { MenuIntelligence } from '../../pages/MenuIntelligence/components/MenuIntelligence';
import { MenuAnalytics } from '../../pages/MenuAnalytics/components';

export const Layout = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    // State to control page-level tab behavior
    const [activeTab, setActiveTab] = useState("restaurant");

    // Pull the latest available result from sessionStorage so Layout can show features directly
    const [result, setResult] = useState(null);
    useEffect(() => {
        try {
            const stored = sessionStorage.getItem('lastResult');
            if (stored) setResult(JSON.parse(stored));
        } catch (_) {
            // ignore storage errors
        }
    }, []);

    return (
        <LayoutWrapper>
            <Header>
                <a href={'/'}>
                    <img src={Logo} width="130" alt={'cx-ai-sb-ra-frontend'} title={'v.0.4'} />
                </a>

                <Navigation>
                    <Button
                        variant="text"
                        sx={{ mr: 2 }}
                        onClick={() => setActiveTab("restaurant")}
                    >
                        Restaurant Intelligence
                    </Button>
                    <Button
                        variant="text"
                        sx={{ mr: 2 }}
                        onClick={() => setActiveTab("menu")}
                    >
                        Menu Intelligence
                    </Button>

                    <Button
                        variant="text"
                        sx={{ mr: 2 }}
                        onClick={() => setActiveTab("analytics")}
                    >
                        Menu Analytics
                    </Button>
                </Navigation>
            </Header>

            {/* LOGOUT MODAL */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '300px',
                        height: '150px',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        color: '#000',
                        border: '1px solid #0281c5',
                        gap: 2,
                    }}
                >
                    <Typography variant="h6">Logging out...</Typography>
                    <CircularProgress />
                </Box>
            </Modal>

            {/* MAIN CONTENT: controlled by activeTab */}
            <Content>
                {activeTab === 'restaurant' && (
                    result ? (
                        <RestaurantIntelligence metadata={result?.extractedMenuData?.metadata} />
                    ) : (
                        <Typography variant="body1">No data available. Please upload a menu to proceed.</Typography>
                    )
                )}
                {activeTab === 'menu' && (
                    result ? (
                        <MenuIntelligence
                            categories={result?.extractedMenuData?.categories}
                            ingredientsData={result?.ingredientsData}
                        />
                    ) : (
                        <Typography variant="body1">No data available. Please upload a menu to proceed.</Typography>
                    )
                )}
                {activeTab === 'analytics' && (
                    result ? (
                        <MenuAnalytics calculatedMenuData={result?.calculatedMenuData} />
                    ) : (
                        <Typography variant="body1">No data available. Please upload a menu to proceed.</Typography>
                    )
                )}
            </Content>
        </LayoutWrapper>
    );
};
