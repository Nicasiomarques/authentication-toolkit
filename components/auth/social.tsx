'use client'

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";

export const Social = () => {
  const btnSharedProps = {
    size: "lg",
    className: "w-full",
    variant: "outline",
  } as const;

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button {...btnSharedProps} onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button {...btnSharedProps} onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};
