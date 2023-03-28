import Link from "next/link";
import navigationData from "../../../data/navigationData";

const Navigation: React.FC = () => {
    if (navigationData.length === 0) return <></>;

    // hover:bg-secondary hover:text-primary
    return (
        <>
            <nav className="overflow-hidden rounded-2xl border border-secondary/10 bg-primary/[0.9] text-secondary backdrop-blur-xl">
                <ul className="flex items-center justify-center">
                    {/* <li className="p-4">
                    <svg viewBox="0 0 355 348" width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="bevel" stroke-miterlimit="1.5"><g fill="none" stroke="#fff" stroke-width="25" transform="translate(-147.5 -109.5)"><path d="M160 122H312V274H160z" /><path d="M160 315H490V445H160z" /><path d="M312 198h178v117M236 274v41" /></g></svg>
                </li> */}
                    {navigationData.map((data, i) => (
                        <li key={`nav-${i}`}>
                            <Link
                                href={data.route}
                                className="group relative block rounded-sm p-4 text-sm transition-colors ease-easeOutExpo hover:bg-secondary hover:text-primary"
                            >
                                {/* <span className="w-full h-full scale-0 transition-transform group-hover:scale-100 duration-500 group-hover:bg-secondary absolute inset-0 -z-10 origin-left"></span> */}
                                {data.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
