import React, { Component } from 'react';
import './index.scss'
class Observer extends Component {
    constructor() {
        super();
        this.state = { isVisible: false };
        this.io = null;
        this.container = null;
    }
    componentDidMount() {
        this.io = new IntersectionObserver(entry => {
            const _entry = entry;
            if (_entry[0].isIntersecting && this.props.info.index === (this.props.info.length - 1)) {
                console.log('ss', this.props.info.nextPage);
                this.props.fetchNextPageData({ startIndex: this.props.info.nextPage, pageSize: 6 });
            }
            this.setState({ isVisible: _entry[0].isIntersecting });
        }, {});
        this.io.observe(this.container);
    }
    componentWillUnmount() {
        if (this.io) {
            this.io.disconnect();
        }
    }
    render() {
        return (
            <div className="img_container"
                ref={div => {
                    this.container = div;
                }}
            >
                {
                    this.props.children(this.state.isVisible, this.props.info.item)
                }
            </div>
        );
    }
}

export default Observer;