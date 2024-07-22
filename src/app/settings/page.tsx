import OverviewForm from "@/components/forms/Overviewform"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const SettingsPage = () => {
  return (
    <div>
        <div className="font-semibold text-3xl mb-5">Settings</div>
        <Tabs defaultValue="overview">
            <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>
                <TabsContent value="overview">
                    <div>
                        <OverviewForm/>
                    </div>
                </TabsContent>
                <TabsContent value="socialLinks">
                    <div>social links</div>
                </TabsContent>
                <TabsContent value="teams">
                    <div>teams</div>
                </TabsContent>
        </Tabs>
        </div>
  )
}

export default SettingsPage