import {} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

type BaseLayoutProps ={
    children:React.ReactNode,
    appBarTitle:string
}

export function BaseLayout({children,appBarTitle}:BaseLayoutProps){
    return(
        <>
        <AppBar>
            <Toolbar>
                <Typography variant='h5'>{appBarTitle}</Typography>
            </Toolbar>
        </AppBar>
        <Box>
            {children}
        </Box>
        </>
    )
}