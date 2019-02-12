/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('playthings', this.props.language)}>
              Playthings
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users', this.props.language)}>
              Who Am I
            </a>
            <a
              href="//stackoverflow.com/users/9653843/codimiracle"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a
              href="//weibo.com/p/1005055979108276"
              target="_blank"
              rel="noreferrer noopener">
              Weibo
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="//blog.codimiracle.com">Blog</a>
            <a href="//github.com/codimiracle">GitHub</a>
            <a
              className="github-button"
              href="//github.com/codimiracle"
              data-icon="octicon-follow"
              data-show-count="true"
              data-count-aria-label="# followers on GitHub"
              aria-label="Follow me on GitHub">
              Follow me
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
