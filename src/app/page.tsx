import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/clientes">
          <Image
            src="/img/clientes-card.svg"
            alt="Clientes"
            width={348}
            height={170}
          />
        </Link>
      </div>
      <div className={styles.card}>
        <Link href="/consultas">
          <Image
            src="/img/consultas-card.svg"
            alt="Consultas"
            width={348}
            height={170}
          />
        </Link>
      </div>
      <div className={styles.card}>
        <Link href="/funcionarios">
          <Image
            src="/img/clientes-card.svg"
            alt="Funcionários"
            width={348}
            height={170}
          />
        </Link>
      </div>
    </div>
  );
}
