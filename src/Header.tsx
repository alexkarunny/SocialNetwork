import React from "react";

export function Header() {
    return (
        <div>
            <HeaderLink link={"https://www.codewars.com/"} title={"Codewars"} />
            <HeaderLink link={"https://www.tut.by/"} title={"tut"} />
            <HeaderLink link={"https://www.onliner.by/"} title={"onliner"} />
        </div>
    )
}

type HeaderLinkPropsType = {
    link: string
    title: string
}

function HeaderLink(props: HeaderLinkPropsType) {
    return <a href={props.link}>{props.title}</a>
}