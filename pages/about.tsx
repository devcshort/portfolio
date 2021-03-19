import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import Box from '../components/Box/Box';

const bio = `import SoftwareDeveloper from 'ChrisRShort';

class Bio extends SoftwareDeveloper {
  name     = 'Chris Short';
  title    = 'Software Developer';
  company  = 'Van Doren Sales';
  location = 'Yakima, WA';
}

class Skills extends SoftwareDeveloper {
  languages   = ['TypeScript', 'JavaScript', 'C#', 'HTML5', 'CSS3', 'Bash'];
  backend     = ['Node.js', 'Express', '.NET', 'MongoDB', 'MySQL', 'Docker', 'Linux'];
  frontend    = ['React', 'Next.js', 'Material-UI', 'styled-components', 'styled-system'];
}
`;

function About() {
  return (
    <Box>
      <Head>
        <title>about.js | Chris R. Short</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        lineNumberStyle={{ minWidth: 'initial', color: '#4f565d' }}
        style={{
          ...darcula,
          'hljs-string': {
            color: 'rgb(195, 232, 141)',
          },
          'hljs-title': {
            color: 'rgb(255, 203, 107)',
          },
          'hljs-keyword': {
            color: 'rgb(199, 146, 234)',
          },
        }}
        customStyle={{
          color: 'rgb(191, 199, 213)',
          backgroundColor: '#222b33',
          fontFamily:
            'SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace',
          fontSize: '1.1rem',
          padding: 0,
          margin: 0,
          lineHeight: 1.42,
          whiteSpace: 'pre-wrap',
        }}
      >
        {bio}
      </SyntaxHighlighter>
    </Box>
  );
}

export default About;
