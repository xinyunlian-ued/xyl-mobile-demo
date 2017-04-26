import React from 'react';

import ReactDom from 'react-dom';
import {Button} from 'xyl-mobile'
import ReactMarkdown from 'react-markdown';
import * as article from './article'
import 'xyl-mobile/lib/button/style'

export default class ButtonDoc extends React.Component < any,any > {
    render() {
        return (
            <div >
                <ReactMarkdown source={article.article1}/>
                <Button type="primary">主页面操作 Normal</Button>
                <Button className="btn" disabled onClick={e => console.log(e)}>disabled 按钮</Button>
                <Button className="btn" loading>loading 按钮</Button>
                <Button className="btn" icon="check-circle-o">带图标按钮</Button>
            </div>
        );
    }
}