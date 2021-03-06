import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Dialog from '../../dialog';
import TouchFeedback from '../../touchFeedback';
import config from '../../_util/config';
import { zzcComponentUse } from '../../_util/gtag';
import { FullModalProps } from '../propsTyps';

export default class FullModal extends PureComponent<FullModalProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'FullModal', '组件渲染' );
    }

    static defaultProps = {
        prefixCls: `${config.cls}-full-modal`,
        style: {},
        visible: false,
        title: '',
        className: ''
    }

    render() {
        const {
            children,
            prefixCls,
            className,
            style,
            visible,
            title,
            closeCallback
        } = this.props;

        if ( visible ) {
            return (
                <Dialog
                    visible={visible}
                    style={style}
                    className={`${className}`}
                    transparent
                    boxClassName={`${prefixCls}-box`}
                >
                    <div className={classNames( `${prefixCls}-content`, className )}>
                        <div className={`${prefixCls}-head`}>
                            <h5>{title}</h5>
                        </div>
                        <div className={`${prefixCls}-body`}>
                            {children}
                        </div>
                        <div className={`${prefixCls}-footer`}>
                            <TouchFeedback
                                activeClassName={`${prefixCls}-btn-active`}
                                onTouchEnd={() => { closeCallback(); }}
                            >
                                <div className={`${prefixCls}-btn`}>
                                    <span />
                                </div>
                            </TouchFeedback>
                        </div>
                    </div>
                </Dialog>
            );
        }
        return null;
    }
}

