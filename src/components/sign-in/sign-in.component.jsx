import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.prevenrDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        console.log(event);
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <h2>Sign in with your email and password</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;