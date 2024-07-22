import Applicants from "@/components/ui/organisms/Applicants"
import JobDetail from "@/components/ui/organisms/JobDetail"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"


const JobDetailPage = () => {
  return (
    <div>
        <div  className="inline-flex items-center gap-5 mb-5">
            <div>
            <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9"/>
            </Link>
            </div>
            <div>
                <div className="text-2xl font-semibold">
                Brand Designer
                </div>
                <div>
                Design . Full Time . 1/10 hired
                </div>
            </div>
        </div>

        <Tabs defaultValue="applicants">
            <TabsList className="mb-8">
                <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <   TabsTrigger value="jobDetails">Job Details</TabsTrigger>
            </TabsList>
                <TabsContent value="applicants"><Applicants/></TabsContent>
                <TabsContent value="jobDetails"><JobDetail/></TabsContent>
        </Tabs>


    </div>
)
}

export default JobDetailPage