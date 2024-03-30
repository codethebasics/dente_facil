'use client';

import styles from './page.module.css';
import users from './clientes.json';
import { useState } from 'react';
import Image from 'next/image';

/**
 * -----
 * Index
 * -----
 */
export default function ClientesIndex() {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const setFilterEventHandler = (e: any) => {
    setFilteredUsers(
      users.filter((user) => user.summary.toLowerCase().match(e))
    );
  };

  const deleteEventCallback = (e: any) => {
    console.log('Index> deletando da lista', e);
    setFilteredUsers(filteredUsers.filter((user) => user.id !== e));
  };

  return (
    <div className={styles.container}>
      <Searchbar setFilterEvent={setFilterEventHandler} />
      <UserList
        list={filteredUsers}
        deleteEventCallback={deleteEventCallback}
      />
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
  const clean = () => {
    setFilterEvent('');
    const search: HTMLInputElement | null = document.querySelector('#search');
    if (search) {
      search.value = '';
      search.focus();
    }
  };
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarContainerInput}>
        <input
          id={'search'}
          type="text"
          onChange={handleEvent}
          placeholder="Digite parte do nome"
        />
      </div>
      <div className={styles.searchbarContainerCta}>
        <Image
          src={'/img/clean.svg'}
          alt={'Limpar'}
          width={35}
          height={35}
          onClick={clean}
        />
      </div>
    </div>
  );
}

/**
 * --------
 * UserList
 * --------
 */
function UserList({ list, deleteEventCallback }: any) {
  return (
    <div className={styles.userListContainer}>
      {list.length ? (
        list.map((user: any) => (
          <ul key={user.id}>
            <li>
              <UserCard
                id={user.id}
                image={user.image}
                summary={user.summary}
                email={user.email}
                phone={user.phone}
                deleteEventCallback={deleteEventCallback}
              />
            </li>
          </ul>
        ))
      ) : (
        <div className={styles.noMatch}>Nenhum resultado encontrado</div>
      )}
    </div>
  );
}

/**
 * --------
 * UserCard
 * --------
 */
function UserCard({
  id,
  image,
  summary,
  email,
  phone,
  deleteEventCallback,
}: any) {
  const handleEdit = () => {
    confirm('Editar registro?');
    console.log('editando registro', id);
  };

  const handleDelete = () => {
    confirm('Deletar registro?');
    console.log('deletando registro', id);
    deleteEventCallback(id);
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
