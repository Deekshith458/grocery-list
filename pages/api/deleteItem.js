import { table } from '../../utils/Airtable'

export default async (req, res) => {
	const { id } = req.body
	try {
		const deletedRecords = await table.destroy([id])
		res.status(200).json(deletedRecords)
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: 'Something went wrong! 😕' })
	}
}