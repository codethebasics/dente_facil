'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header setMenuOpened={setMenuOpened} />
        <main>{children}</main>
        <Footer />
        <OverlayMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      </body>
    </html>
  );
}

function Header({ setMenuOpened }: any) {
  return (
    <header>
      <div>
        <div className="badge">
          <Image
            src="/img/logo.svg"
            alt="Dente Fácil"
            width={118}
            height={35}
          />
        </div>
        <div className="menubar">
          <Image
            src="/img/hamburger.svg"
            alt="Menu"
            width={45}
            height={45}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <div className="version">versão MVP</div>
      </div>
    </footer>
  );
}

function OverlayMenu({ menuOpened, setMenuOpened }: any) {
  return (
    <div className={`overlay ${menuOpened ? 'visible' : 'hidden'}`}>
      <div className="close">
        <span onClick={() => setMenuOpened(false)}>×</span>
      </div>
      <div>
        <ul className="menulinks">
          <li>Clientes</li>
          <li>Consultas</li>
          <li>Funcionários</li>
          <li>Ajuda</li>
          <li>Sair</li>
        </ul>
      </div>
    </div>
  );
}
