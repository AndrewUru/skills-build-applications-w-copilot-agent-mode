import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'POST':
            const { email, password, action } = req.body;

            if (action === 'signup') {
                const { user, error } = await supabase.auth.signUp({ email, password });
                if (error) return res.status(400).json({ error: error.message });
                return res.status(200).json({ user });
            } else if (action === 'login') {
                const { user, error } = await supabase.auth.signIn({ email, password });
                if (error) return res.status(400).json({ error: error.message });
                return res.status(200).json({ user });
            } else {
                return res.status(400).json({ error: 'Invalid action' });
            }

        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}