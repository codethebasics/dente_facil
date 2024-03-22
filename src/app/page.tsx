import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/img/clientes-card.svg"
          alt="Clientes"
          width={348}
          height={170}
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/img/consultas-card.svg"
          alt="Clientes"
          width={348}
          height={170}
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/img/clientes-card.svg"
          alt="Funcionários"
          width={348}
          height={170}
        />
      </div>
    </div>
  );
}
