import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {

        switch (this.props.auth) {
            case null:
                return 'Deciding ..'
            case false:
                return (
                    <li> <a href="/auth/google"> Sign in with Google </a> </li>
                );
                
            default:
                return [
                    <li key="payment"> <Payments />  </li>,
                    <li key="credit" style={{margin:'0 10px' }}>
                        credits : { this.props.auth.credits }
                    </li>,
                    <li key="logout"> <a href="/api/logout"> Sign out </a> </li>
                    ];

        }
            }

    render() {

        return(
            <nav>
                <div className="nav-wrapper" style={{ backgroundColor: 'blue' }}>
                    <Link
                    to={this.props.auth ? '/surveys' : '/'}
                    className="left brand-logo"
                    >
                        E-Survey
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>

        );
    }
}

function mapStateToProps({ auth }) {
return { auth };
}

export default connect(mapStateToProps)(Header);    