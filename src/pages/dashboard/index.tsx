import AuthedLayout from "@/layouts/AuthedLayout";

function Dashboard() {
  return <AuthedLayout>
    <p className="text-gray-100">Dashboard</p>
  </AuthedLayout>;
}

export default Dashboard;

import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
