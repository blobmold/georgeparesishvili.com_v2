import type { Data } from "../../../types"

type InputRowProps = {
    input?: Data["input"]
}

const InputRow = ({ input }: InputRowProps): JSX.Element => {

    if (!input || input.length === 0) return <></>

    return (
        <div className={"space-y-2"}>
            <h4 className={"dark:text-secondary/50 text-primary/50"}>Input</h4>
            <p className={"text-sm md:col-span-3"}>{input}</p>
        </div>
    )
}

export default InputRow