import Navigation from "../../molecules/Navigation";

function Header(): JSX.Element {
    return (
        <>
            <header
                className="fixed bottom-5 z-50 flex w-full justify-center md:top-5 md:bottom-auto"
            >
                <Navigation />
            </header>
        </>
    );
}

export default Header;
