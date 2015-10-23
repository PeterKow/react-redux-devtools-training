var fs = require('fs');
var fileExists = fs.existsSync;
var mkdirp = require('mkdirp');
var path = require('path');
var webpack = require('webpack');
var React = require('react');
var renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;

var CODE = __dirname+'/training';
var IGNORE = ['shared'];
var DIRS = fs.readdirSync(CODE).filter(function (dir) {
  return isDirectory(path.join(CODE, dir)) && IGNORE.indexOf(dir) === -1;
});

makeIndex();

module.exports = {

  devtool: 'inline-source-map',

  entry: DIRS.reduce(function (entries, dir) {
    if (fileExists(path.join(CODE, dir, 'exercise.js')))
      entries[dir+'-exercise'] = path.join(CODE, dir, 'exercise.js');

    if (fileExists(path.join(CODE, dir, 'solution.js')))
      entries[dir+'-solution'] = path.join(CODE, dir, 'solution.js');

    if (fileExists(path.join(CODE, dir, 'lecture.js')))
      entries[dir+'-lecture'] = path.join(CODE, dir, 'lecture.js');

    return entries;
  }, {}),

  output: {
    path: '__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '__build__'
  },

  resolve: {
    extensions: [ '', '.js', '.css' ]
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.woff(2)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.svg$/, loader: "file" },
      { test: require.resolve('jquery'), loader: "expose?jQuery" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};

function makeIndex() {
  var list = DIRS.map(function (dir) {
    return React.DOM.li({ key: dir }, React.DOM.a({ href: '/' + dir }, dir.replace(/-/g, ' ')));
  });

  var markup = renderToStaticMarkup(
    React.DOM.html({},
      React.DOM.head({},
        React.DOM.link({ rel: 'stylesheet', href: '/shared.css' })
      ),
      React.DOM.body({ id: 'index' },
        React.DOM.ul({ className: 'ul-index' }, list)
      )
    )
  );

  fs.writeFileSync(path.join(CODE, '/index.html'), markup);

  DIRS.forEach(function (dir) {
    if (fileExists(path.join(CODE, dir, 'exercise.js')))
      fs.writeFileSync(path.join(CODE + '/' + dir + '/index.html'), makeMarkup(dir+'-exercise'));

    if (fileExists(path.join(CODE, dir, 'solution.js')))
      fs.writeFileSync(path.join(CODE + '/' + dir + '/solution.html'), makeMarkup(dir+'-solution'));

    if (fileExists(path.join(CODE, dir, 'lecture.js')))
      fs.writeFileSync(path.join(CODE + '/' + dir + '/lecture.html'), makeMarkup(dir+'-lecture'));
  });
}

function makeMarkup(mainFile) {
  return renderToStaticMarkup(
    React.DOM.html({},
      React.DOM.head({},
        React.DOM.link({ rel: 'stylesheet', href: '/shared.css' })
      ),
      React.DOM.body({},
        React.DOM.div({ id: 'app' }),
        React.DOM.script({ src: '/__build__/shared.js' }),
        React.DOM.script({ src: '/__build__/' + mainFile + '.js' })
      )
    )
  );
}

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}
