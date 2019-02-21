import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header=()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/problems" activeClassName="active">All Problems</Link>
            {" | "}
            <Link to="/problem" activeClassName="active">New</Link>
        </nav>
    );
};

export default Header;