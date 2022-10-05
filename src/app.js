import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const container = document.getElementById('app');
const root = createRoot(container); 

root.render(<IndecisionApp />);