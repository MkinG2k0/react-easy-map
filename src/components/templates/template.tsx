import { Map } from '../../../dist'
import { FC } from 'react'

export const data = [
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

export const CustomPropsMap = () => {
	return (
		<>
			<Map data={data} item={({}) => <div>{}</div>} propsIn={'dataaa'} />
		</>
	)
}

export const EasyMap = () => {
	return (
		<>
			<Map data={data} item={({}) => <div>{}</div>} withIndex />
		</>
	)
}

export const EasyMap1 = () => {
	return (
		<>
			<Map data={data} item={({ id }) => <div>{id}</div>} />
		</>
	)
}

export const EasyMap2 = () => {
	return (
		<>
			<Map data={data} item={(props) => <Item {...props} />} />
		</>
	)
}

export const EasyMap3 = () => {
	return (
		<>
			<Map
				data={data}
				props={{ data: 'data' }}
				item={({ id, name, data }) => Item({ name, data })}
			/>
		</>
	)
}

export const Item: FC<{
	name: string
	data?: string
	onClick?: any
}> = (props) => {
	const { name, data, onClick } = props
	console.log(props)
	return <div onClick={onClick}>{name}</div>
}
