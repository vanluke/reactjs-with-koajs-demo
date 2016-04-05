import React, {Component} from 'react';
import NavigationBar from './navigation';

const app = (props) => {
    return <div><NavigationBar/><div>{props.children}</div>
    </div>
};
export default app;
