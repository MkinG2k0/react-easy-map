import { ReactHTML } from 'react'

export interface MapProps {
	data: any[]
	Component: any
	keyName?: string
	props?: any
	onClick?: (item: any, index: number) => void
	withIndex?: boolean
	type?: keyof ReactHTML
	typeItem?: keyof ReactHTML
	withOnClick?: boolean
	className?: string
}
