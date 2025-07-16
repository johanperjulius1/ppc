import { NextRequest, NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

export function handleCloaking(request: NextRequest) {
  // Get User-Agent
  const userAgent = request.headers.get('user-agent') || '';

  // Parse User-Agent with ua-parser-js
  const parser = new UAParser(userAgent);
  const uaResult = parser.getResult();
  const isBot = uaResult.ua.toLowerCase().includes('bot') || uaResult.device.type === undefined;
  const isMobile = uaResult.device.type === 'mobile';

  // Set cookies for downstream use
  const response = NextResponse.next();
  response.cookies.set('isBot', isBot.toString(), { path: '/' });
  response.cookies.set('isMobile', isMobile.toString(), { path: '/' });

  // Cloaking logic: Rewrite for bots or mobile
  if (isBot) {
    return NextResponse.rewrite(new URL('/bot-optimized', request.url));
  }
  if (isMobile) {
    return NextResponse.rewrite(new URL('/mobile', request.url));
  }

  return response;
}