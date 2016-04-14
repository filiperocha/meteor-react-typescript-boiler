import * as React from "react";
import { render } from "react-dom";

class Hello extends React.Component<{}, {}> {
    render() {
        return (
          <div>
            <h1>Hello TSX!</h1>
          </div>
        );
    }
}

render(<Hello />, document.getElementById("root"));