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
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const emailRef = React.useRef()
    const passwordRef = React.useRef()
    const navigate = useNavigate()

    async function loginUser() {
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        const res = await post('login', userData)
        
        if(res.error) throw new Error ('user not found!')

        if(!res.error) {
         localStorage.setItem('secret', res.user.secret)
         navigate('/loggedin')
        }

        if(!res.error) 



        emailRef.current.value = ''
        passwordRef.current.value = ''
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