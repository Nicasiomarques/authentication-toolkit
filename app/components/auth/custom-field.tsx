import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/app/components/ui";

type CustomFieldProps = {
  control: any;
  name: string;
  disabled?: boolean;
  placeholder: string;
  type: string;
  label: string;
};

export const CustomField = ({ control, name, label, ...rest }: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
