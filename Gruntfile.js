module.exports = function (grunt) {

// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
// CONFIG ===================================/

        watch: {
            compass: {
                files: ['*/*.{scss,sass}'],
                tasks: ['compass:dev'],
            },
            js: {
                files: ['**/*.js'],
                tasks: ['uglify']
            }

        },
        compass: {
            dev: {
                options: {
                    sassDir: ['app/scss'],
                    cssDir: ['app/css'],
                    environment: 'development'
                },
            },
            prod: {
                options: {
                    sassDir: ['app/scss'],
                    cssDir: ['app/css'],
                    environment: 'production'
                }
            },
        },
        uglify: {
            all: {
                files: {
                    'app/build/<%= pkg.name %>.min.js': [
                        'app/src/*.js'
                    ]
                }
            }
        },
    });

// DEPENDENT PLUGINS =========================/

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');


// TASKS =====================================/

    grunt.registerTask('default', ['compass:dev', 'uglify', 'watch']);

};
