module.exports = {<% if (useGlobalStyle) { %>
  style: {
    brandColor: '#FF0077',
    controlColor: '#FF5777',
    mainHeadingColor: '#333333',
    subHeadingColor: '#666666',
    darkPromptColor: '#999999',
    splitLineColor: '#ECECEC',
    backgroundColour: '#EFEFEF'
  },<% } %>
  prefix: '<%= prefix %>',
  dest: '<%= dest %>',
  npm: {
    dest: '<%= npmDest %>'<% if (projectType === options.ProjectType.Component) { %>,
    scope: '<%= npmScope %>'<% } %>
  },
  alias: {
    components: 'src/components'
  },
  compilers: {
    babel: {
      sourceMaps: 'inline',
      presets: [
        'env'
      ],
      plugins: [
        'syntax-export-extensions',
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-export-extensions'
      ]
    }
  }
}
