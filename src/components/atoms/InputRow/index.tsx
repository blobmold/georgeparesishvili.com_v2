import type { Data } from "../../../types";

type InputRowProps = {
    input?: Data["input"];
};

const InputRow = ({ input }: InputRowProps): JSX.Element => {
    if (!input || input.length === 0) return <></>;

    return (
        <div className="max-w-screen-md space-y-1">
            {/* <h4 className={"dark:text-secondary/50 text-primary/50"}>Input</h4> */}
            <h4 className="text-sm uppercase tracking-[0.3em]">Input</h4>
            <p className="text-sm text-primary/70 dark:text-secondary/70 md:col-span-3 md:text-base">
                {input}
            </p>
        </div>
    );
};

export default InputRow;
