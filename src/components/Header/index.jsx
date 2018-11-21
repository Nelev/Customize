import { Breadcrumb } from "antd";
import React from "react";

import "./style.css";

export default class Header extends React.Component {
    renderLinks() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="">Info</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Squad</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Contacts</a>
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }

    renderLogo() {
        return <img alt="" src="url(./logo.png)" />;
    }

    render() {
        return (
            <div className="c-Header">
                <div className="c-Header-Logo">{this.renderLogo()}</div>
                <div className="c-Header-Links">{this.renderLinks()}</div>
            </div>
        );
    }
}
