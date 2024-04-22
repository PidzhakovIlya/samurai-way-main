import {Component} from "react";

type Props = {
    status: string
};

export class ProfileStatus extends Component<Props> {
    state = {
        editMode: false
    }


    activateEditMode(value: boolean) {
        this.setState({
            editMode:value
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div>{this.state.editMode
                    ? <input type="text" value={this.props.status} autoFocus onBlur={()=>this.activateEditMode(false)}/>
                    : <span onDoubleClick={() => this.activateEditMode(true)}>{this.props.status}</span>}
                </div>

            </>
        )
            ;
    }
}