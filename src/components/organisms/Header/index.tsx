import Navigation from "../../molecules/Navigation"

function Header(): JSX.Element {
    return (<>
        <header className={"z-50 w-full fixed flex justify-center bottom-5 md:top-5 md:bottom-auto"}>
            <Navigation />
        </header>
    </>)
}

export default Header