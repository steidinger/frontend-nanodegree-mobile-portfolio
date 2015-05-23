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
        },
        connect: {
            dev: {
                options: {
                    port: 8080,
                    keepalive: true
                }
            },
            prod: {
                options: {
                    port: 8080,
                    keepalive: true,
                    base: {
                        path: 'dist',
                        options: {
                            maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['imagemin', 'cssmin', 'htmlmin']);

};