'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

/**
 * ----
 * Root
 * ----
 */
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
        <main>
          <div>{children}</div>
        </main>
        <Footer />
        <OverlayMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      </body>
    </html>
  );
}

/**
 * ------
 * Header
 * ------
 */
function Header({ setMenuOpened }: any) {
  const router = useRouter();
  const handleNavigation = () => router.push('/');

  return (
    <header>
      <div>
        <div className="badge">
          <Image
            src="/img/logo.svg"
            alt="Dente Fácil"
            width={118}
            height={35}
            onClick={() => handleNavigation()}
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

/**
 * ------
 * Footer
 * ------
 */
function Footer() {
  return (
    <footer>
      <div>
        <div className="version">versão MVP</div>
      </div>
    </footer>
  );
}

/**
 * ------------
 * Overlay menu
 * ------------
 */
function OverlayMenu({ menuOpened, setMenuOpened }: any) {
  const router = useRouter();

  const handleNavigation = (target: string) => {
    router.push(target);
    setMenuOpened(false);
  };

  return (
    <div className={`overlay ${menuOpened ? 'visible' : 'hidden'}`}>
      <div className="close">
        <span onClick={() => setMenuOpened(false)}>×</span>
      </div>
      <div>
        <ul className="menulinks">
          <li onClick={() => handleNavigation('/')}>Início</li>
          <li onClick={() => handleNavigation('/clientes')}>Clientes</li>
          <li onClick={() => handleNavigation('/consultas')}>Consultas</li>
          <li onClick={() => handleNavigation('/funcionarios')}>
            Funcionários
          </li>
          <li onClick={() => handleNavigation('/login')}>Sair</li>
        </ul>
      </div>
    </div>
  );
}
