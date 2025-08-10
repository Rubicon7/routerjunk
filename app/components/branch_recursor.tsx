import ModbusLeaf from "./ModbusLeaf";


export interface branchOption{

}

function typeFlagNext(indata: any ) {
    
    if (indata && typeof indata === "object") {
        if (Object.keys(indata).includes("type")) {
            return true
        }
    }

    return false
}

export default function BranchRecursor({ indata }: { indata: any }) {
    const keys = Object.keys(indata);

    if (keys.includes("type")) {
        if (indata.type === "modbusLeaf") {
            // Render as a fancy thing
            return <ModbusLeaf data={indata}/>
            
        }
    }

    // Render as a branch with padding + title


    return (
        <div className="pl-2 mt-2">
            {keys.map(x => (
                <div key={x}>
                    {!typeFlagNext(indata[x]) && x}
                    <BranchRecursor indata={indata[x]} />
                </div>
            ))}
        </div>
    );

}