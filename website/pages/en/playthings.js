/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Playthings(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [docs](${docUrl(
        'web-desktop',
      )})`,
      title: 'Web Desktop',
    },
    {
      content: `More introduction and usage using the [docs](${docUrl(
        'love-letter-service',
      )})`,
      title: 'Love Letter Service',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Playthings</h1>
          </header>
          <p>Some happy development to play.</p>
          <GridBlock contents={supportLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Playthings;
