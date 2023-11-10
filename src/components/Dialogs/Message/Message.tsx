import React from "react";
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/dialogsReducer";




export const Message: React.FC<MessageType> = ({message}) => <div className={s.message}>{message}</div>

