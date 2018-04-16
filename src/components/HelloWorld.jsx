import React, { Component } from 'react';
export class HelloWorld extends Component {
    render() {
        return (
            <div className="hello-world">
                <h1>Enough Babel! Don't over React! Turn down the SASS! ... Oh, hello {this.props.name}! Welcome to the Webpack!</h1>
            </div>
        );
    }
}
export default HelloWorld;