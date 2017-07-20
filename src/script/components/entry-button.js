import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export class EntryButton extends Component {
  render() {
    return (
        <Link className="link link-base" to='/login'>Вход</Link>
    )
  }
}