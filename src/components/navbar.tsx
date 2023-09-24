import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
function Navbar(){
	const {data: session} = useSession()

	return(
		<div className="container mx-auto px-16 py-4 bg-transparent">
		<header className="flex justify-between">
			<div>
				<p className="text-2xl font-medium text-gray-100">TCG Vault</p>
			</div>
			<nav className="flex-1 flex items-center justify-between pl-10">
				<ul>
					<li>
						<Link href={"/"} className="font-light text-gray-400 hover:text-gray-200">Home</Link>
					</li>
				</ul>
				<div className="flex items-center gap-3">
					<Link href={"/contact"} className="font-light text-gray-400 hover:text-gray-200">Contact</Link>
					{
						session?.user
						?
							<>
								<button onClick={() => signOut()} className="px-3 py-1 border rounded-md border-gray-700 text-gray-100 hover:bg-gray-100/10">Sign Out</button>
							</>

						:
							<>
								<button className="px-3 py-1 border rounded-md border-gray-700 text-gray-100 hover:bg-gray-100/10">Sign In</button>
								<button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-300 text-black">Sign Up</button>
							</>
					}
				</div>
			</nav>	
		</header>
		</div>
	)
}

export default Navbar;
