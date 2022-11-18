import Nav from "../components/Nav";

export default function SSR() {
  return (
    <>
    <Nav/>
    <h1>ssr</h1>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      name:"prasoon"
    },
  }
}