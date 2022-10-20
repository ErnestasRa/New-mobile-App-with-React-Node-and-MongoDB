import React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Typography,
    Button,
    Link,
} from '@mui/material'
import { post } from '../plugins/http'

const RegisterPage = () => {
    const emailRef = React.useRef()
    const passwordRef = React.useRef()
    const confirmPassRef = React.useRef()

    async function sendRegisterInfo() {
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPassRef.current.value,
        }

        const res = await post('register', userData)
        console.log(res)

        emailRef.current.value = ''
        passwordRef.current.value = ''
        confirmPassRef.current.value = ''
    }

  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh'}}>
                <TextField id="standard-basic" inputRef={emailRef} label="Email" variant="standard" />
                <TextField id="standard-basic" inputRef={passwordRef} label="Password" variant="standard" />
                <TextField id="standard-basic" inputRef={confirmPassRef} label="Confirm Password" variant="standard" />
                <Button onClick={sendRegisterInfo}>Register</Button>
                <Typography
                    color="text.secondary"
                    sx={{fontSize:'13px'}}>
                    Already have an account? 
                    <Link href='/login'> Sign in</Link>
                </Typography>
            </Box>
        </Paper>
    </Container>
  )
}

export default RegisterPage