import client from '@/postmark'

export async function POST(request: Request) {
    const res = await request.json();
    console.log(res);
    
    client.sendEmail({
        "From": "hi@robfraser.dev",
        "To": "hi@robfraser.dev",
        "Subject": "New Contact Form Submission",
        "HtmlBody": `
            <p>First Name: ${res.firstName}</p>
            <p>Last Name: ${res.lastName}</p>
            <p>Email: ${res.email}</p>
            <p>Phone: ${res.phone}</p>
            <p>Message: ${res.message}</p>
        `,
    });

    return new Response(JSON.stringify(res), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
