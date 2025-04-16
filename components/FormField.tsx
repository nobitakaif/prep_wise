
import { Input } from "@/components/ui/input"
import {
    
    FormControl,
    
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { Ref } from "react";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password",
  ref? : Ref<HTMLInputElement>
}

const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
    ref
  }: FormFieldProps<T>) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
              <Input
                className="input"
                type={type}
                placeholder={placeholder}
                {...field}
                ref={ref}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  
  export default FormField;