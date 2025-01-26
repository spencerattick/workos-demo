export default async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  res.redirect(302, `/loggedIn?code=${code}`);
};
