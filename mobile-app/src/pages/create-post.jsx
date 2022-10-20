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

const CreatePost = () => {
    const photoRef = React.useRef()
    const titleRef = React.useRef()
    const userId = localStorage.getItem('secret')

    async function createPost() {
        const postData = {
            id: userId,
            photo: photoRef.current.value,
            title: titleRef.current.value,
        }
        const res = await post('createpost', postData)
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