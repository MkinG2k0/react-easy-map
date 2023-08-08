import { JSXElementConstructor, ReactElement, ReactHTML, ReactNode } from 'react'

export type TOnClickItem<Props> = (item: Props, index: number, ...props) => void

export interface MapProps<
	Props extends Obj,
	AlwaysProps extends Obj,
	PropsIn extends string | undefined = undefined,
> {
	data?: Props[]
	item: Item<Props, AlwaysProps, PropsIn> // | ReactNode
	keyName?: keyof Props
	props?: AlwaysProps
	withIndex?: boolean
	type?: keyof ReactHTML
	typeItem?: keyof ReactHTML
	className?: string
	propsIn?: PropsIn
}

type Item<Props, AlwaysProps, PropsIn extends string | undefined = undefined> = (
	props: PropsIn extends string
		? Record<PropsIn, Props> & { props: AlwaysProps }
		: Props & AlwaysProps,
) => ReactNode

// (Func extends TOnClickItem<Props>
// 	? { onClick?: TOnClickItem<Props> }
// 	: {})
// TOnClickItem<Props> extends TOnClickItem<Props>
// 	? { CLick: string }
// 	: { moo: number }
export type HocProps = <
	Props extends Obj,
	AlwaysProps extends Obj,
	// Func extends TOnClickItem<Props>,
	TPropIn extends string | undefined = undefined,
>(
	hoc: (comp: any) => any,
) => JSXElementConstructor<MapProps<Props, AlwaysProps, TPropIn>>

export interface WrapProps {
	type?: keyof ReactHTML
	className?: string
}

export interface Obj extends Record<any, any> {}

export type WithProps<TKey extends string, TData, TProps extends object = object> = Record<
	TKey,
	TData
> & {
	index?: number
	onClick?: (item: any) => void
	props: TProps
}
