module.exports = function(grunt) {
    var compression = require('compression');

    grunt.initConfig({
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    // for some reason 'pizzeria.jpg' cannot be optimized by imagemin
                    src: ['img/*.{png,jpg,gif}', 'views/images/pizza.png', 'views/images/pizza-100.png'],
                    dest: 'dist/'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    src: ['css/*.css', 'views/css/*.css'],
                    dest: 'dist/'
                }]
            }
        },
        inline: {
            dist: {
                options: {
                    cssmin: true
                },
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html' : ['dist/index.html'],
                    'dist/views/pizza.html' : ['views/pizza.html']
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: ['js/**', 'views/js/**', 'views/images/pizzeria.*'],
                    dest: 'dist/'
                }]
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
                    // enable gzip compression
                    // config taken from http://stackoverflow.com/questions/27964209/applying-gzip-compression-to-files-served-by-grunt-contrib-connect
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(compression());
                        return middlewares;
                    },
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-inline');

    grunt.registerTask('min', ['imagemin', 'cssmin', 'inline', 'htmlmin']);
    grunt.registerTask('dev', ['connect:dev']);
    grunt.registerTask('prod', ['min', 'copy:dist', 'connect:prod']);
    grunt.registerTask('default', ['prod']);

};