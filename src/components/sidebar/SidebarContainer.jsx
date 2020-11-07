import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar

    }
}

let mapDispatchToProps = () => {
    return {

    }
}

let SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar);


export default SidebarContainer;