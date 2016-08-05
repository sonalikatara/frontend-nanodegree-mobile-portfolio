module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    copy: {
      images: {
       expand: true,
       src: 'src/views/images/*',
       dest: 'dist/views/images/'
      }
   },
      
    responsive_images: {
    	responsiveTask: {
      	  options: {
           enginr : 'im',
	   sizes: [{
         	 width: 100,
                 suffix: '_100'
       	   },{
        	 width: 320,
                 suffix: '_sm'
           },{
        	 width: 640,
                 suffix: '_md'
           },{
         	 width: 1024,
                 suffix: '_lg'
       	   }]
	 },
      	  files:[ {
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['pizzeria.jpg'],
		 dest:'dist/views/images/'
               }]
         },
        
  },

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
                 cwd:'dist/views/images/',
                 src: ['*.{png,jpg}'],
		 dest:'dist/views/images/'	
		}
		]   

        }
},
	concat: {   
    	  dist: {
     	   src: [
            'src/css/style.css',
            'src/css/print.css'
      	    ],
      	   dest: 'dist/css/style.css',
   	 }
      },

     inlinecss: {
             main:{
	               files: {
              'dist/index.html' : 'dist/index.html',
           }

	}
       },


    /* Clear out the images and css directory if it exists */
    clean: {
      dev: {
        
        src: ['dist/img','dist/views/images', 'dist/css/style.css' ],
      },
    },

    /* Generate the images and css directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/img','dist/views/images', 'dist/css' ]
        },
      },
    },
   
    }
);

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean','mkdir','copy','responsive_images','imagemin','concat','inlinecss']);

};


