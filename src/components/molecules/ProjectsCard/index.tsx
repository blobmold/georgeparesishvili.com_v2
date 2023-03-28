import type { Data } from "../../../types";
import InputRow from "../../atoms/InputRow";
import TechnologiesRow from "../../atoms/TechnologiesRow";
import LinksRow from "../../atoms/LinksRow";

function ProjectsCard({ data }: { data: Data }): JSX.Element {
    return (
        <div className="grid grid-cols-1 gap-y-6 rounded-3xl border border-primary/10 p-4 dark:border-secondary/10 md:gap-0 md:p-8 lg:grid-cols-2">
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
