import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  // 1. Pega o token que vem no cabeçalho "Authorization"
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1]; // Pega só o código depois de "Bearer"

  // 2. Se não tem token, barra na hora
  if (!token) {
    return NextResponse.json({ message: 'Token não fornecido!' }, { status: 401 });
  }

  try {
    // 3. Tenta validar o token com a sua chave secreta
    const secret = new TextEncoder().encode("sua-chave-secreta-super-segura");
    await jwtVerify(token, secret);
    
    // 4. Se deu certo, deixa a requisição seguir viagem
    return NextResponse.next();
  } catch (error) {
    // 5. Se o token for falso ou expirou, erro 401
    return NextResponse.json({ message: 'Token inválido ou expirado!' }, { status: 401 });
  }
}

// 6. Define quais rotas o Middleware vai vigiar
export const config = {
  matcher: '/api/protegida/:path*',
};
