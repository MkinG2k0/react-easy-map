Link to the documentation in [storybook](https://react-easy-map.vercel.app/)

Link to  [git-hub](https://github.com/MkinG2k0/react-easy-map)

## Basic react map usage

```tsx 
import { Map } from 'react-easy-map'

const data = [
	{id: 1, name: 'Maga'},
	{id: 2, name: 'Kama'},
	{id: 3, name: 'Alex'},
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

```

## With react-easy-map usage

```tsx
import { Map } from 'react-easy-map'

const data = [
	{id: 1, name: 'Maga'},
	{id: 2, name: 'Kama'},
	{id: 3, name: 'Alex'},
]

export const EasyMap = () => {
	return (
		<>
			<Map data={data} Component={Item}/>
		</>
	)
}

const Item = (item) => <div>{item.name}</div>

```
