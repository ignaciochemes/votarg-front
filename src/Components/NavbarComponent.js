import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

export default function NavbarComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{
                backgroundColor: "#000",
            }}>
                <Toolbar>
                    <HowToVoteIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        VOTARG
                    </Typography>
                    <Typography variant="h6" component="div" sx={{
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        mr: 2,
                        display: { xs: 'none', sm: 'flex', md: 'flex' },
                    }}>
                        Presidenciales 2023
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}