import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Accordion extends Component {
    static propTypes = {
        headerClass: PropTypes.string,
        contentWrapperClass: PropTypes.string,
        isOpen: PropTypes.bool,
        onToggle: PropTypes.func,
        headerChildren: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: !!props.isOpen,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isOpen !== nextProps.isOpen) {
            this.toggle();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.open !== this.state.open && this.props.onToggle) {
            this.props.onToggle(this.state.open);
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open,
            };
        });
    };

    render() {
        return (
            <div className="Accordion">
                <div
                    onClick={this.toggle}
                    className={
                        this.state.open
                            ? this.props.headerClass ? 'Accordion__header ' + this.props.headerClass : 'Accordion__header'
                            : 'Accordion__header Accordion__header--collapsed'
                    }
                >
                    {this.props.title}
                    {this.props.headerChildren ? this.props.headerChildren() : null}
                </div>
                <div className={
                    this.state.open
                        ? this.props.contentWrapperClass ? 'Accordion__body ' + this.props.contentWrapperClass : 'Accordion__body'
                        : 'Accordion__body Accordion__body--collapsed'
                }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
