"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FieldInput from "@/components/ui/organisms/FieldInputs"
import InputSkills from "@/components/ui/organisms/InputsSkills"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { JOBTYPES } from "@/constants"
import { jobFormSchema } from "@/lib/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"


const PostJobPage = () => {
    
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver : zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills:[]
        }
    })

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    }

    return (
    <div>
        <div  className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
            <ArrowLeftIcon className="w-7 h-7"/>
            <span className="text-2xl font-semibold"> Post a Job</span>
        </div>

        <div className="my-5">
            <div className="text-lg font-semibold"> Basic Information</div>
            <div className="text-gray-400">
                List out top perks and benefits.
            </div>
        </div>
        <Separator/>

    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6 pt-6">
        <FieldInput title="Job Title" subtitle="Jon title must be describe one position">
            <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-[450px]" placeholder="e.g. Software Engginer" {...field} />
              </FormControl>
              <FormDescription>
                At least 3 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </FieldInput>

        <FieldInput title="Type of employment" subtitle="you can select type of employment">
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                    {JOBTYPES.map((item : string, i:number) =>(
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={item} />
                            </FormControl>
                                <FormLabel className="font-normal">
                                {item}
                                </FormLabel>
                        </FormItem>
                    ))}
                </RadioGroup>
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
        />
        </FieldInput>

        <FieldInput title="Salary" subtitle="Please specify the estimated salary range for the role">
        <div className="w-[450px] flex flex-row justify-between items-center">
        <FormField
          control={form.control}
          name="salaryFrom"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-full" placeholder="$100" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className="text-center">To</span>
        <FormField
          control={form.control}
          name="salaryFrom"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="full" placeholder="$1000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        </FieldInput>

        <FieldInput title="Categories" subtitle="You can select job categories">
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Job Categories</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[450px]">
                    <SelectValue placeholder="Select a Job Categories" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        </FieldInput>

        <FieldInput title="Required Skills" subtitle="Add requires Skills">
            <InputSkills form={form} name={""} label={""}/>
        </FieldInput>



    </form>
    </Form>
    </div>
    )
}

export default PostJobPage
