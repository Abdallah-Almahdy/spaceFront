import React from "react";
import LeftSide from "./sections/left";
import RightSide from "./sections/right";


export default function CreateAccount(){

    return(
        <div className="grid grid-cols-12 w-full h-screen">

<div className="col-span-4 bg-red-200">
<LeftSide/>
</div>
<div className="col-span-8 flex items-center justify-center">
<RightSide/>
</div>
        </div>
    )
}