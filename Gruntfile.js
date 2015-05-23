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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['imagemin']);

};