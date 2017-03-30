module.exports = function(grunt) {



    grunt.initConfig({
        webfont: {
            icons: {
                src: 'icons/16/*.svg',
                dest: 'font',
                options: {
                    font: 'Tangram-16',
                    type: 'ttf',
                    fontHeight: 960,
                    descent: 0,
                    ligatures: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    // Default task(s).
    grunt.registerTask('default', ['webfont']);

};
