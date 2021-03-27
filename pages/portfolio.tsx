import { HTMLAttributes } from 'react';
import Head from 'next/head';
import { VscCloudDownload, VscStarFull, VscStarHalf } from 'react-icons/vsc';

import Box from '../components/Box/Box';
import Flex from '../components/Flex/Flex';

const Divider = ({ style }: HTMLAttributes<HTMLElement>) => (
  <div style={{ marginRight: 10, ...style }}>|</div>
);

function Portfolio() {
  return (
    <Box>
      <Head>
        <title>Extension: Portfolio | Chris R. Short</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Flex marginBottom="1rem">
        <Box height={128} width={128} marginRight="8px">
          <img src="/portfolio.png" alt="" width="100%" height="auto" />
        </Box>

        <Flex flex={1} flexDirection="column" overflow="hidden">
          <Box>
            <h1
              style={{ margin: '8px 0', fontSize: '2.2rem', fontWeight: 700 }}
            >
              Portfolio
            </h1>
          </Box>
          <Flex>
            <p
              style={{
                marginTop: 0,
                marginRight: 10,
                marginBottom: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              Chris R. Short
            </p>
            <Divider />
            <p
              style={{
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                marginBottom: 0,
                marginRight: 10,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              <VscCloudDownload style={{ marginRight: 5 }} /> 1,325,623
            </p>
            <Divider />
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarHalf style={{ color: '#ff8e00' }} />
            </div>
            <Divider />
            <p style={{ margin: 0 }}>v0.0.1</p>
          </Flex>
          <Box>
            <p
              style={{
                margin: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              <small>
                Unfortunately most of my projects are private within the company
                I work for currently, but you can find my public work here{' '}
                <span role="img" aria-label="Smiling Face">
                  🙂
                </span>{' '}
              </small>
            </p>
          </Box>
        </Flex>
      </Flex>

      <Box>
        <p
          style={{
            textDecoration: 'underline',
            marginBottom: '.2rem',
            fontWeight: 600,
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <small>Details</small>
        </p>
        <hr
          style={{
            background: 'hsla(0,0%,53%,.45)',
            padding: 0,
            margin: '0 0 calc(1.45rem - 1px)',
            border: 'none',
            height: 1,
          }}
        />
      </Box>

      <Box style={{ margin: '0 auto', width: '100%', maxWidth: 960 }}>
        <div
          style={{
            display: 'flex',
            marginBottom: '1rem',
            padding: '1rem',
            boxShadow: '1px 1px 11px rgba(0,0,0, 0.8)',
          }}
        >
          <div style={{ width: 150, height: 150, marginRight: 10 }}>
            <img src="/wa211.png" alt="" width="100%" height="auto" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>Washington 2-1-1 Search</h3>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '.8rem' }}>
              Web Application
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '.5rem' }}>
              Washington 2-1-1 is working towards building a better future for
              all 2-1-1&apos;s. For years, the data they work with has been
              stored in databases and primarily used to power their call
              centers. I lead this project in converting their data to a modern
              and easily searchable format. I also created both the backend and
              frontend that you see today on Washington 2-1-1&apos; search
              application.
            </p>
            <div style={{ display: 'flex' }}>
              <p style={{ margin: 0, marginRight: '1rem' }}>
                <a
                  href="https://search.wa211.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Web Application
                </a>
              </p>
            </div>
          </div>
        </div>
      </Box>

      <Box style={{ margin: '0 auto', width: '100%', maxWidth: 960 }}>
        <div
          style={{
            display: 'flex',
            marginBottom: '1rem',
            padding: '1rem',
            boxShadow: '1px 1px 11px rgba(0,0,0, 0.8)',
          }}
        >
          <div style={{ width: 150, height: 150, marginRight: 10 }}>
            <img src="/npmjs.jpg" alt="" width="100%" height="auto" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>react-hls-player</h3>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '.8rem' }}>
              NPM Package
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '.5rem' }}>
              React HLS Player was a project that had been abandoned and had
              some really weird bugs that wouldn&apos;t work for my project. So,
              I forked the project, fixed the bugs, and pushed for others to
              use. Since them I&apos;ve implemented the fixes for all of the
              issues that were created for the original package and have decided
              to support it long term.
            </p>
            <div style={{ display: 'flex' }}>
              <p style={{ margin: 0, marginRight: '1rem' }}>
                <a
                  href="https://www.npmjs.com/package/react-hls-player"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Package
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a
                  href="https://github.com/devcshort/react-hls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Portfolio;
