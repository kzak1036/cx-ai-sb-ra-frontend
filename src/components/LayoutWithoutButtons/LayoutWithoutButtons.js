import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Content, Header, LayoutWrapper } from '../Layout/Layout.style';
import Logo from '../../config/assets/sysco_logo.png';

export const LayoutWithoutButtons = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <LayoutWrapper>
            <Header>
                <a href={'/'}>
                    <img src={Logo} width="130" alt={'cx-ai-sb-ra-frontend'} title={'v.0.4'} />
                </a>
            </Header>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Logging out...
                    </Typography>
                    <CircularProgress />
                </Box>
            </Modal>
            <Content>
                <Outlet />
            </Content>
        </LayoutWrapper>
    );
};
