import Navbar from "@/components/navbar";
import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";


function Dashboard(){
	return(
		<>
			<Navbar />
		</>
	)
}


export default Dashboard


export async function getServerSideProps(ctx:GetServerSidePropsContext){
	const session = await getSession(ctx)
	if(!session){
		return{
			redirect:{
				destination: "/",
				permanent:false
			}
		}
	}
	return{
		props:{}
	}
}
