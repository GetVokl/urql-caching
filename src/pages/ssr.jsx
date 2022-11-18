import Nav from '../components/Nav';
import { GetUser } from '../queries/user';
import { useQuery } from 'urql';
import { initUrqlClient } from 'next-urql';

export default function SSR(props) {
  console.log('props', props)
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

export async function getServerSideProps(context) {
  const client = initUrqlClient({
    url: "https://graphqlzero.almansi.me/api",
  }, false /* set to false to disable suspense */);

  const result = await client.query(GetUser, {}).toPromise();
  return {
    props: {
      user: result.data.post
    },
  };
}
