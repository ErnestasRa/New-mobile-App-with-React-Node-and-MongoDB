import React from 'react'
import {
    Container,
    Paper,
    Box,
    Button,
    TextField,
} from '@mui/material'
import CardComponent from '../components/card-component'
import { post } from '../plugins/http'

const UserProfilePage = () => {
    const [picture, setPicture] = React.useState('')
    const [toggle, setToggle] = React.useState('none')
    const photoRef = React.useRef()
    const userSecret = localStorage.getItem('secret')

    async function getUserData(){
        const userId = {
            id: userSecret,
        }
        const res = await post('userinfo', userId)
        setPicture(res[0].photo)
    }

    async function changeProfilePhoto() {
        const newPhoto = {
            url: photoRef.current.value,
            id: userSecret,
        }
        const res = await post('imageurl', newPhoto)
        setPicture(res.update.photo)

        photoRef.current.value = ''
        setToggle('none')
    }

    const toggleVisibility = () => {
        if(toggle === 'visible') {
            setToggle('none')
        } else {
            setToggle('visible')
        }
    }

    React.useEffect(() => {
        getUserData()
    }, [picture])

  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh'}}>
                <CardComponent 
                    url={picture}
                />
                <Button onClick={toggleVisibility}>Change Photo</Button>
                <Button>All Posts</Button>
                <Box display={toggle}>
                    <TextField id="standard-basic" inputRef={photoRef} label="New Photo" variant="standard"/>
                    <Button onClick={changeProfilePhoto}>Change photo</Button>
                </Box>
            </Box>
        </Paper>
    </Container>
  )
}

export default UserProfilePage