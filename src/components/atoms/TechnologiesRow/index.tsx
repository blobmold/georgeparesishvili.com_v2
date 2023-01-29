import type { Data } from "../../../types"

type TechnologiesRowProps = {
    technologies?: Data["technologies"]
}

const TechnologiesRow = ({ technologies }: TechnologiesRowProps): JSX.Element => {

    if (!technologies || technologies.length === 0) return <></>

    return (
        <div className={"space-y-1 max-w-screen-md"}>
            {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Technologies</h4> */}
            <h4 className={"tracking-[0.3em] text-sm uppercase"}>Technologies</h4>
            <div className={"flex flex-wrap gap-[0.325rem] md:col-span-3"}>
                {
                    technologies.map((technology, i) => (
                        <div key={`technology-${i}`} className={"tag"}>{technology}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default TechnologiesRow