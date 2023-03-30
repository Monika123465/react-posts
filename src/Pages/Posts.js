import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid,  Box } from '@mui/material'
import PostItem from './PostItem'



const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/posts').then(res => setPosts(res.data.posts))

  }, [])


  return (
    <Box sx={{ width: '80%', m: "auto", my: 4 }}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {
          posts.map(data =>
            <PostItem key={data.id} data={data} />

          )
        }

      </Grid>
    </Box>
  )
}

export default Posts