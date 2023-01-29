import Link from "next/link"
import type { Data } from "../../../types"

type LinksRowProps = {
    links?: Data["links"]
}

const LinksRow = ({ links }: LinksRowProps): JSX.Element => {
    if (!links || links?.length === 0) return <></>

    return <>
        <div className={"space-y-1 max-w-screen-md"}>
            {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Links</h4> */}
            <h4 className={"tracking-[0.3em] text-sm uppercase"}>Links</h4>
            {
                links.map((link, index) => (

                    // No need to display the link if URL does not exist
                    link?.url &&
                    <Link key={index} href={link.url} target={"_blank"} className={"capitalize group inline-block text-sm md:text-base dark:text-secondary/70 text-primary/70"}>
                        <span className="underlineAnim">{link.label}</span>
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                    </Link>
                ))
            }
        </div>
    </>
}

export default LinksRow