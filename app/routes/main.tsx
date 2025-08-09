import example from "~/basedata";
import type { Route } from "./+types/main";
import BranchRecursor from "~/components/branch_recursor";
//import { Welcome } from "../welcome/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}




export default function Home() {

  const data = example()

  return (<>
    <div className="flex-grow border-gray-500 border-2 rounded-2xl p-2 m-2">
      <div className="text-black">
        <BranchRecursor indata={data}/>
      </div>
    </div>
  </>);
}


/*

1. Recursor:
  Renders a child as either another recursor or some other type depending on 'type' element

2. modbusLeaf

3. ???



*/