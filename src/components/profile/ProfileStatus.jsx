import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        editMode: false,
        status: this.props.status
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                || <div>
                        <input name={"status"} type={"text"} onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.disableEditMode}
                               value={this.state.status} />
                    </div>}
            </>
        )
    }
}
export default ProfileStatus;