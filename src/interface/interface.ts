import { JSXElementConstructor, ReactElement, ReactHTML, ReactNode } from 'react'

export type TOnClickItem<Props> = (item: Props, index: number, ...props) => void

export interface MapProps<Props extends Obj, AlwaysProps extends Obj> {
	data?: Props[]
	onClick?: TOnClickItem<Props>
	item:
		| ((
				props: Props & AlwaysProps,
				// (Func extends TOnClickItem<Props>
				// 	? { onClick?: TOnClickItem<Props> }
				// 	: {})
		  ) => ReactNode)
		| ReactNode
	keyName?: keyof Props
	props?: AlwaysProps
	withIndex?: boolean
	type?: keyof ReactHTML
	typeItem?: keyof ReactHTML
	className?: string
	propsIn?: string
}

// TOnClickItem<Props> extends TOnClickItem<Props>
// 	? { CLick: string }
// 	: { moo: number }
export type HocProps = <
	Props extends Obj,
	AlwaysProps extends Obj,
	Func extends TOnClickItem<Props>,
>(
	hoc: (comp: any) => any,
) => JSXElementConstructor<MapProps<Props, AlwaysProps>>

export interface WrapProps {
	type?: keyof ReactHTML
	className?: string
}

export interface Obj extends Record<any, any> {}
