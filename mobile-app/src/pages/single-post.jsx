import React from 'react'
import { get } from '../plugins/http'
import {
    Container,
    Paper,
    Box,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material'
import PostCard from '../components/post-component'

const SinglePost = () => {
    const [post, setPost] = React.useState([])
    const postId = localStorage.getItem('id')

   async function getPage() {
    const res = await get('singlepost/' + postId)
    setPost(res[0])
   } 

   React.useEffect(() => {
    getPage()
   }, [])

  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh', gap: 2}}> 
                <PostCard 
                    photo={post.photo}
                    title={post.title}
                />
            </Box>
        </Paper>
    </Container>
  )
}

export default SinglePost