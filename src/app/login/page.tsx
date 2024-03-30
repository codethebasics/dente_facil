'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import { useState } from 'react';

type LoginRequest = {
  username?: string;
  password?: string;
};

export default function LoginIndex() {
  const router = useRouter();

  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    username: '',
    password: '',
  });

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log('login', loginRequest);
    setLoginRequest({
      username: '',
      password: '',
    });
  };

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
      <form
        className={styles.formCadastro}
        onSubmit={handleLogin}
        method="post"
      >
        <div className={styles.control}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={loginRequest?.username}
            onChange={(evt) =>
              setLoginRequest({ ...loginRequest, username: evt.target.value })
            }
          />
        </div>
        <div className={styles.control}>
          <label>Senha</label>
          <input
            type="password"
            placeholder="*******"
            value={loginRequest?.password}
            onChange={(evt) =>
              setLoginRequest({ ...loginRequest, password: evt.target.value })
            }
          />
        </div>
        <div className={styles.control}>
          <button>Entrar</button>
        </div>
      </form>
      <div className={styles.bottomCta}>
        <div style={{ cursor: 'pointer', userSelect: 'none' }}>
          <span onClick={() => router.push('cadastro')}>Cadastrar</span>
        </div>
        <div style={{ cursor: 'pointer', userSelect: 'none' }}>
          <span>Esqueci a senha</span>
        </div>
      </div>
    </div>
  );
}
