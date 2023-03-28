import type { Data } from "../../../types";

import InputRow from "../../atoms/InputRow";
import LinksRow from "../../atoms/LinksRow";
import TechnologiesRow from "../../atoms/TechnologiesRow";

interface ProjectCardProps {
    data: Data;
}

const ProjectsCard: React.FC<ProjectCardProps> = ({ data }) => {

    return (
        <div className="relative grid grid-cols-1 gap-y-6 rounded-3xl border border-primary-60 bg-gradient-to-r from-secondary to-primary/5 p-4 transition-transform duration-300 ease-easeOutExpo dark:border-primary-15 dark:from-primary dark:to-primary-5 md:gap-0 md:p-8 lg:grid-cols-2">
            <h3>{data.title}</h3>
            <div className="space-y-6">
                <TechnologiesRow technologies={data.technologies} />
                <InputRow input={data.input} />
                <LinksRow links={data.links} />
            </div>
        </div>
    );
};

export default ProjectsCard;
