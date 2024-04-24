import {ChangeEvent, Component, createRef, Ref, RefObject} from "react";

type Props = {
    status: string | null
    updateStatus: (status: string) => void
};

export class ProfileStatus extends Component<Props> {


    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode(value: boolean) {
        this.setState({
            editMode: value
        })
        if (this.state.status)
            this.props.updateStatus(this.state.status)

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div>{this.state.editMode
                    ? <input onChange={this.onStatusChange} type="text"
                             value={this.props.status ? this.props.status : undefined} autoFocus
                             onBlur={() => this.activateEditMode(false)}/>
                    : <span
                        onDoubleClick={() => this.activateEditMode(true)}>{this.props.status || 'status'}</span>}
                </div>

            </>
        )
            ;
    }
}