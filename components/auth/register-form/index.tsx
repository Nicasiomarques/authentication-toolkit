"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CardWrapper, FormMsgError, FormMsgSuccess, CustomField } from "@/components/auth";
import { Form, Button } from "@/components/ui";
import { RegisterProps, RegisterSchema } from "@/app/schemas/register";
import { fieldConfigs } from "./fields-config";
import { register } from "@/app/actions";

export const RegisterForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>();
  const [success, setSuccess] = React.useState<string | undefined>();

  const form = useForm<RegisterProps>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ''
    },
  });

  const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      register(values).then(data => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel='Create an account'
      backBtnLabel="already have an account?"
      backBtnHref='/auth/login'
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
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};