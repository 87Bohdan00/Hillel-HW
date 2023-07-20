import React from "react";

export class Sidebar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="sidebar">
                <h2>Left Navigation</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsa saepe 
                        quo fugit vero harum voluptatem itaque sequi explicabo voluptas.
                    </li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet vero 
                        maiores incidunt, ad explicabo?
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam libero 
                        consequuntur necessitatibus rerum doloremque, quisquam quos autem non quam 
                        consectetur unde sunt expedita ratione, architecto nisi fugiat, minus odit 
                        animi.
                    </li>
                </ul>
            </div>
          );
    }
}