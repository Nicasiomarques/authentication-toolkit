import { auth } from '@/auth'

export default async function Settings() {
  const session = await auth()
  return(
    <div>{JSON.stringify(session, null, 2)}</div>
  )
}
