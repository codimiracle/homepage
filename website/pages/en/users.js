/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who am I?</h1>
              <p>
                Is me Huang Lin,Chinese,living in GuangZhou.
              </p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Likes programming in backend, contribute code and translation to Open Source.</p>
            <p>Do you need a good cooperator?</p>
            <a href="about" className="button">
            curriculum vitae
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
