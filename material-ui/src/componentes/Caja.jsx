import { Box,Typography } from '@mui/material'
import React from 'react'

export default function Caja() {
  return (
    <div>
      <Box
  sx={{
    border: 2,
    borderColor: "peru",
    p: 5,
    bgcolor: "#111",
    color: "white",
  }}
>
  <Typography align="center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas
    laudantium, enim praesentium maiores beatae impedit vero dolorum
    dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus aliquid
    voluptate molestias laborum!
  </Typography>
</Box>

    </div>
  )
}
