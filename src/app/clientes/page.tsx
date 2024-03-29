'use client';

import styles from './page.module.css';
import users from './clientes.json';
import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * -----
 * Index
 * -----
 */
export default function ClientesIndex() {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleCallback = (e: any) => {
    setFilteredUsers(
      users.filter((user) => user.summary.toLowerCase().match(e))
    );
  };

  return (
    <div className={styles.container}>
      <Searchbar setFilterEvent={handleCallback} />
      <UserList list={filteredUsers} />
      <div className={styles.userListResume}>
        {filteredUsers.length} resultados encontrados
      </div>
    </div>
  );
}

/**
 * ---------
 * Searchbar
 * ---------
 */
function Searchbar({ setFilterEvent }: any) {
  const handleEvent = (e: any) => setFilterEvent(e.target.value);

  return (
    <div className={styles.searchbarContainer}>
      <input
        type="text"
        onKeyUp={handleEvent}
        placeholder="Digite parte do nome"
      />
    </div>
  );
}

function UserList({ list }) {
  return (
    <div className={styles.userListContainer}>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <UserCard
              image={user.image}
              summary={user.summary}
              email={user.email}
              phone={user.phone}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserCard({ image, summary, email, phone }) {
  const handleEdit = () => {
    confirm('Editar registro?');
  };

  const handleDelete = () => {
    confirm('Deletar registro?');
  };

  return (
    <div className={styles.userCard}>
      <div className={styles.userImage}>
        <div className={styles.imageContainer}>{image}</div>
      </div>
      <div className={styles.userData}>
        <div className={styles.summary}>{summary}</div>
        <div className={styles.description}>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      </div>
      <div className={styles.userCta}>
        <div>
          <Image
            src={'/img/pencil.svg'}
            alt={'Editar'}
            width={27}
            height={27}
            onClick={handleEdit}
          />
        </div>
        <div>
          <Image
            src={'/img/trash.svg'}
            alt={'Deletar'}
            width={27}
            height={27}
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
