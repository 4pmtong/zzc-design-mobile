export interface DialogProps {
    prefixCls?: string,
    maskClassName?: string,
    boxClassName?: string,
    className?: string,
    transitionName?: string,
    maskTransitionName?: string,
    visible: boolean,
    transparent?: boolean,
    maskClose?: boolean,
    closeCallback?: Function,
    maskAnimated?: Function,
    boxAnimated?: Function,
    style?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    title?: JSX.Element,
    footer?: JSX.Element | null,
}