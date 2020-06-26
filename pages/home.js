import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ProTip from '../src/components/ProTip'
import Link from '../src/components/Link'
import Copyright from '../src/components/Copyright'

import Drawer from '../src/components/Drawer'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box m={12}>
        <Drawer />
      </Box>

      <Box m={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Article Home Page
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the Landing Page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
