import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Simulação de usuário (depois ligamos ao banco)
  if (body.username === "rodrigo" && body.password === "123456") {
    
    // Criando o segredo (Key) para assinar o token
    const secret = new TextEncoder().encode("sua-chave-secreta-super-segura");
    
    // Gerando o JWT
    const token = await new SignJWT({ user: body.username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h") // Token vale por 1 hora
      .sign(secret);

    return NextResponse.json({ auth: true, token });
  }

  return NextResponse.json({ auth: false, message: "Acesso Negado" }, { status: 401 });
}
