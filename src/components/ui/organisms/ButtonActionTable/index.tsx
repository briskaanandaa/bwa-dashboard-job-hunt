"use client";

import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Button } from '../../button';

interface ButtonActionTable {
    url : string;
}

const ButtonActionTable: FC <ButtonActionTable> = ({url}) => {
    const router = useRouter ()

    return (
        <Button size="icon" variant='outline' onClick={()=> router.push(url)}> <MoreVertical className="w-4 h-4"/></Button>
    )
}

export default ButtonActionTable