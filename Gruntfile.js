module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/style.css' : ['css/style.css'],
                    'dist/css/print.css' : ['css/print.css']
                }            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['imagemin', 'cssmin']);

};