import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); 

root.render(<IndecisionApp />);