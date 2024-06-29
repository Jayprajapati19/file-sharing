import { EmailTemplate } from './../../_components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const responce = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Filesharing@resend.dev',
            // from: 'Acme <Filesharing@resend.dev>',
            // to: [responce.emailToSend],
            to: ['jayp37679@gmail.com'],
            subject: responce?.userName + " share file with You",
            react: EmailTemplate({ responce }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

// Acme <onboarding@resend.dev>