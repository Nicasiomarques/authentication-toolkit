"use client";
import * as z from "zod";
import React from "react";

import { CardWrapper, FormMsgError, FormMsgSuccess, CustomField } from "@/app/components/auth";
import { Form, Button } from "@/app/components/ui";
import { LoginSchema } from "@/app/schemas/login";
import { fieldConfigs } from "./fields-config";
import { login } from "@/app/actions";
import { useZodForm } from "../useZodForm";


export const LoginForm = () => {
  const { form, error, setError, success, setSuccess, isPending, startTransition } = useZodForm(LoginSchema, {
      email: "",
      password: "",
    }
  );

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
