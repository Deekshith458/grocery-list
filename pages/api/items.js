import { table, minifyItems } from '../../utils/Airtable'

export default async (_req, res) => {
	try {
		const records = await table.select({}).firstPage()
    const minfiedItems = minifyItems(records)
		res.status(200).json(minfiedItems)
	} catch (error) {
		console.error(err)
		res.status(500).json({ msg: 'Something went wrong! 😕' })
	}
}