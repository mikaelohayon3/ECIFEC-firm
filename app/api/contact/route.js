import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request) {
  try {
    // Récupérer l'IP du client
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Rate limiting - Vérifier avant toute autre validation
    const rateLimitResult = checkRateLimit(ip);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Trop de tentatives. Veuillez patienter avant de réessayer.',
          retryAfter: rateLimitResult.retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          }
        }
      );
    }

    // CSRF Protection
    const csrfTokenFromCookie = request.cookies.get('csrf-token')?.value;
    const csrfTokenFromHeader = request.headers.get('X-CSRF-Token');

    if (!csrfTokenFromCookie || csrfTokenFromCookie !== csrfTokenFromHeader) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Server-side validation
    if (!body.name || !body.email || !body.message || !body.rgpd) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get EmailJS credentials from server environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    // Prepare template parameters
    const templateParams = {
      from_name: body.name,
      from_email: body.email,
      phone: body.phone || 'Non renseigné',
      request_type: body.requestType === 'devis' ? 'Demande de devis' :
                   body.requestType === 'rendez-vous' ? 'Prise de rendez-vous' :
                   'Question générale',
      sector: body.sector || 'Non spécifié',
      message: body.message,
      ip_address: ip,
    };

    // Send email via EmailJS
    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey,
        privateKey: privateKey,
      }
    );
    
    // Send auto-response if configured
    const autoresponseTemplateId = process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID;
    if (autoresponseTemplateId && autoresponseTemplateId !== 'your_autoresponse_template_id_here') {
      const autoresponseParams = {
        to_name: body.name,
        to_email: body.email,
        request_type: templateParams.request_type,
      };
      
      await emailjs.send(
        serviceId,
        autoresponseTemplateId,
        autoresponseParams,
        {
          publicKey: publicKey,
          privateKey: privateKey,
        }
      );
    }

    // Retourner succès avec headers de rate limiting
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully'
      },
      {
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        }
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error.message || error.text || error);

    return NextResponse.json(
      {
        error: 'Failed to send email',
        message: error.message || error.text || 'An error occurred'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
