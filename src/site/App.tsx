import React from 'react';
import ReactDom from 'react-dom';
import style from './App.css'
import ButtonDoc from './pages/button/button'
import ReactMarkdown  from 'react-markdown';
import IconDoc from './pages/icon/icon'


class App extends React.Component < any,any > {
    render() {
        return (
           <div className={style.div}>
                <ButtonDoc/>
                <IconDoc/>
            </div>
        );
    } 
}

ReactDom.render(
    <App></App>, document.getElementById('app'));