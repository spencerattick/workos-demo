import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async (req, res) => {
    try {
        const users = await workos.directorySync.listUsers({
            directory: 'directory_01JJFBQQDGFBC66CZEWZP8NXK5',
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
