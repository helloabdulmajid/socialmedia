import React from 'react'
import { Box } from '@mui/system';


const Sidebar = () => {
  return (
    <>
    <Box bgcolor="red" flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
        Sidebar
    </Box>
    </>
  )
}

export default Sidebar