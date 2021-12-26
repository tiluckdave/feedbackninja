import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Feedback Ninja</title>
      </Head>
      <main>
        <Heading>
          Feedback Ninja
        </Heading>
        <Text>
          Current user: <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth?.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  )
}
