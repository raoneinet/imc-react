# 🧮 Calculadora de IMC - React.js + Tailwind CSS

Aplicação React para cálculo do Índice de Massa Corporal (IMC) com validação de entradas, botões de controle e interface estilizada usando Tailwind CSS.

---

## ⚙️ Funcionalidades e Regras

- **Validações:**
  - Verifica se os números inseridos são válidos e diferentes de zero;
  - Confirma que nenhum campo esteja vazio;
  - Manipula e converte strings para números corretamente;

- **Cálculo do IMC:**
  \[
  \text{IMC} = \frac{\text{peso}}{\text{altura} \times \text{altura}}
  \]

- **Botões:**
  - Botão verde: executa o cálculo do IMC;
  - Botão vermelho: limpa os campos de input e o resultado exibido;
  - Botão fixo no rodapé que também executa o cálculo.

- Código principal com regras e lógica em:  
  `/src/components/imcCalc.tsx`

---

## 🚀 Como rodar a aplicação localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc.git
   cd calculadora-imc
Instale as dependências:

bash

npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
Rode a aplicação:

bash

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
Abra no navegador o endereço:

http://localhost:3000
🧱 Tecnologias utilizadas
React.js (com TypeScript)

Tailwind CSS

Vite (ou outro bundler conforme configuração)

💡 Dicas
O componente imcCalc.tsx contém toda a lógica do cálculo e validações;

Estilização feita com Tailwind, garantindo design responsivo e clean;

Botões coloridos indicam ações distintas para facilitar a UX.


✍️ Autor
Desenvolvido por Raone Ferreira


https://github.com/user-attachments/assets/7d25156f-9b03-49c0-9755-224e47014b2b




