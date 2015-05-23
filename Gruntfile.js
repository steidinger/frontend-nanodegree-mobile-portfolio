module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        cssmin: {
            dist: {
                target: {
                    files: {
                        'dist/css/style.css': ['css/style.css'],
                        'dist/css/print.css': ['css/print.css']
                    }
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html' : ['index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['imagemin', 'cssmin', 'htmlmin']);

};