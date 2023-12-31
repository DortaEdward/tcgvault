import Navbar from "@/components/UnAuthNavbar";
import type { PropsWithChildren } from "react"


function BaseLayout({children}: PropsWithChildren){
	return(
		<div className="min-w-screen min-h-screen bg-neutral-950 relative">
			<Navbar />
			{ children }	
		</div>
	)
}

export default BaseLayout;
