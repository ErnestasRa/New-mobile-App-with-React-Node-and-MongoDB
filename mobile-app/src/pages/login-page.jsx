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
import { post } from '../plugins/http'

const LoginPage = () => {
    const emailRef = React.useRef()
    const passwordRef = React.useRef()

    async function loginUser() {
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        const res = await post('login', userData)
        console.log(res.user.secret)
        if(!res.error){
            localStorage.setItem('secret', res.user.secret)
        }

    }

  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh'}}>
                <TextField id="standard-basic" inputRef={emailRef} label="Email" variant="standard" />
                <TextField id="standard-basic" inputRef={passwordRef} label="Password" variant="standard" />
                <Button onClick={loginUser}>Login</Button>
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