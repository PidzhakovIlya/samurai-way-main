import React from "react";
import "./index.css";
import {rerenderEntireTree} from "./rernder";
import {state} from "./redux/state";

rerenderEntireTree(state)