

export default function example() {
    return {
        "Modbus": {
            "192.168.1.38":
            {
                "ID 1": {
                    "Coils":
                    [{
                        "type": "modbusLeaf",
                        "name": 1,
                        "flavortext": "Write -> 4",
                        "value_count": 81, // Ring fill value
                        "value_max": 256,
                        "graph": [4, 5, 6],
                    },
                    {
                        "type":"modbusLeaf",
                        "name": 2,
                        "flavortext": "Write -> 4",
                        "value_count": 31, // Ring fill value
                        "value_max": 256,
                        "graph": [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, ],
                    },]
                }
                
            }
        }
    }
}



// LockManager.pushValue(["Modbus", IP, ID, "Coil", "1"], 4, WRITE)
//     >>> NestedDict -> [Modbus][IP][ID]["Coil"]["1"]