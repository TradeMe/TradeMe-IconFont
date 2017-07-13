module.exports = function(grunt) {

  grunt.initConfig({
    sketch_export: {
      icons: {
        options: {
          type: 'slices',
          formats: [
            'svg'
          ],
          overwrite: true
        },
        src: 'src/sketch/TradeMe.TradeMe.Icons.sketch',
        dest: 'build/icons'
      }
    },
    webfont: {
      // iconfont build and styles for production
      production: {
        src: 'build/icons/*.svg',
        dest: 'build/production',
        options: {
          template: 'src/templates/icons.scss',
          templateOptions: {
            baseClass: 'tmicon',
            classPrefix: 'tmicon-'
          },
          customOutputs: [{
            template: 'src/templates/codepoints',
            dest: 'build'
          }],
          stylesheets: ['css', 'scss'],
          hashes: true,
          font: 'tmicons',
          styles: 'font,icon',
          types: 'eot,woff,ttf,svg',
          order: 'eot,woff,ttf,svg',
          fontHeight: 960,
          descent: 0,
          codepointsFile: 'src/codepoints',
          htmlDemo: true,
          htmlDemoTemplate: 'src/templates/tmicons-demo.html',
          destHtml: 'build'
        }
      },
      // iconfont for Sketch App toolkit
      sketchtoolkit: {
        src: 'build/icons/*.svg',
        dest: 'build/sketch-toolkit',
        options: {
          font: 'tmicons',
          types: 'ttf',
          fontHeight: 960,
          descent: 0,
          ligatures: true,
          stylesheets: [],
          htmlDemo: false
        }
      }
    },
    // package build files for release
    compress: {
      production: {
        options: {
          archive: 'dist/tmicons-production.zip'
        },
        files: [{
          expand: true,
          cwd: 'build/production/',
          src: ['**/*'],
          dest: ''
        }]
      },
      sketchtoolkit: {
        options: {
          archive: 'dist/tmicons-sketch.zip'
        },
        files: [{
          expand: true,
          cwd: 'build/sketch-toolkit/',
          src: ['**/*'],
          dest: ''
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sketch');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task(s).
  grunt.registerTask('default', ['sketch_export', 'webfont', 'compress']);

};
