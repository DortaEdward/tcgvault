import PageHead from "@/components/head";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { MdStorage } from "react-icons/md"
import BaseLayout from "@/layouts/DefaultLayout";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
export default function Home() {

  return (
    <>
      <Head>
        <title>TCG Vault: Organize. Manage. Trade.</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <main className="flex items-center justify-center h-[calc(100vh-66px)] flex-col px-6 py-4">
          <h1 className="text-gray-100 text-8xl font-bold text-center">Organize. Manage. Trade.</h1>
          <div className="my-4"></div>
          <p className="text-gray-400 text-2xl max-w-4xl text-center">{"TCG Collection's services gives trading card game collectors the infrastructure that's needed to store and maintain their collectins and focilitate trades/sales."}</p>
          <div className="my-4"></div>
          <div className="flex gap-3">
            <button onClick={() => signIn()} className="text-neutral-950 text-lg flex items-center gap-2 bg-gray-100 hover:bg-gray-300 px-3 py-2 rounded-md"><MdStorage size={20} /> Start Storing</button>
            <button className="text-gray-100 border border-gray-100 text-lg flex items-center gap-2 px-3 py-2 rounded-md">Get a Demo</button>
          </div>
        </main>
      </BaseLayout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx)
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
