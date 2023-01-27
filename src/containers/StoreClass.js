import React from "react";
import { IconSwitch } from "../components/IconSwitchClass";
import { CardsView } from "../components/CardViewClass";
import { ListView } from "../components/ListViewClass";

export class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLayout: "view_module",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.currentLayout === "view_module"
            ? this.setState({ currentLayout: "view_list" })
            : this.setState({ currentLayout: "view_module" });
    }

    render() {
        return (
            <div className="Store">
                <IconSwitch icon={this.state.currentLayout} onSwitch={this.handleClick} />
                {this.state.currentLayout === "view_module" ? (
                    <CardsView cards={this.props.products} />
                ) : (
                    <ListView items={this.props.products} />
                )}
            </div>
        );
    }
}
