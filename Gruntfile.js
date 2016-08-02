module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            // 2. Configuration for minimizing files goes here.
	   img: {
             options:{
		optimizationLevel: 5
		},
	     files: [
		{
                 expand: true,
                 cwd:'src/img/',
                 src: ['*.{png,jpg}'],
		 dest:'dist/img/'
		}
		]     
  	},
         views: {
	   options:{
		optimizationLevel: 5
		},
	     files: [
		{
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['*.jpg'],
		 dest:'dist/views/images/'	
		}
		]   

        }
},

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        
        src: ['dist/img','dist/views/images' ],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/img','dist/views/images' ]
        },
      },
    }
    }
);

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean','mkdir','imagemin']);

};

