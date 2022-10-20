import React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Typography,
    Button,
} from '@mui/material'

const RegisterPage = () => {
  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh'}}>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                <Button>Register</Button>
            </Box>
        </Paper>
    </Container>
  )
}

export default RegisterPage