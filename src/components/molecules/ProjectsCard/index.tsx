import type { Data } from "../../../types"
import InputRow from "../../atoms/InputRow"
import TechnologiesRow from "../../atoms/TechnologiesRow"
import LinksRow from "../../atoms/LinksRow"

const ProjectsCard = ({ data }: { data: Data }): JSX.Element => {
    return (
        <div className={"space-y-4 max-w-screen-md"}>
            <h3 className={"pt-[2em]"}>{data.title}</h3>
            <div className={"space-y-4"}>
                <TechnologiesRow technologies={data.technologies} />
                <InputRow input={data.input} />
                <LinksRow links={data.links} />
            </div>
        </div>
    )
}

export default ProjectsCard