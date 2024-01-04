import React from "react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { BackButton, Social } from "@/components/auth";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backBtnLabel: string;
  backBtnHref: string;
  showSocial?: boolean;
};
export const CardWrapper = ({
  children,
  backBtnHref,
  backBtnLabel,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <header className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-semibold text-3xl'>Auth</h1>
          <p className='text-muted-foreground text-sm'>{headerLabel}</p>
        </header>
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backBtnLabel} href={backBtnHref} />
      </CardFooter>
    </Card>
  );
};
