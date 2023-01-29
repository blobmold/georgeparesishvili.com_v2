import type { Data } from "../../../types"
import InputRow from "../../atoms/InputRow"
import TechnologiesRow from "../../atoms/TechnologiesRow"
import LinksRow from "../../atoms/LinksRow"

function ProjectsCard({ data }: { data: Data} ): JSX.Element {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-0 p-4 md:p-8 border border-primary/10 dark:border-secondary/10 rounded-3xl"}>
            <h3>{data.title}</h3>
            <div className={"space-y-6"}>
                <TechnologiesRow technologies={data.technologies} />
                <InputRow input={data.input} />
                <LinksRow links={data.links} />
            </div>
        </div>
    )
}

export default ProjectsCard