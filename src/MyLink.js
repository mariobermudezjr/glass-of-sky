import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const MyLink = () => (
  <Link href="/pricing" passHref>
    <Button component="a">Pricing</Button>
  </Link>
)

export default MyLink
