import { FC } from "react";

interface TitleFormProps{
    title : string;
    subtitle : string
}

const TitleForm : FC<TitleFormProps> = ({ subtitle, title}) => {
return (
            <TitleForm title="Basic Information" subtitle="This is company information that you can update any time"/>
  )
}

export default TitleForm