module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          files: {
            "main.css": "main.less" // destination file and source file
          }
        }
      },
      watch: {
        styles: {
          files: ['**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch']);
  };