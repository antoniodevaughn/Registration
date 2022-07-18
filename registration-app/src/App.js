
//Login.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "100vh",
        width: 600,
        margin: "20px auto"
    }

    const btnstyle={
        margin:"8px 0",
        borderRadius: 25
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
            


            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                   Confirm
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

