import { EnumValues } from "zod";

export const JOBTYPES: EnumValues  = ['Full-Time', 'Part-Time', 'Remote', 'Internship']

export const JOB_LISTING_COLOUMNS : string[] = ["Roles", "Status", "Date Posted", "Due Date", "Job Type", "Applicants", "Needs" ]

export const JOB_APPLICANT_COLOUMNS : string[] = ["Name", "Applied Date"]

export const JOB_APPLICANT_DATA = [
    {
        name : "Hariyanto",
        appliedDate : "15 July 2024"
    }

]

export const JOB_LISTING_DATA = [
    {
        roles:"Software",
        status:  "Live",
        datePosted: "12 Aug 2024",
        dueDate: "12 Sep 2023",
        jobType: "Full-Time",
        applicants: 1,
        needs: 10
    }
]