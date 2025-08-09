

export default function example() {
    return {
        "Modbus": {
            "192.168.1.38":
            {
                "ID 1":
                {
                    "Coil 1":
                    {
                        "type":"modbusLeaf",
                        "name": 1,
                        "flavortext": "Write -> 4",
                        "value_count": 81, // Ring fill value
                        "value_max": 256,
                        "graph": [4, 5, 6],
                    },
                    "Coil 2":
                    {
                        "type":"modbusLeaf",
                        "name": 2,
                        "flavortext": "Write -> 4",
                        "value_count": 31, // Ring fill value
                        "value_max": 256,
                        "graph": [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, ],
                    },
                }
            }
        }
    }
}


// LockManager.pushValue(["Modbus", IP, ID, "Coil", "1"], 4, WRITE)
//     >>> NestedDict -> [Modbus][IP][ID]["Coil"]["1"]