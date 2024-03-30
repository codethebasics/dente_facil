'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

export default function CadastroIndex() {
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
          <label>Nome</label>
          <input type="text" placeholder="João da Silva" />
        </div>
        <div className={styles.control}>
          <label>E-mail</label>
          <input type="email" placeholder="joao.silva@email.com" />
        </div>
        <div className={styles.control}>
          <label>Senha</label>
          <input type="password" placeholder="*******" />
        </div>
        <div className={styles.control}>
          <label>Confirme a senha</label>
          <input type="password" placeholder="*******" />
        </div>
        <div className={styles.control}>
          <button>Cadastrar</button>
        </div>
      </form>
      <div
        className={styles.back}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <span onClick={() => router.push('login')}>Voltar</span>
      </div>
    </div>
  );
}
