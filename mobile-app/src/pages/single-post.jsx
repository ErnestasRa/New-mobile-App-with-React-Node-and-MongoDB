import React from 'react'
import { get } from '../plugins/http'
import {
    Container,
    Paper,
    Box,
    Button,
} from '@mui/material'
import PostCard from '../components/post-component'
import { useNavigate } from 'react-router-dom'

const SinglePost = () => {
    const [post, setPost] = React.useState([])
    const postId = localStorage.getItem('id')
    const userId = localStorage.getItem('secret')
    const navigate = useNavigate()

   async function getPage() {
    const res = await get('singlepost/' + postId)
    setPost(res[0])
   } 

   React.useEffect(() => {
       if(!localStorage.getItem('secret')) {
        navigate('/error')
       } else {
        getPage()
       }
   })

  return (
    <Container>
        <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'30vh', gap: 2}}> 
                <PostCard 
                    photo={post.photo}
                    title={post.title}
                />
                <Button>All posts</Button>
            </Box>
        </Paper>
    </Container>
  )
}

export default SinglePost