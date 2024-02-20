import * as postmark from "postmark";
const serverToken = process.env.POSTMARK_API_TOKEN;

export async function POST(request: Request) {
    const res = await request.json();
    let client = new postmark.ServerClient("8127b402-d9d8-410d-93d4-a2253d963a56");
    
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
