
import { PartyPopperIcon } from "lucide-react";
import { Badge } from "../../badge";
import { Progress } from "../../progress";
import { Separator } from "../../separator";

const jobDetail = () => {
  return (
    <div>
        <div className='grid grid-cols-3 w-full gap-5'>

            <div className='col-span-2 space-y-10'>

                <div>
                    <div className="text-xl font-semibold">
                        Description
                    </div>
                    <div>
                        <p className="text-gray-500 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa itaque minus, natus dicta vitae. Corrupti amet dignissimos maxime veniam.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="text-xl font-semibold">
                        Responsibilities
                    </div>
                    <div>
                        <p className="text-gray-500 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa itaque minus, natus dicta vitae. Corrupti amet dignissimos maxime veniam.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="text-xl font-semibold">
                        Who You Are
                    </div>
                    <div>
                        <p className="text-gray-500 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa itaque minus, natus dicta vitae. Corrupti amet dignissimos maxime veniam.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="text-xl font-semibold">
                        Nice To Haves
                    </div>
                    <div>
                        <p className="text-gray-500 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa itaque minus, natus dicta vitae. Corrupti amet dignissimos maxime veniam.
                        </p>
                    </div>
                </div>

            </div>

            <div>
                <div className="text-3xl font-semibold">About This Role</div>

                <div className="shadow p-3 text-center my-6 rounded-lg">
                1<span className="text-gray-500"> of 10 Capacity</span>
                <Progress className="mt-3" value={10}/>
                </div>

                <div className="mb-10 space-y-5">
                    <div className="flex justify-between">
                        <div className="text-gray-500">Apply Before</div>
                        <div className="font-semibold">12 Aug 2023</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-gray-500">Job Type</div>
                        <div className="font-semibold">Full Time</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-gray-500">Salary</div>
                        <div className="font-semibold">$100  - $1.000</div>
                    </div>

                </div>

                <Separator/>

                <div className="my-10">
                <div className="text-3xl font-semibold mb-4">
                    Category
                </div>

                <div className="space-x-5">
                   <Badge>
                    Design
                   </Badge>
                </div>

                </div>

                <Separator/>

                <div className="my-10">
                <div className="text-3xl font-semibold mb-4">
                    Required Skills
                </div>

                <div className="space-x-5">
                    {["HTML", "Javascript"].map(
                        (item: string, i : number ) => (
                            <Badge variant={"outline"} key={i}>{item}</Badge>
                        )
                    )}
                </div>

                </div>
            </div>
        </div>

        
        <Separator className="my-8"/>
        <div>
            <div  className="text-3xl font-semibold">
                Perks & Benefits
            </div>
            <div className="text-gray-500">
                This  job comes  with several perks and benefits
            </div>

            <div className="grid grid-cols-4 gap-5 mt-9">
                {[0,1,2].map((item : number) =>(
                    <div key={item}>
                        <PartyPopperIcon className="w-10 h-10 text-primary mb-3"/>
                        <div className="text-lg font-semibold mb-3">Full Healthcare</div>
                        <div className="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto qui fuga ipsam amet non odit provident illum, tempore alias. </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default jobDetail