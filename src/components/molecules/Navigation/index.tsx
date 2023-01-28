import Link from "next/link";
import navigationData from "../../../data/navigationData"

const Navigation = (): JSX.Element => {
    if(navigationData.length === 0) return <></>;

    return (<>
        <nav>
            <ul className={"flex justify-center items-center space-x-4"}>
                {navigationData.map((data, i) => (
                    <li key={`nav-${i}`}>
                        <Link href={data.route} className={"block py-3 group"}><span className="underlineAnim">{data.label}</span></Link>
                    </li>
                ))}
            </ul>
        </nav>
    </>)
}

export default Navigation