import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/shared/ui";
import { Input } from "~/shared/ui";

import { CreateTodoDto, createTodoSchema } from "../lib";

type CreateTodoFormProps = {
  onSubmit: (todo: CreateTodoDto) => void;
};

export function CreateTodoForm({ onSubmit }: CreateTodoFormProps) {
  const form = useForm<CreateTodoDto>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: "",
    },
  });

  function handleSubmit(values: CreateTodoDto) {
    onSubmit(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-grow"
        data-testid="form"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-grow flex-col">
              <FormControl>
                <Input
                  placeholder="What needs to be done?"
                  className="text-xl md:text-2xl placeholder:italic placeholder:font-light placeholder:text-muted-foreground rounded-none border-0 p-0"
                  {...field}
                />
              </FormControl>
              <FormMessage data-testid="error-message" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
