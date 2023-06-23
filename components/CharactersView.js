import React from 'react'
import Image from 'next/image'
import styles from "@/styles/CharactersView.module.css"
import { PaginationSelector } from "../components/PaginationSelector"
import { usePagination } from "../hooks/usePagination"
import { PortalLoader} from "../components/PortalLoader"
export default function CharactersListView() {
  const { items,
    page,
    totalPages,
    loading,
    error,
    handlePageChange,
    clickNextPage,
    clickPrevPage } = usePagination(() => fetch(`/api/getCharacters?page=${page}`).then(res => res.json()).then(data => data))

  return (
    <>
      <h1 className={`${styles.title}`}>Rick & Morty Characters</h1>

      {loading && <PortalLoader />}

      <div className={`${styles.allCards}`}>
        {items.results?.map(item => (
          <div className={`${styles.singleCard}`} key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            />
            <h3>{item.name}</h3>
          </div>
        ))}

      </div>
        <PaginationSelector
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          clickNext={clickNextPage}
          clickPrev={clickPrevPage}
        />
    </>
  )
}
