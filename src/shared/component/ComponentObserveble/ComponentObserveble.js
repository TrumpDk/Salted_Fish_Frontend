import React, { Component } from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';

const fish = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF9/f3b9VISgAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII=';
class Observer extends Component {

    imgRefs = [];

    goTo = (id) => {
        this.props.history.push(`Item?id=${id}`);
    }

    // refer to https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
    io = new IntersectionObserver(entrys => {
        entrys.forEach(item => {
            if (item.intersectionRatio <= 0) {
                return false;
            }
            item.target.src = item.target.getAttribute('data_src');
            this.io.unobserve(item.target);
        })
    }, {});

    componentDidMount() {
        this.imgRefs.forEach(element => {
            this.io.observe(element.current);
        });
        this.imgRefs = [];
    }

    componentWillUnmount() {
        if (this.io) {
            this.io.disconnect();
        }
    }

    componentDidUpdate() {
        this.imgRefs.forEach(element => {
            this.io.observe(element.current);
        });
        this.imgRefs = [];
    }
    render() {
        return this.props.imgList.map(item => {
            const imgRef = React.createRef();
            this.imgRefs.push(imgRef);
            return <div className="img_container" key={item.items_Id} onClick={this.goTo.bind(this, item.items_Id)}>
                <div className="border">
                    <div className="img_content">
                        <img src={fish} data_src={item.img_Src} width="100%" height="auto" ref={imgRef} />
                    </div>
                    <div className="detail_content">
                        <div>
                            <span className="detail_wrapper">{item.desc_Detail}</span>
                        </div>
                        <div className="price_wrapper">{`￥${item.item_Spec_Price}`}</div>
                    </div>
                </div>
            </div>
        })
    }
}

export default withRouter(Observer);