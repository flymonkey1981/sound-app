import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/login.scss'


const propTypes = {
    isLogin: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    navigateTo: PropTypes.func,


};

class Login extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                password: ''

            }

        };
    }

    onChange = (e) => {
        let form = {...this.state.form};
        form[e.target.name] = e.target.value
        this.setState({form});
    }


    render() {
        const {isLogin, login, history} = this.props;
        const {form} = this.state;
        return (
            <div className="container">
                <div className="card card-login mx-auto text-center bg-dark">
                    <div className="card-header mx-auto bg-dark">
                        <span> <img src="https://amar.vote/assets/img/amarVotebd.png" className="w-75"
                                    alt="Logo"/> </span><br/>
                        <span className="logo_title mt-5"> Login Dashboard </span>
                    </div>
                    <div className="card-body">
                        <form action="/products" method="post" onSubmit={(event) => {
                            event.preventDefault();
                            login(form, history);
                        }}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="email" className="form-control" value={form.email}
                                       onChange={this.onChange} placeholder="Username"/>
                            </div>

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control" value={form.password}
                                       onChange={this.onChange} placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <input type="submit" name="btn" value="Login"
                                       className="btn btn-outline-danger float-right login_btn"/>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = propTypes;
export default Login;