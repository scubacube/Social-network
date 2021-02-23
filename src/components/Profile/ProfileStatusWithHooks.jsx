import React, {useEffect, useState} from 'react';
import { Field, reduxForm } from "redux-form";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const disableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    // debugger
    return (
        <>
            {/*{!editMode&&*/}
            {/*    <div><span onDoubleClick={activateEditMode}>{status}</span></div>*/}
            {/*}*/}

            {props.isOwner&&!editMode ? <div><span onDoubleClick={activateEditMode}>{status}</span></div> :
                !props.isOwner&&!editMode&&<div><span>{status}</span></div>
            }
            {props.isOwner&&editMode &&
                <div>
                  <input name={"status"} type={"text"} onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={disableEditMode}
                       value={status} />
                </div>
            }
            </>
    )
}
export default ProfileStatusWithHooks;