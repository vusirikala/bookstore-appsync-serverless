import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';

export function App() {
  return (
    <>
      Hi There
    </>
  );
}

export default withAuthenticator(App);