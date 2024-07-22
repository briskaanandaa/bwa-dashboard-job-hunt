"use client"

import TitleForm from "@/components/atoms/TitleForm"
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
            <div className="text-lg font-semibold"> Basic Information</div>
            <div className="text-gray-400">
                List out top perks and benefits.
            </div>
        </div>

    </div>
  )
}

export default OverviewForm