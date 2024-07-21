"use client"

import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../../button'

const Header = () => {

    const router = useRouter()

    const navCreateJobPage = () => router.push('/post-a-job')

    return (
    <div className='pb-3 mb-3 border-b border-border flex flex-row items-center justify-between'>
        <div>
            <div>Company</div>
            <div className='font-semibold'>Jobseeker</div>
        </div>
        <div>
            <Button onClick={navCreateJobPage} className='rounded-none py-3 px-6'>
                <PlusIcon className='mr-2 w-4 h-4'/>
                Post A Job
            </Button>
        </div>
    </div>
    )
}

export default Header