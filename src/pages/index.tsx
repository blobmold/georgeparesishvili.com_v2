import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import ProjectsSection from "../components/organisms/ProjectsSection";

const Home: NextPage = () => {
    return (
        <>
        <Head>
            <title>Personal Website - George Paresishvili</title>
        </Head>
            <main>
                <section className="flex min-h-[90vh] flex-col justify-center bg-primary text-secondary">
                    <div className="gp-global_width w-full space-y-2">
                        <h1>
                            <Link href={"/"}>George Paresishvili</Link>
                        </h1>
                        <div className={"font-light tracking-[0.15em]"}>
                            <div>Full Stack Developer</div>
                            <div>Based in Tbilisi, Georgia</div>
                        </div>
                    </div>
                </section>
                <ProjectsSection />
            </main>
        </>
    );
};

export default Home;
