# 🛡️ Next.js Micro-API Authentication (JWT)

Este projeto demonstra a implementação de um sistema de autenticação moderno e seguro utilizando **JSON Web Tokens (JWT)** dentro do ecossistema Next.js (App Router). 

O foco principal foi construir uma arquitetura **Stateless** e **Secure-by-Design**, simulando o backend de uma aplicação de alta escala, como o meu projeto de TCC (ARCA).

## 🚀 Tecnologias Utilizadas
* **Next.js 15+**: Framework principal.
* **TypeScript**: Tipagem estática para evitar falhas de lógica.
* **Jose**: Biblioteca de alto desempenho para assinatura e verificação de JWT.
* **Termux/Acode**: Ambiente de desenvolvimento mobile (Android).

## 🛡️ Funcionalidades de Segurança
* **Endpoint de Login (`/api/login`)**: Validação de credenciais e emissão de tokens assinados com algoritmo HS256.
* **Middleware de Proteção**: Interceptador global que valida o token no cabeçalho `Authorization: Bearer` antes de liberar o acesso às rotas protegidas.
* **Gestão de Sessão Stateless**: O servidor não armazena sessões, garantindo maior escalabilidade e segurança.

## 🛠️ Como Testar (Via Terminal)

1. **Gere o Token:**
  ```bash
   TOKEN=$(curl -s -X POST http://localhost:3000/api/login \
        -H "Content-Type: application/json" \
        -d '{"username": "rodrigo", "password": "123456"}' | jq -r .token)

2.**Acesse a Rota Protegida:**
  ```bash
   curl -H "Authorization: Bearer $TOKEN" http://localhost:3000/api/protegida
   
## 📈 Evolução do Projeto

​Este módulo de autenticação será integrado ao Projeto ARCA, onde as credenciais serão validadas via Supabase/PostgreSQL e as senhas serão criptografadas com BCrypt.
​Desenvolvido por Rodrigo Pereira 🇧🇷
Estudante de Desenvolvimento de Sistemas na ETEC Pedro Ferreira Alves

## ⚠️ Aviso Legal

Este projeto foi desenvolvido para fins **estritamente educacionais** e de auditoria em redes próprias. O autor não se responsabiliza pelo uso indevido destas ferramentas ou conceitos em ambientes de terceiros sem a devida autorização expressa. Pratique o **Ethical Hacking**.

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


