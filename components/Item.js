import React, { useContext } from 'react'
import { ItemsContext } from '../context/items'

const Item = ({ item }) => {
  // for updating and deleting item
  const { updateItem, deleteItem } = useContext(ItemsContext)

  // Update the record when the checkbox is checked
  const handleCompleted = () => {
    const updatedFields = {
      ...item.fields,
      brought: !item.fields.brought,
    }
    const updatedItem = { id: item.id, fields: updatedFields }
    updateItem(updatedItem)
  }

  return (
    <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
      <input
        type="checkbox"
        name="brought"
        id="brought"
        checked={item.fields.brought}
        className="mr-2 form-chechbox h-5 w-5"
        onChange={handleCompleted}
      />
      <p
        className={`flex-1 text-gray-800 ${
          item.fields.brought ? 'line-through' : ''
        }`}
      >
        {item.fields.item}
      </p>
      {/* delete item when the delete button is clicked*/}
      <button
        type="button"
        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default Item
