import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
async function isAuthenticated(ctx: GetServerSidePropsContext){
	const session = await getSession(ctx)
	if(session){
		return{
			redirect:{
				destination:"/dashboard",
				permanent: false
			}
		}
	}
	return {
		props:{}
	}
}

export default isAuthenticated;
