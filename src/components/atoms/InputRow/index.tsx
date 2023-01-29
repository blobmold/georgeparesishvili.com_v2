import type { Data } from "../../../types"

type InputRowProps = {
    input?: Data["input"]
}

const InputRow = ({ input }: InputRowProps): JSX.Element => {

    if (!input || input.length === 0) return <></>

    return (
        <div className={"space-y-1 max-w-screen-md"}>
            {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Input</h4> */}
            <h4 className={"tracking-[0.3em] text-sm uppercase"}>Input</h4>
            <p className={"md:col-span-3 text-sm md:text-base dark:text-secondary/70 text-primary/70"}>{input}</p>
        </div>
    )
}

export default InputRow