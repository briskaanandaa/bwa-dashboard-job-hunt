"use client"

import TitleForm from "@/components/atoms/TitleForm"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CostumUpload from "@/components/ui/organisms/CostumUpload/index"
import FieldInput from "@/components/ui/organisms/FieldInputs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { LOCATION_OPTIONS, optionType } from "@/constants"
import { overviewFormSchema } from "@/lib/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



const OverviewForm = () => {

    const form = useForm<z.infer<typeof overviewFormSchema>>({
        resolver: zodResolver(overviewFormSchema),
    })

    const onSubmit = (val: z.infer<typeof overviewFormSchema>) =>{
        console.log(val)
    }

  return (
    <div>

        <div className="my-5">
            <TitleForm title="Basic Information" subtitle="This is company information that you can update any time"/>
        </div>
        <Separator className="mb-7"/>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FieldInput title="Company Logo" subtitle="This image will be shown publicly as company logo">
                    <CostumUpload form={form} name="image"/>
                </FieldInput>

                <FieldInput title="Company Details" subtitle="Introduce your company core info quickly to users by fill up company details">
                <div className="space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input className="w-[450px]" placeholder="e.g Twitter" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                                        )}
                />

                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                            <Input className="w-[450px]" placeholder="e.g Twitter" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                                        )}
                />

                <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-[450px]">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {LOCATION_OPTIONS.map((item: optionType, i:number) => (
                                <SelectItem key={item.id + i} value={item.id}>
                                    {item.label}
                                </SelectItem>
                            ))}
                            
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
          )}
        />
                </div>
                </FieldInput>


            </form>
        </Form>
    </div>
  )
}

export default OverviewForm