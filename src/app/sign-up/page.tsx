'use client'

import FormSignUp from '@/components/FormSignUp'
import Auth from '@/templates/Auth'

export default function Main() {
  return (
    <Auth title="Sign Up">
      <FormSignUp />
    </Auth>
  )
}
