import React from "react";

export function Tech() {
    return (
        <ul>
            <TechList text={"CSS"}/>
            <TechList text={"HTML"}/>
            <TechList text={"REACT"}/>
            <TechList text={"JS"}/>

        </ul>
    )
}

type TechListPropsType = {
    text: string
}

function TechList(props: TechListPropsType) {
    return <li>{props.text}</li>
}