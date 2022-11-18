import Nav from '../components/Nav';
import { GetUser } from '../queries/user';
import { useQuery } from 'urql';

export default function SSG() {
  const [
    {
      data,
    },
  ] = useQuery({ query: GetUser });
  const user = data?.post
  return (
    <>
      <Nav />
      <p>{user?.title}</p>
      <p>{user?.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      name: 'chatterjee',
    },
  };
}
