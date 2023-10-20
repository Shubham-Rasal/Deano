import { useState, useEffect, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorSnackbar({open, openChangeHandler, message}) {
    const [open, setOpen] = useState(props.open);

    const theme = createTheme({
        palette: {
            primary: { main: '#ce99aa' },
            secondary: {
                main: '#f8a3aa',
            },
        },
    })

    //   const handleClick = () => {
    //     setOpen(true);
    //   };

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        props.openChangeHandler(open)
    }, [open])


    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical:"bottom", horizontal:"center"}}>
                    <Alert color="secondary" onClose={handleClose} severity="success" sx={{ width: '100%' }} TransitionComponent={TransitionUp}>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </ThemeProvider>
    );
}