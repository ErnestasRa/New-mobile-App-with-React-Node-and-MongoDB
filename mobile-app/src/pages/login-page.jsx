import React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material'

const LoginPage = () => {
  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh'}}>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <Button>Login</Button>
                <Typography
                    color="text.secondary"
                    sx={{fontSize:'13px'}}>
                    Dont have an account? 
                    <Link href='/'> Register</Link>
                </Typography>
            </Box>
        </Paper>
    </Container>
  )
}

export default LoginPage