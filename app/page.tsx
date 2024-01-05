import { LoginButton } from "@/app/components/auth/login-button";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <main className='h-full flex flex-col items-center justify-center bg-sky-400'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl text-white drop-shadow-lg'>Auth</h1>
        <p className='text-white text-lg'>A simple authentication service</p>
      </div>
      <LoginButton>
        <Button size='lg' variant='secondary' className='mt-6'>
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
}
