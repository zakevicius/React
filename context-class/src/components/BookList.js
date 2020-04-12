import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>Pet cemetery</li>
          <li style={{ background: theme.ui }}>Pentagram</li>
          <li style={{ background: theme.ui }}>God always travels incognito</li>
        </ul>

      </div>
    )
  }
}

export default BookList;
