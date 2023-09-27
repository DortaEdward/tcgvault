import AuthNavbar from "@/components/AuthedNavbar";
import type { PropsWithChildren } from "react"


function AuthedLayout({children}: PropsWithChildren){
	return(
		<div className="min-w-screen min-h-screen bg-neutral-950 relative">
			<AuthNavbar />
			{ children }	
		</div>
	)
}

export default AuthedLayout;
