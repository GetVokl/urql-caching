import Nav from "../components/Nav";

export default function SSG() {
  return (
    <>
    <Nav/>
    <h1>ssg</h1>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      name:"chatterjee"
    },
  }
}