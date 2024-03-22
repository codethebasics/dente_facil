import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/img/clientes-card.svg"
          alt="Clientes"
          width={348}
          height={178}
        />
      </div>
      <div>
        <Image
          src="/img/consultas-card.svg"
          alt="Clientes"
          width={348}
          height={178}
        />
      </div>
    </div>
  );
}
