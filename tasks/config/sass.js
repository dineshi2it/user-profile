module.exports = function(grunt) {
  grunt.config.set('sass', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/scss/',
        src: ['*.scss'],
        dest: 'assets/css/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
}
