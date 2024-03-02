// import React from "react";

// const links = [
   
//     { text : "About us", href:"/about"},

// ]

// function Navbar(){
//     return(
//         <nav className="flex justify-center h-[100px]">
//             <div className="w-[1200px] flex items-center">
//                 <div className="font-bold text-black text-[20px]">
//                     Online Community
//                 </div>
//                 <div className="flex ml-auto">
//                     { links.map((link, index) => {
//                         return (
//                             <a key={index} href={link.href}     className="ml-12 hover:font-bold">
//                                 {link.text}
//                             </a>
//                         );
                        
//                     })}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;
import React from "react";

const links = [
    { text: "About us", href: "/about" },
];

function Navbar() {
    return (
        <nav className="flex justify-center h-[100px]">
            <div className="w-full px-4 md:px-0 max-w-[1200px] flex items-center">
                <div className="font-bold text-black text-[20px]">
                    Online Community
                </div>
                <div className="md:flex hidden ml-auto">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="ml-12 hover:font-bold">
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="md:hidden ml-auto">
                    <a href={links[0].href} className="hover:font-bold">
                        {links[0].text}
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
