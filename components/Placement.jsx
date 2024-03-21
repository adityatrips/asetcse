import Image from "next/image";
import React from "react";
import dell from "../images/dell.jpg"

const Placement = () => {
    const logos = ["accenture.jpg", "british-gas.jpg", "csc.jpg", "dell.jpg", "flipkart.jpg", "ibm.jpg",
                    "icicic.jpg", "igate.jpg", "indian-navy.jpg", "indianoil.jpg"];

    return (
    <div className="flex justify-center items-center w-full h-20 gap-32 scroll ">
        <Image
            src={JSON.parse(
                JSON.stringify(require('../images/dell.jpg'))
            )}
        />
        <Image
            src={JSON.parse(
                JSON.stringify(require('../images/dell.jpg'))
            )}
        />
        <Image
            src={JSON.parse(
                JSON.stringify(require('../images/dell.jpg'))
            )}
        />
        <Image
            src={JSON.parse(
                JSON.stringify(require('../images/dell.jpg'))
            )}
        />
        <Image
            src={JSON.parse(
                JSON.stringify(require('../images/dell.jpg'))
            )}
        />
        
    </div>
    );
};

export default Placement;
