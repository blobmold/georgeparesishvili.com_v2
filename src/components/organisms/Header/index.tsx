import Navigation from "../../molecules/Navigation"

const Header = (): JSX.Element => {
    return (<>
    <header className={"z-50 w-full bg-primary/[0.9]  border-t border-secondary/5 text-secondary backdrop-blur-xl fixed inset-x-0 bottom-0"}>
        <Navigation />
    </header>
    </>)
}

export default Header