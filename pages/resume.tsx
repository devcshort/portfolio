import Head from 'next/head';

import Box from '../components/Box/Box';

function Resume() {
  return (
    <Box>
      <Head>
        <title>resume.pdf | Chris R. Short</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <object
        type="application/pdf"
        data="/resume.pdf"
        width="100%"
        style={{ height: 'calc(100vh - 82px)' }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </object>
    </Box>
  );
}

export default Resume;
