import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default (req, res) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http'; 
    const host = req.headers.host; 
  
    try {
        console.log('SERVER LOGOUT')
        const logoutUrl = workos.userManagement.getLogoutUrl({
            sessionId: 'session_01HQAG1HENBZMAZD82YRXDFC0B',
            returnTo: `${protocol}://${host}`,
          });
        
          res.redirect(`${protocol}://${host}`)
          
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

