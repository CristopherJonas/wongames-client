'use client'

import FormSignIn from '@/components/FormSignIn'
import Auth from '@/templates/Auth'

export default function Main() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  )
}
