'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
  const btnSharedProps = {
    size: "lg",
    className: "w-full",
    variant: "outline",
  } as const;

  const loginWith = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button {...btnSharedProps} onClick={() => loginWith('google')}>
        <FcGoogle />
      </Button>
      <Button {...btnSharedProps} onClick={() => loginWith('github')}>
        <FaGithub />
      </Button>
    </div>
  );
};
