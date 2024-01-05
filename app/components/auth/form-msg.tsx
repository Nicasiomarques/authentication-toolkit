import { CheckCircledIcon, Cross1Icon } from "@radix-ui/react-icons";

type FormMsgProps = { msg?: string; };

export const FormMsgError = ({ msg }: FormMsgProps) => {
  if (!msg) return null;
  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <Cross1Icon className='h-4 w-4' />
      <p>{msg}</p>
    </div>
  );
};

export const FormMsgSuccess = ({ msg }: FormMsgProps) => {
  if (!msg) return null;
  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <CheckCircledIcon className='h-4 w-4' />
      <p>{msg}</p>
    </div>
  );
};
