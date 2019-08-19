import React from 'react';
import { AlertCircle, Slack, Twitter } from 'react-feather';
import { version as vg_version } from 'vega';
import { version as vl_version } from 'vega-lite';
import { version as tooltip_version } from 'vega-tooltip';
import isMac from '../../../utils/isMac';
import shortcuts from '../../../utils/keyboardShortcuts';
import './index.css';
const pjson = require('../../../../package.json');

// Will generate keyboard shortcuts based on OS
// 1. Check OS (isMac)
// 2. Then get the shortcuts
// 3. Map over shorcuts and render os specific
// 4. Get shortcut, split it, and map over it to render
// 5. To add shortcuts go to utils/keyboardShortcuts.ts, changes will be reflected here

const keyBoardShortcuts = shortcuts.map((shortcut, i) => {
  return (
    <li key={i}>
      {(isMac() ? shortcut.mac : shortcut.windows)
        .split(' ')
        .map(key => (key === '+' ? '+' : <kbd key={`${key}${i}`}>{key}</kbd>))}
      : {shortcut.text}
    </li>
  );
});

const HelpModal = () => {
  return (
    <div className="help-modal">
      <h1 className="modal-header">Help</h1>
      <h2>References</h2>
      <a href="https://vega.github.io/vega-lite/" target="_blank" className="doc-link">
        Vega-Lite Docs
      </a>
      <a href="https://vega.github.io/vega/" target="_blank" className="doc-link">
        Vega Docs
      </a>
      <h2>Keyboard Shortcuts</h2>
      <ul className="keyboard-shortcuts">{keyBoardShortcuts}</ul>
      <p>
        Access editor actions by clicking the 'Commands' button or pressing <kbd>f1</kbd>.<br />
        Here you can clear the spec, extract or merge the config, or format the specification.
      </p>
      <a
        href={`https://github.com/vega/editor/issues/new?body=**Vega-Editor ${pjson.version}**`}
        target="_blank"
        className="report-button help-modal-link"
      >
        <AlertCircle className="header-icon" />
        <span>Report a Bug</span>
      </a>
      <h2>Send us your feedback</h2>
      <a href="https://bit.ly/join-vega-slack" target="_blank" className="doc-link">
        <Slack className="doc-image" />
        Join our Slack channel
      </a>
      <a href="https://twitter.com/vega_vis" target="_blank" className="doc-link">
        <Twitter className="doc-image" />
        Follow us on Twitter
      </a>
      <h2>Tip</h2>
      <p>
        You can access Vega, Vega-Lite, and the <a href="https://vega.github.io/vega/docs/api/view/"> Vega view</a> at{' '}
        <code>(VEGA_DEBUG)</code> using your browser's developer console.
      </p>
      <div className="version-viewer">
        <div>Vega Version : {vg_version}</div>
        <div>Vega-Lite Version : {vl_version}</div>
        <div>Vega-Tooltip Version : {tooltip_version}</div>
        <div>Editor Version : {pjson.version}</div>
      </div>
    </div>
  );
};

export default HelpModal;