import Head from 'next/head';
import Image from 'next/image';

import Box from '../components/Box/Box';

function Home() {
  return (
    <Box>
      <Head>
        <title>Preview README.md | Chris R. Short</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Box
        width={200}
        height={200}
        marginLeft="auto"
        marginRight="auto"
        marginBottom={16}
        borderRadius="100%"
        overflow="hidden"
        position="relative"
      >
        <Image src="/me.jpg" alt="Picture of Chris Short" layout="fill" />
      </Box>

      <h1 style={{ textAlign: 'center' }}>Chris R. Short</h1>
      <h3 style={{ textAlign: 'center' }}>Front-End Developer</h3>
      <p
        style={{
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: 600,
        }}
      >
        Throughout my career I have worked with multiple frameworks, languages,
        and cloud computing platforms used in the creation of customer facing
        applications. This has been anything from progressive web apps with
        ReactJS to Android applications integrated with{' '}
        <a
          href="https://www.zebra.com/us/en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zebra
        </a>{' '}
        hardware, and everything in between. My most recent projects have
        utilized Amazon Web Services for infrastructure and I found myself
        falling in love with building serverless applications. My ideal role is
        working somewhere that I can contribute my education, knowledge, and
        leadership in solving complex problems.
      </p>
    </Box>
  );
}

export default Home;
