import React from 'react'
import {
    Container,
    Paper,
    Box,
    Button,
    TextField,
} from '@mui/material'
import CardComponent from '../components/image-component'
import { useNavigate } from 'react-router-dom'
import { get } from '../plugins/http'
import PostCard from '../components/post-component'

const AllPosts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = React.useState([])

    const createPost = () => {
        navigate('/createpost')
    }
    
    async function getAllPosts() {
        const res = await get('allposts')
        setPosts(res)
    }

    async function getSinglePost(id) {
        const res = await get('singlepost/' + id)
        localStorage.setItem('id', id)
        navigate('/singlepost')
    }

    React.useEffect(() => {
        getAllPosts()
    }, [])

    return (
    <Container>
    <Paper sx={{display:'grid', justifyContent:'space-around', alignItems:'center', minHeight:'50vh', border:'1px solid black'}}>
        <Box sx={{display:'flex', flexDirection:'row', width:'100vh', gap: 2}}>
            {posts.map((postData, i) => {
                return <PostCard 
                    photo={postData.photo}
                    title={postData.title}
                    key={postData.id}
                    onClick={() => getSinglePost(postData.id)}
                />
            })}
        </Box>
        <Button onClick={createPost}>Create a post</Button>
    </Paper>
    </Container>
  )
}

export default AllPosts