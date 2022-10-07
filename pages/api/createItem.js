import { table, getMinifiedItem } from '../../utils/Airtable'

export default async (req, res) => {
  const { item } = req.body
  try {
    const newRecords = await table.create([{ fields: { item } }])
    res.status(200).json(getMinifiedItem(newRecords[0]))
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Something went wrong! 😕' })
  }
}