import React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Button,
} from '@mui/material'
import { post } from '../plugins/http'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const photoRef = React.useRef()
    const titleRef = React.useRef()
    const userId = localStorage.getItem('secret')
    const navigate = useNavigate()

    async function createPost() {
        const postData = {
            secret: userId,
            photo: photoRef.current.value,
            title: titleRef.current.value,
        }
        const res = await post('createpost', postData)
        if(!res.error){
            navigate('/allposts')
        }
    }

    return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh', gap: 2}}> 
                <TextField id="standard-basic" inputRef={photoRef} label="Photo" variant="standard" />
                <TextField id="standard-basic" inputRef={titleRef} label="Title" variant="standard" />
            </Box>
            <Button onClick={createPost}>Create a post</Button>
        </Paper>
    </Container>
  )
}

export default CreatePost