import { Typography, Card, Stack, CardHeader } from '@mui/material'
import { letterSpacing } from '@mui/system'

import React from 'react'
import { Link } from "react-router-dom"

const Navabr = () => {
    return (
        <Card varient='outlined' sx={{ display: 'flex', justifyContent: 'space-around', alignItems: "center", height: 60, color: 'white', bgcolor: '#A555EC' }}>

            <CardHeader title='Post api' sx={{ fontSize: 25, color: 'white', height: 10 }}  ></CardHeader>
            <Stack direction='row' spacing={2}>
                <Link to='/'>
                    Posts
                </Link>

                {/* these are dummy links for styling purpose */}
                <Link to="/">
                    about
                </Link>

                <Link to="/">
                    contact
                </Link>


            </Stack>

        </Card>



    )
}

export default Navabr