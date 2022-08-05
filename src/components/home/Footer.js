import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#232F3E',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
    height: 300,
    margin: 10,
    display: "flex",
    justifyContent: 'space-between',
    textJustify: 'center',
    fontSize:20
}));

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item >
                        {/* <Box style={{display:"flex",  }}> */}
                        <Box>
                            <h2>Get to Know Us</h2>
                            <Typography>About Us</Typography>
                            <Typography>Careers</Typography>
                            <Typography>Cares</Typography>
                            <Typography>Press Releases</Typography>
                        </Box>
                        <Box>
                            <h2>Connect with Us</h2>
                            <Typography>Twitter</Typography>
                            <Typography>Facebook</Typography>
                            <Typography>Instagram</Typography>

                        </Box>
                        <Box>
                            <h2>Make Money with Us</h2>
                            <Typography>Sell with us</Typography>
                            <Typography>Advertise</Typography>
                            <Typography>Global Selling</Typography>

                        </Box>
                        <Box>
                            <h4>Let Us Help You</h4>
                            <Typography>Return Center</Typography>
                            <Typography>Your Account</Typography>
                            <Typography>100% purchase protection</Typography>

                        </Box>
                        {/* </Box> */}


                    </Item>

                    <Grid item xs={12} spacing={0} style={{ backgroundColor: "#232F3E", Top: 0, marginTop: 10, marginRight: 10, marginLeft: 10, paddingTop: 0 }}>
                        <Box style={{ fontSize: 10, textAlign: "center", marginTop: -50, color: "white", }}>
                            <h2 > powered by CBNITS</h2>
                            <h2 > All Rights reserved by @CBNITS</h2>
                        </Box>
                    </Grid>


                </Grid>


            </Grid>
        </Box>
    );
}
