// pages/api/callback.js
import { WorkOS } from "@workos-inc/node";

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async (req, res) => {
  const { code } = req.query; // Extract the `code` from the query parameters

  console.log('CODEEEE: ', code)

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    // Use the `getProfileAndToken` method to retrieve user profile and token
    const { profile, accessToken } = await workos.sso.getProfileAndToken({
      code,
      clientId: process.env.WORKOS_CLIENT_ID,
    });

    console.log("User Profile:", profile);
    console.log("Access Token:", accessToken);

    // You can send the profile to the frontend or store it in a session
    res.status(200).json({ profile });
  } catch (error) {
    console.error("Error retrieving profile and token:", error);
    res.status(500).json({ error: "Failed to retrieve profile and token" });
  }
};
