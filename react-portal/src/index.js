import React, { useState } from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    componentDidMount() {
        if (modalRoot) {
            modalRoot.appendChild(this.el);
        }
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

const Parent = () => {
    const [click, setClick] = useState(0);

    return (
        <div onClick={() => setClick(click + 1)}>
            <p>Number of clicks: {click}</p>
            <p>
                Open up the browser DevTools to observe that the button is not a child of the div with the onClick
                handler.
            </p>
            <Modal>
                <Child />
            </Modal>
        </div>
    );
};

function Child() {
    return (
        <div className='modal'>
            <button>Click</button>
        </div>
    );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
