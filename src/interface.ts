import { JSXElementConstructor, ReactHTML, ReactNode } from 'react'

export interface MapProps {
	data: Object[]
	item: ReactNode
	keyName?: string
	props?: any
	onClick?: (item: any, index: number, ...props) => void
	withIndex?: boolean
	type?: keyof ReactHTML
	typeItem?: keyof ReactHTML
	className?: string
}

export type HocProps = <T>(
	hoc: (comp: any) => any
) => JSXElementConstructor<MapProps>

export interface WrapProps {
	type?: keyof ReactHTML
	className?: string
}
