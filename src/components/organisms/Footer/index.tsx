import contactData from "../../../data/contactData";

const Footer = (): JSX.Element => {
    return (<>
        <footer className={"gp-global_width my-36"}>
            <h2 className={"my-7"} id={"contact"}><a href="#contact">Contact</a></h2>
            <div className={"space-y-7"}>
                {
                    contactData?.email
                    && <div>
                        <h3>Email:</h3>
                        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                    </div>

                }
                {
                    (contactData?.social && contactData.social.length > 0)
                    &&
                    <div>
                        <h3>Social:</h3>
                        <ul className={"flex space-x-4"}>
                            {contactData.social.map((network, i) => (
                                <li key={`social-${i}`}>
                                    <a href={network.url} target="_blank" rel="noreferrer" className={"capitalize underlineAnim"}>{network.networkTitle}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </footer>
    </>)
}

export default Footer;