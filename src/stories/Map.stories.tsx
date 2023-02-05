import './global.css'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Map } from '../main'

export default {
	title: 'Usage/Map',
	component: Map,
	args: {
		keyName: 'id',
	},
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />

const Component = ({ index = 'no index', name, onClick, id, ...props }) => {
	return (
		<div className={'component'} onClick={onClick}>
			<span className={'name'}> {name}</span>
			<span className={'index'}>{'index: ' + index}</span>
			<div className={'id'}> {'id: ' + id}</div>
			{props && <div className={'props'}> props: {JSON.stringify(props)}</div>}
		</div>
	)
}

export const Base = Template.bind({})

Base.args = {
	data: undefined,
	className: 'className',
	keyName: 'id',
	withIndex: true,
	item: Component,
}

export const WithWrap = Template.bind({})

WithWrap.args = {
	data: [
		{ name: 'Li item one', id: 1 },
		{ name: 'Li item two', id: 2 },
		{ name: 'Li item tree', id: 3 },
	],
	keyName: 'id',
	withIndex: true,
	type: 'ul',
	typeItem: 'li',
	onClick: () => {},
	className: 'wrap',
	item: ({ name }) => <>{name}</>,
}

export const WithWrap2 = Template.bind({})

WithWrap2.args = {
	data: [
		{ name: 'Li item one', id: 1 },
		{ name: 'Li item two', id: 2 },
		{ name: 'Li item tree', id: 3 },
	],
	keyName: 'id',
	withIndex: true,
	type: 'ul',
	typeItem: 'li',
	onClick: () => {},
	className: 'wrap',
	item: (props) => (
		<Component name={undefined} onClick={undefined} id={undefined} {...props} />
	),
}

export const WithProps = Template.bind({})

WithProps.args = {
	data: [
		{ name: 'Li', id: 1 },
		{ name: 'Li', id: 2 },
		{ name: 'Li', id: 3 },
	],
	keyName: 'id',
	withIndex: true,
	onClick: (...data) => {
		console.log(data)
	},
	className: 'wrap',
	item: Component,
	props: { anyFiled: 'value' },
}
