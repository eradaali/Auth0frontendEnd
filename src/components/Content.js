import React, { Component } from 'react'
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';

export class Content extends Component {
<<<<<<< HEAD
    ComponentcDidMount = () => {
=======
  componentDidMount = () => {
>>>>>>> 7f427b249b6bec12457026f797f8a0011bc30488
        if(this.props.auth0.isAuthenticated) {
          this.props.auth0.getIdTokenClaims()
          .then(res => {
            const jwt = res.__raw;
            const config = {
              headers: {"Authorization" : `Bearer ${jwt}`},
              method: 'get',
              baseURL: process.env.REACT_APP_SERVER_URL,
<<<<<<< HEAD
              url: 'https://auth0-thursday.herokuapp.com/'
=======

              url: 'https://auth0-11.herokuapp.com/'

              url: 'https://auth0-11.herokuapp.com/authorize'

>>>>>>> 7f427b249b6bec12457026f797f8a0011bc30488
            }
            axios(config)
              .then(axiosResults => console.log(axiosResults.data))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        }
      }
    render() {
        return (
            <div>
                <h1>This is a special content</h1>
            </div>
        )
    }
}

export default withAuth0(Content)