import Link from "next/link";

import type { Data } from "../../../types";

import Icon from "../Icons";

type LinksRowProps = {
    links?: Data["links"];
};

const LinksRow = ({ links }: LinksRowProps): JSX.Element => {
    if (!links || links?.length === 0) return <></>;

    return (
        <>
            <div className="max-w-screen-md space-y-1">
                {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Links</h4> */}
                <h4 className="text-sm uppercase tracking-[0.3em]">Links</h4>
                {links.map(
                    (link, index) =>
                        // No need to display the link if URL does not exist
                        link?.url && (
                            <Link
                                key={index}
                                href={link.url}
                                target={"_blank"}
                                className="group inline-flex text-sm capitalize text-primary/70 dark:text-secondary/70 space-x-1"
                            >
                                <span className="underlineAnim">{link.label}</span>
                                <Icon.OpenInNew width={10} height={10} className={"fill-primary/70 dark:fill-secondary/70"} />
                            </Link>
                        )
                )}
            </div>
        </>
    );
};

export default LinksRow;
