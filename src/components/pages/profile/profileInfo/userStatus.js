import React, {useEffect, useState} from "react";

const UserStatue = props => {

    let [statusModified, setStatusModified] = useState(false)
    let [newStatus, setNewStatus] = useState(props.statusText)

    useEffect(() => {
        setNewStatus(props.statusText)
    }, [props.statusText])

    const modifiedStatus = () => {
        setStatusModified(true)
    }

    const unmodifiedStatus = () => {
        setStatusModified(false)
        props.updateStatus(newStatus)
    }

    const onChangeStatus = (e) => {
        setNewStatus(e.target.value)
    }

    return (
        <div>
            {!statusModified && <span onClick={modifiedStatus}>{newStatus || '--------'}</span>}
            {statusModified && <input onChange={onChangeStatus} onBlur={unmodifiedStatus} autoFocus={true} value={newStatus}/>}
        </div>
    )
}

export default UserStatue

