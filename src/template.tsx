import { Map } from '~/main'

const data = [
	{ id: 1, name: 'Maga' },
	{ id: 2, name: 'Kama' },
	{ id: 3, name: 'Alex' },
]

export const BasicMap = () => {
	return (
		<>
			{data.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</>
	)
}

export const EasyMap = () => {
	return (
		<>
			<Map data={data} Component={Item} />
		</>
	)
}

const Item = (item) => {
	return <div>{item.name}</div>
}
