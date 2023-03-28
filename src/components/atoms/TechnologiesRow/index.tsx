import type { Data } from "../../../types";

type TechnologiesRowProps = {
    technologies?: Data["technologies"];
};

const TechnologiesRow = ({ technologies }: TechnologiesRowProps): JSX.Element => {
    if (!technologies || technologies.length === 0) return <></>;

    return (
        <div className="max-w-screen-md space-y-1">
            {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Technologies</h4> */}
            <h4 className="text-sm uppercase tracking-[0.3em]">Technologies</h4>
            <div className="flex flex-wrap gap-x-6 text-sm">
                {technologies.map((technology, i) => (
                    <div key={`technology-${i}`} className="text-primary/70 dark:text-secondary/70">
                        {technology}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesRow;
