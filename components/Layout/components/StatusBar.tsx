import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledStatusBar = styled.div`
  align-items: center;
  background-color: #1d252b;
  display: flex;
  height: 25px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const StyledStatusText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  margin: 0;
`;

const Dot = styled.div`
  border-radius: 100%;
  height: 12px;
  width: 12px;
`;

const CurrentDocument = {
  '/': 'Preview README.md',
  '/about': 'about.js',
  '/resume': 'resume.pdf',
  '/portfolio': 'Extension: Portfolio',
  '/apps/strobelight/privacy-policy': 'Strobe Light (Ad Free) Privacy Policy',
};

export default function StatusBar() {
  const { pathname } = useRouter();

  return (
    <StyledStatusBar>
      <div style={{ display: 'flex' }}>
        <Dot
          style={{
            backgroundColor: 'rgb(237, 89, 74)',
            marginRight: '.3rem',
            marginLeft: '.3rem',
          }}
        />
        <Dot
          style={{ backgroundColor: 'rgb(253, 216, 0)', marginRight: '.3rem' }}
        />
        <Dot style={{ backgroundColor: 'rgb(90, 192, 90)' }} />
      </div>
      <StyledStatusText>
        {CurrentDocument[pathname]} - Chris R. Short
      </StyledStatusText>
      <div></div>
    </StyledStatusBar>
  );
}
