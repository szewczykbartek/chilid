module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: { // sass tasks
      dist: {
        options: {
          compass: false,
          style: 'expanded'
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};
