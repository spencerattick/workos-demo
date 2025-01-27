import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;

export default async (req, res) => {
  const organization = req.url.includes('okta') ? 'org_01JJEVHMHH4CFQ7MWHT1DPCGHS' : 'org_01JJBZCB0GMQZ2VM7PC0RP1Z6E';

  const redirectUri = 'http://localhost:3000/api/loggedIn';

  const authorizationUrl = workos.sso.getAuthorizationUrl({
    organization,
    redirectUri,
    clientId,
  });

  res.redirect(authorizationUrl);
};
