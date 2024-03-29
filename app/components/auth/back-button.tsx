"use client";
import Link from "next/link";

import { Button } from "@/app/components/ui/button";

type BackButtonProps = {
  href: string;
  label: string;
};

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant='link' className="font-normal w-full" size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
