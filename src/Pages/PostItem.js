import { Card, CardContent, CardHeader, Chip, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const PostItem = ({ data }) => {
    return (
        <Grid item lg={4} md={6} sm={12} sx={{}}>
            <Card variant="outlined" sx={{ p: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: 4, height: 300, }}
            >
                <CardHeader
                    sx={{ height: 60 }}
                    title={data.title}
                    subheader={`Reactions: ${data.reactions}`}
                >
                </CardHeader>
                <CardContent sx={{ height: 140, overflow: 'auto',color:'#757575' }}>
                    {data.body}
                </CardContent>
                <Stack spacing={2} direction="row" sx={{ pt: 1, }}>
                    {
                        data.tags.map(el => {
                            return <Chip
                            color="secondary"

                                label={el}
                                variant="contained"
                            />
                        })
                    }
                </Stack>

            </Card>
        </Grid>
    )
}

export default PostItem