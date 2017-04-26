import React from 'react';
import ReactDom from 'react-dom';
// import {Icon, Grid} from 'xyl-mobile'
import Icon from 'xyl-mobile/src/components/icon'
import 'xyl-mobile/lib/grid/style'
import 'xyl-mobile/lib/icon/style'
import {Grid} from 'xyl-mobile'
import ReactMarkdown  from 'react-markdown';
const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
}));
export default class IconDoc extends React.Component < any,any > {
    render() {
        return (
           <div >
                {/*<ReactMarkdown source={article.article1} />*/}
                <Grid data={data} columnNum={3} hasLine={false} />
            </div>
        );
    } 
}
