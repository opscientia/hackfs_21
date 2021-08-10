import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

const Home = () => (
  <Layout>
    <Sidebar />
    <h1>Next Auth App</h1>
    <p>
      This is a sample project that uses{' '}
      <a href={`https://github.com/iaincollins/next-auth`}>NextAuth.js</a> to
      add authentication to <a href={`https://nextjs.org/`}>Next.js</a>.
    </p>
    <p>
      See <a href={`https://next-auth.js.org/`}>next-auth.js.org</a> for more
      information and documentation.
    </p>
  </Layout>
);

export default Home;
