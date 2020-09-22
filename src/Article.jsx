import React, { Component } from 'react'

export class Article extends Component {
  render() {
    return (
      <>
        <article>
          <figure>
            <a href={this.props.link}>
              <img
                src={this.props.imageSrc}
                width="400"
                height="400"
                alt={this.props.title}
              />
            </a>
          </figure>
          <ul>
            <li>
              #{this.props.authorNum}:
              <a href={this.props.link}>
                <strong>{this.props.title}</strong>
              </a>
            </li>
            <li>
              <a href={this.props.authorLink}>
                <img
                  src={this.props.authorImage}
                  width="24"
                  height="24"
                  alt={this.props.authorName}
                />
              </a>
            </li>
          </ul>
        </article>
      </>
    )
  }
}
