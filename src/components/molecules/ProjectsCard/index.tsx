import type { Data } from "../../../types";
import InputRow from "../../atoms/InputRow";
import TechnologiesRow from "../../atoms/TechnologiesRow";
import LinksRow from "../../atoms/LinksRow";

function ProjectsCard({ data }: { data: Data }): JSX.Element {
    return (
        <div className="grid grid-cols-1 gap-y-6 rounded-3xl border border-primary-60 dark:border-primary-15 p-4 md:gap-0 md:p-8 lg:grid-cols-2 bg-gradient-to-r from-secondary to-primary/5 dark:from-primary dark:to-primary-5 transition-transform duration-300 ease-easeOutExpo">
            <h3>{data.title}</h3>
            <div className="space-y-6">
                <TechnologiesRow technologies={data.technologies} />
                <InputRow input={data.input} />
                <LinksRow links={data.links} />
            </div>
        </div>
    );
}

export default ProjectsCard;
