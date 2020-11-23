/**
 * Build scripts
 */

module.exports = function(grunt) {

    // load most all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            compress: {
              global_defs: {
                "EO_SCRIPT_DEBUG": false
              },
              dead_code: true
            },
            banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
          },
          build: {
            files: [{
              expand: true, // Enable dynamic expansion.
              src: ['build/js/*.js', '!build/js/*.min.js'], // Actual pattern(s) to match.
              ext: '.min.js', // Dest filepaths will have this extension.
            }, ]
          }
        },
        jshint: {
          options: {
            reporter: require('jshint-stylish'),
            globals: {
              "EO_SCRIPT_DEBUG": false,
            },
            '-W020': true, //Read only - error when assigning EO_SCRIPT_DEBUG a value.
          },
          all: ['build/js/*.js', '!build/js/*.min.js']
        },

        usebanner: {
            main: {
                options: {
                    position: 'top',
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> */',
                    linebreak: true
                },
                files: {
                    src: ['build/js/*.js']
                }
            }
        },

        // Remove the build directory files
        clean: {
           main: ['build/**']
        },

        // Copy the plugin into the build directory
        copy: {
            main: {
                src: [
                '**',
                '!**/*~',
                '!.git/**',
                '!build/**',
                '!js/**',
                '!*.lock',
                '!.distignore',
                '!.editorconfig',
                '!.eslintrc.json',
                '!.gitattributes',
                // '!.gitcreds',
                '!.gitignore',
                '!.travis.yml',
                '!composer.json',
                '!Gruntfile.js',
                // '!gitcreds.json',
                '!LICENSE.txt',
                '!node_modules/**',
                '!package.json',
                '!README.md',
                // '!.transifexrc',
                '!webpack.config.js',
                ],
                dest: 'build/'
            }
        },

        // Generate readme.md from readme.txt
        wp_readme_to_markdown: {
            convert: {
                screenshot_url: "assets/{screenshot}.{png,gif}",
                files: {
                    'README.md': 'readme.txt'
                },
            },
        },

        // # Internationalization

        // Add text domain
        addtextdomain: {
            textdomain: '<%= pkg.name %>',
            target: {
                files: {
                    src: ['*.php', '**/*.php', '!node_modules/**', '!build/**']
                }
            }
        },

        // Generate .pot file
        makepot: {
            target: {
                options: {
                    domainPath: '/languages', // Where to save the POT file.
                    exclude: ['build'], // List of files or directories to ignore.
                    mainFile: '<%= pkg.name %>.php', // Main project file.
                    potFilename: '<%= pkg.name %>.pot', // Name of the POT file.
                    type: 'wp-plugin' // Type of project (wp-plugin or wp-theme).
                }
            }
        },

        // bump version numbers
        replace: {
            Version: {
                src: [
                    'readme.txt',
                    'readme.md',
                    '<%= pkg.name %>.php'
                ],
                overwrite: true,
                replacements: [
                    {
                        from: /Stable tag:.*$/m,
                        to: "Stable tag:** <%= pkg.version %>  "
                    },
                    {
                        from: /Version:.*$/m,
                        to: "Version:             <%= pkg.version %>"
                    },
                    {
                        from: /public static \$version = \'.*.'/m,
                        to: "public static $version = '<%= pkg.version %>'"
                    },
                    {
                        from: /public \$version      = \'.*.'/m,
                        to: "public $version      = '<%= pkg.version %>'"
                    }
                ]
            }
        }

    });

    // Default task(s).
    grunt.registerTask('default', [
        // 'jshint',
        // 'uglify'
    ]);

    grunt.registerTask('test', [
        // 'jshint',
        'addtextdomain'
    ]);

    grunt.registerTask('docs', [
        'wp_readme_to_markdown'
    ]);

    grunt.registerTask('build', [
        'usebanner',
        'replace',
        // 'newer:uglify',
        'makepot',
        'wp_readme_to_markdown',
    ]);

    grunt.registerTask('release', [
        'build',
        'copy'
    ])

};
