import React from 'react'
import { Box } from '@mui/system';


const Rightbar = () => {
  return (
    <>
    <Box bgcolor="purple" flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
        RightBar
    </Box>
    </>
  )
}

export default Rightbar