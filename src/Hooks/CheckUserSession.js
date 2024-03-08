import { Auth } from 'aws-amplify';

export const checkUserSession = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('User is logged in:', user);
    return true;
  } catch (error) {
    console.log('User is not logged in');
    return false;
  }
};
