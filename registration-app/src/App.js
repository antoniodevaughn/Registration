
//Login.js
import Stack from '@mui/material/Stack';
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button, Typography, Link, Checkbox,FormControlLabel } from "@mui/material";

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "90vh",
        width: 600,
        margin: "20px auto"
    }

    const btnstyle={
        
        borderRadius: 25,
        
    }
        const textfield={
            margin: "10px"
        }
        
    return(
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <html>
                    <body>
                <h1>Registration</h1>
                </body>
                </html>
                
                </Grid> 
                <p></p>
        <TextField label="First Name (case sensitve)" placeholder="Enter First Name" fullWidth required></TextField>
        <p></p>
        <TextField label="Last Name (case sensitve)" placeholder="Enter Last Name" fullWidth required></TextField>
        <p></p>
        <TextField label="Username or Email Address" placeholder="Enter Username" fullWidth required></TextField>
        <p></p>
        <TextField label="Phone Number" placeholder="Enter Phone Number" type="Phone Number" fullWidth required></TextField>    
        <p></p>
        <TextField label="Password (case sensitive)" placeholder="Enter Password" type="password" fullWidth required></TextField>
        <p></p>
        <TextField label="Confirm Password" placeholder="Enter Confirm Password" type="Confirm Password" fullWidth required></TextField>    
       <p></p>
       <Stack spacing={10} direction="row">
        <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="Donor"
            />
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="NCC Staff"
            />
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="Case Manager"
            />
            </Stack>
            <p></p>
            
            <p></p>
            
            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                   Register
            </Button>
           

                <Typography style={textfield}>
                    <Link href= "#">
                    <Grid align = "center">
                   
                   
                    </Grid>
                        
                    </Link>
              
            </Typography>
            
            
            
        </Paper>
        </Grid>
    )
}

export default Login;

