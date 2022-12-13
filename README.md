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

const BasicMap = () => {
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

**WARNING prop keyName must be unique for each object**

```tsx
import { Map } from 'react-easy-map'

const EasyMap = () => {
	return (
		<>
			<Map data={data} item={Item} keyName={'id'}/>
		</>
	)
}

const Item = (item) => <div>{item.name}</div>

```

## With hoc , example with mobx-react

```tsx
import { observer } from 'mobx-react'
import { MapWithHoc } from 'react-easy-map'

// It is recommended to put it in a separate file
export const ObserverMap = MapWithHoc(observer)
//

const EasyMap = () => {
	return (
		<>
			<ObserverMap data={data} item={Item} keyName={'id'}/>
		</>
	)
}

const Item = (item) => <div>{item.name}</div>

```

## Type props components in react-easy-map

```tsx
import { MapProps, HocProps } from 'react-easy-map'
```


