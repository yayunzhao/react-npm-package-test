import React from 'react';

class MyComponent2 extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
                <span> Component2 </span>
            </div>
        )
    }
};

export default MyComponent2;