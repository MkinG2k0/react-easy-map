import { Meta, StoryObj } from '@storybook/react'
import { Component } from '../test-item'

import { Map } from './'

type Story = StoryObj<typeof Map>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {},
}

const meta: Meta<typeof Map> = {
	title: 'Usage/Map',
	component: Map,
	args: {
		keyName: 'id',
		item: Component,
		data: [
			{ id: 1, name: 'first' },
			{ id: 2, name: 'second	' },
		],
		props: {
			thisProps: {},
		},
	},
}

export default meta

export const Base: Story = {
	args: {
		data: undefined,
		className: 'flex flex-col gap-2',
		keyName: 'id',
		withIndex: true,
		item: Component,
	},
}
export const WithWrap: Story = {
	args: {
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
		className: 'flex flex-col gap-2',

		item: ({ name }) => <>{name}</>,
	},
}
export const WithWrap2: Story = {
	args: {
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
		className: 'flex flex-col gap-2',

		item: (props) => <Component name={undefined} onClick={undefined} id={undefined} {...props} />,
	},
}
export const WithProps: Story = {
	args: {
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
		className: 'flex flex-col gap-2',

		item: Component,
		props: { anyFiled: 'value' },
	},
}

export const WithCustomNameProps: Story = {
	args: {
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
		className: 'flex flex-col gap-2',
		propsIn: 'data',
		item: Component,
		props: { anyFiled: 'value' },
	},
}
