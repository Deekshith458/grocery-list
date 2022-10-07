import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { table, minifyItems } from '../utils/Airtable'
import { ItemsContext } from '../context/items'
import ItemForm from '../components/ItemForm'
import Item from '../components/Item'

export default function Home({ initialItems }) {
  const { items, setItems } = useContext(ItemsContext)

  useEffect(() => {
    setItems(initialItems)
  }, [initialItems, setItems])

  return (
    <div className="container mx-auto my-6 max-w-xl">
      <Head>
        <title>{'@Grocery List'}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>"
        ></link>
      </Head>

      <main>
        <p className="text-2xl font-bold text-grey-800 py-2">🛒 Grocery List</p>
        <ItemForm />
        <ul>
          {items && items.map((item) => <Item key={item.id} item={item} />)}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const items = await table.select({}).firstPage()
    return {
      props: {
        initialItems: minifyItems(items),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        err: 'Something went wrong 😕',
      },
    }
  }
}
