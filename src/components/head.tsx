import Head from "next/head";
type Props = {
	titleText: string | undefined;
	}
function PageHead({ titleText }: Props){
	return(
      		<Head>
        		<title>TCG Vault{ titleText ? `: ${titleText}`: ""}</title>
        		<meta name="description" content="Generated by create-t3-app" />
        		<link rel="icon" href="/favicon.ico" />
      		</Head>
	)
}


export default PageHead;
