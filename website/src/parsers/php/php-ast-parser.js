import defaultParserInterface from '../utils/defaultParserInterface';

const ID = 'php-ast-parser';
let Kind = null;

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: '7.1',
  homepage: 'fd',

  _ignoredProperties: new Set([]),
  locationProps: new Set(['attributes']),

  nodeToRange({attributes} = {}) {
    if (attributes) {
      return [attributes.startFilePos, attributes.endFilePos+1];
    }
  },

  getNodeName(node) {
    return node.nodeType;
  },

  loadParser(callback) {
    callback();
  },
  opensByDefault(node, key) {
    return key === 'stmts';
  },

  parse(a, code) {
    return fetch('/index.php',{
      method: 'post',
      body: code,
    })
      .then(function(response) {
        return response.json();
       });
  },
};
