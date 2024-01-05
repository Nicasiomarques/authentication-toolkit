import React from "react";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useZodForm = (zodSchema: z.ZodSchema<any>, initialValue = {}) => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>();
  const [success, setSuccess] = React.useState<string | undefined>();
  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: initialValue,
  });

  return {
    isPending,
    startTransition,
    error,
    setError,
    success,
    setSuccess,
    form,
  };
};
