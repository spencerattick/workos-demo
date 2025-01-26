import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default (req, res) => {
    try {
        console.log('SERVER LOGOUT')
        const logoutUrl = workos.userManagement.getLogoutUrl({
            sessionId: 'session_01HQAG1HENBZMAZD82YRXDFC0B',
            returnTo: 'http://localhost:3000/loggedOut',
          });
        
          res.redirect('http://localhost:3000/loggedOut')
          
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

