import Image from "next/image";
import AmityLogo from "@/images/auup-logo.png";
import AmityCampus from "@/images/Amity-campus.jpg";
import CardX from "./card.jsx";

export default function Programmes(){
    return (
    <>
        <div class="relative h-[35rem] w-full">
        
            <div class="h-[7rem] flex justify-center items-center w-full  absolute z-[25] px-20">
                <a href="index.html">
                    <Image src={AmityLogo} className="mt-2 w-64 sm:w-96"/>
                </a>
	        </div>
            <Image src={AmityCampus} class="absolute top-0 z-0 w-full h-full object-cover"/>
        </div> 
        
        <ol class="m-10 sm:mx-20 flex items-center whitespace-nowrap">
          <li class="inline-flex items-center">
            <a class="flex items-center text-xl sm:text-2xl text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="index.html">
              Home
            </a>
            <div class="flex-shrink-0 text-2xl text-gray-400 mx-6">
              /
            </div>
          </li>
          <li class="inline-flex items-center text-xl sm:text-2xl font-semibold text-gray-800 truncate " aria-current="page">
            Programmes
          </li>
        </ol>
        
        <div class="flex items-center h-12 sm:h-16 m-2 sm:m-5 justify-center">
            <div class=" text-3xl md:text-5xl font-bold text-center">Graduate Programmes</div>
        </div>
        <div class="grid gap-6 w-full p-10 grid-cols-1 lg:grid-cols-3">
            <CardX 
                title="B. Tech in Computer Science & Engineering"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering + MBA"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering - 3 Contienent"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering - International"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering - IoT & CyberSecurity"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering - Data Science"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="B. Tech in Computer Science & Engineering - Evening"
                time="4" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
        </div>

        <div class="flex items-center h-12 sm:h-16 m-2 sm:m-5 justify-center">
            <div class=" text-3xl md:text-5xl font-bold text-center">Post Graduate Programmes</div>
        </div>
        <div class="grid gap-6 w-full p-10 grid-cols-1 lg:grid-cols-3">
            <CardX 
                title="M. Tech in Computer Science & Engineering"
                time="2" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="M. Tech in Cyber Security"
                time="2" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
            <CardX 
                title="M. Tech in Data Science"
                time="2" 
                fees_ns="2.065" 
                fees_s="3.10"
            />
        </div>
    </>
    )
};
