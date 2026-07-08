import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/landing",
    permanent: false,
  },
});

export default function RootRedirect() {
  return null;
}
