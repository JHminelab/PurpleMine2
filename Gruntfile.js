module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'stylesheets/application.css': 'sass/application.scss'
        }
      },
      redmine_backlogs: {
        files: {
          'plugins/redmine_backlogs/global.css':         'sass/plugins/redmine_backlogs/global.scss',
          'plugins/redmine_backlogs/master_backlog.css': 'sass/plugins/redmine_backlogs/master_backlog.scss',
          'plugins/redmine_backlogs/statistics.css':     'sass/plugins/redmine_backlogs/statistics.scss',
          'plugins/redmine_backlogs/taskboard.css':      'sass/plugins/redmine_backlogs/taskboard.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
};