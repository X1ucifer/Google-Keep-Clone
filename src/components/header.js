import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#FBBC04' }}>
            <Toolbar>
                <EmojiObjectsIcon />
                <Typography variant="h6" color="inherit">
                    GKeep
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;