"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CardWrapper, FormMsgError, FormMsgSuccess, CustomField } from "@/components/auth";
import { Form, Button } from "@/components/ui";
import { LoginProps, LoginSchema } from "@/app/schemas/login";
import { fieldConfigs } from "./fields-config";
import { login } from "@/app/actions";

export const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>();
  const [success, setSuccess] = React.useState<string | undefined>();

  const form = useForm<LoginProps>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      login(values).then(data => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backBtnLabel="Don't have an account?"
      backBtnHref='/auth/register'
      showSocial
    >
      <Form {...form}>
        <form className='my-6' onSubmit={form.handleSubmit(handleSubmit)}>
          {fieldConfigs.map(config => (
            <div className='my-4' key={config.name}>
              <CustomField
                control={form.control}
                disabled={isPending}
                key={config.name}
                {...config}
              />
            </div>
          ))}

          <div className='flex flex-col gap-4 my-2'>
            <FormMsgError msg={error} />
            <FormMsgSuccess msg={success} />
          </div>

          <Button disabled={isPending} type='submit' className='w-full'>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
