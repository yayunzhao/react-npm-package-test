import React from 'react';

class MyComponent extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
                <span> Component</span>
            </div>
        )
    }
};

export default MyComponent;