'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

export default function LoginIndex() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/img/logo-full.svg"
          alt="Dente Fácil"
          width={255}
          height={116}
        />
      </div>
      <form className={styles.formCadastro}>
        <div className={styles.control}>
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />
        </div>
        <div className={styles.control}>
          <label>Senha</label>
          <input type="password" placeholder="*******" />
        </div>
        <div className={styles.control}>
          <button>Entrar</button>
        </div>
      </form>
      <div className={styles.bottomCta}>
        <div>
          <span onClick={() => router.push('cadastro')}>Cadastrar</span>
        </div>
        <div>
          <span>Esqueci a senha</span>
        </div>
      </div>
    </div>
  );
}
