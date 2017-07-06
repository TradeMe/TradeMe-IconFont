module.exports = function(grunt) {

    grunt.initConfig({
        webfont: {
            // iconfont build and styles for production
            production: {
                src: 'src/icons/*.svg',
                dest: 'iconfont/production',
                options: {
                    template: 'src/templates/icons.scss',
                    templateOptions: {
                      baseClass: 'tmicon',
                      classPrefix: 'tmicon-'
                    },
                    customOutputs: [{
                      template: 'src/templates/codepoints',
                      dest: 'iconfont'
                    }],
                    stylesheets: ['css','scss'],
                    hashes: true,
                    font: 'tmicons',
                    styles: 'font,icon',
                    types: 'eot,woff,ttf,svg',
                    order: 'eot,woff,ttf,svg',
                    fontHeight: 960,
                    descent: 0,
                    codepointsFile: 'src/codepoints',
                    htmlDemo: true,
                    destHtml: 'iconfont'
                }
            },
            // iconfont for Sketch App toolkit
            sketchtoolkit: {
                src: 'src/icons/*.svg',
                dest: 'iconfont/sketch-toolkit',
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
