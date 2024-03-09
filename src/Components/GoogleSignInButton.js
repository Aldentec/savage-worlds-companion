import React, { useEffect } from 'react';

const GoogleSignInButton = () => {
  useEffect(() => {
    const loadGoogleSignIn = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client?origin=http://localhost:3000';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        window.onload = () => {
          const handleCredentialResponse = (response) => {
            // Handle the response from Google Identity Services
            console.log('Credential response:', response);
          };
          
          const auth2 = window.gapi.auth2.init({
            client_id: '112825158764-4lbi3c6fb6bt99v9v8urjj10a11crit9.apps.googleusercontent.com',
            scope: 'email',
          });
          
          auth2.attachClickHandler(document.querySelector('.g_id_signin'), {}, handleCredentialResponse);
        };
      };
    };

    loadGoogleSignIn();
  }, []);

  return (
    <div id="g_id_onload" data-client_id="112825158764-4lbi3c6fb6bt99v9v8urjj10a11crit9.apps.googleusercontent.com" data-callback="handleCredentialResponse">
      <div className="g_id_signin" data-type="standard">Sign in with Google</div>
    </div>
  );
};

export default GoogleSignInButton;
