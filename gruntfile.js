module.exports = function(grunt) {

    grunt.initConfig({
        webfont: {
            // iconfont build and styles for production
            production: {
                src: 'src/icons/*.svg',
                dest: 'dest/production/iconfont',
                options: {
                    template: 'src/templates/icons.scss',
                    templateOptions: {
                      baseClass: 'tmicon',
                      classPrefix: 'tmicon-'
                    },
                    stylesheets: ['css','scss'],
                    hashes: true,
                    font: 'tmicons',
                    styles: 'font,icon',
                    types: 'eot,woff,ttf,svg',
                    order: 'eot,woff,ttf,svg',
                    fontHeight: 960,
                    descent: 0,
                    codepointsFile: 'src/codepoints',
                    destHtml: 'dest'
                }
            },
            // iconfont for Sketch App toolkit
            sketchtoolkit: {
                src: 'src/icons/*.svg',
                dest: 'dest/sketch-toolkit/iconfont',
                options: {
                    font: 'tmicons',
                    types: 'ttf',
                    fontHeight: 960,
                    descent: 0,
                    ligatures: true,
                    stylesheets: [],
                    htmlDemo: false,
                    codepointsFile: 'src/codepoints'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    // Default task(s).
    grunt.registerTask('default', ['webfont']);

};
