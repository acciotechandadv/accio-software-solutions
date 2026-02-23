import { NextRequest, NextResponse } from 'next/server'

// Note: For GitHub Pages deployment, this API route won't work directly
// You'll need to either:
// 1. Use Vercel for hosting (recommended)
// 2. Use a serverless function provider (AWS Lambda, Netlify Functions, etc.)
// 3. Use a third-party service like Formspree or Basin

// For now, this is set up for Vercel deployment (which is ideal)
// To use with GitHub Pages, switch to Formspree or similar service

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // EMAIL SERVICE DISABLED - Configure when ready
    // =====================================================
    // This endpoint currently does NOT send emails.
    // 
    // To enable email notifications, choose one:
    // 
    // OPTION 1: Vercel + Resend
    // 1. Sign up at https://resend.com
    // 2. Get API key
    // 3. Add to Vercel env vars: RESEND_API_KEY
    // 4. Uncomment code below and deploy:
    // 
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@acciosolutions.com',
    //   to: 'hello@acciosolutions.com',
    //   subject: `New contact from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // })
    // if (error) throw error
    //
    // OPTION 2: GitHub Pages + Formspree
    // 1. Sign up at https://formspree.io
    // 2. Create form, get ID
    // 3. Update Contact.tsx to POST to Formspree endpoint
    // See DEPLOYMENT.md for full instructions
    // =====================================================

    // For now: Log to console and return success
    console.log('✅ Contact form received (email not configured):', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { 
        message: 'Form received! Email service not yet configured.',
        note: 'See DEPLOYMENT.md to set up email notifications'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Form processing failed' },
      { status: 500 }
    )
  }
}
