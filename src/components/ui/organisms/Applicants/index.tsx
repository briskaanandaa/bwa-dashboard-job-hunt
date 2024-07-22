import ButtonActionTable from "@/components/ui/organisms/ButtonActionTable";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { JOB_APPLICANT_COLOUMNS, JOB_APPLICANT_DATA } from "@/constants";


const Applicants = () => {
  return (
    <Table>

                <TableHeader>
                    <TableRow>
                        {JOB_APPLICANT_COLOUMNS.map((item:string, i:number)=>(
                        <TableHead key={item+i}>{item}</TableHead>
                        ))}
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                
                <TableBody>
                    {JOB_APPLICANT_DATA.map ((item:any, i:number)=>(
                            <TableRow key={item.name + i}>
                                <TableCell>
                                {item.name}
                                </TableCell>
                                <TableCell>{item.appliedDate}</TableCell>
                                <TableCell><ButtonActionTable url=""/></TableCell>
                            </TableRow>
                 
                    )
                    )}
                </TableBody>
        </Table>
  )
}

export default Applicants