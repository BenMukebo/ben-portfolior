"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
// import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"

type FormData = {
  name: string;
  email: string;
  message: string;
}

const FormSchema: ZodType<FormData> = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(36),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string()
    .min(20, {
      message: "Your Message must be at least 20 characters.",
    })
    .max(160, {
      message: "Your message must not be longer than 160 characters.",
    }),
})

function ContactForm() {
  // const { toast } = useToast()

  // 1. Define your form.
  // const { register, handleSubmit } = useForm({
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data)
    toast({
      title: "🥳 Your message has been sent 👍",
      // description: "You submitted the following values:",
      // description: (
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    })

    // toast({
    //   variant: "destructive",
    //   title: "😟 Uh oh! Something went wrong.",
    //   description: "There was a problem with your request.",
    //   action: <ToastAction altText="Try again">Try again</ToastAction>,
    // })
  }

  return (
    <div className="flex__column pt-12 pb-8 px-4 md:px-8">
      <section className="w-full max-w-7xl mx-auto">
        <div className="max-w-5xl mb-16 md:mb-24">
          <p className="text-xl text-white-light pb-4">Get in touch</p>
          <h1 className="header__h1 text-white-foreground">
            Say Hi! and tell me
            about your idea.
          </h1>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex__column__center gap-4 md:gap-8"
          >
            <div className="w-full flex__column justify-center gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel className="text-base xl:text-lg text-white-light">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Full name"
                        className="h-16 xl:h-[72px] input__field__style"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel className="text-base xl:text-lg text-white-light">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email" id="email"
                        placeholder="Enter your Email"
                        className="h-16 xl:h-[72px] input__field__style"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base xl:text-lg text-white-light">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me all about the Project..."
                      className="min-h-[180px]  input__field__style"
                      minLength={340}
                      {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Tell me all about the Project.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-full h-[136px] p-8 text-40 font-medium tracking-common rounded-[256px] xl:text-60 xl:h-[188px]"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
}

export default ContactForm;
