import Link from "next/link";
import type { Data } from "../../../types";

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
                                className="group inline-block text-sm capitalize text-primary/70 dark:text-secondary/70 md:text-base"
                            >
                                <span className="underlineAnim">{link.label}</span>
                                <span className="material-symbols-outlined text-base">
                                    open_in_new
                                </span>
                            </Link>
                        )
                )}
            </div>
        </>
    );
};

export default LinksRow;
