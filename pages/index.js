import Head from 'next/head';
import styled from 'styled-components';

import LinkedInIcon from '../assets/icons/linkedin.svg';
import EmailIcon from '../assets/icons/email.svg';

const Main = styled.main``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: -55px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 64px;

  svg {
    margin-right: 16px;
  }
`;

const Headline = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 0;

  span {
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    font-size: 14px;
    color: #12D4C9;
    margin-bottom: 11px;
  }

  p {
    margin: 0;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mariusz Wójcik | Frontend Developer</title>
        <meta name="description" content="Are you looking for a skilled dev? Let’s talk!" />
        <link rel="icon" href="/favicon.ico" />

          <link
            rel="preload"
            href="/fonts/raleway/Raleway-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/raleway/Raleway-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/raleway/Raleway-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/raleway/Raleway-Bold.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <Main>
        <Section>
          <Box>
            <Headline>
              <span>Hello stranger!</span>
              <p>Are you looking for a <strong>skilled</strong> dev? Let’s talk!</p>
            </Headline>
            <Contact>
              <ContactItem>
                <LinkedInIcon />
                <span><a href="https://www.linkedin.com/in/simplypixi/">@simplypixi</a></span>
              </ContactItem>
              <ContactItem>
                <EmailIcon />
                <span><a href="mailto:pixiproject@gmail.com">pixiproject@gmail.com</a></span>
              </ContactItem>
            </Contact>
          </Box>
        </Section>
      </Main>

      <footer>

      </footer>
    </div>
  )
}
