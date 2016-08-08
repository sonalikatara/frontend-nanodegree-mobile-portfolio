module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    copy: {
       images: {
        files:[ {
                 expand: true,
                 cwd:'src/img/',
                 src: ['*.{jpg,png}'],
		 dest:'dist/img/'
               }]
      },

      view_images: {
        files:[ {
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['*.{jpg,png}'],
		 dest:'dist/views/images/'
               }]
      }
   },
      
    responsive_images: {

        smallerPizza: {
           options: {
          
	   sizes: [{
         	 width: 73.333,
                 height: 100,
                 suffix: '_sm'
       	   }]
	 },
      	  files:[ {
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['pizza.png'],
		 dest:'src/views/images/'
               }]

       },
    	responsiveTask: {
      	  options: {
          
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
		 dest:'src/views/images/'
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
		 dest:'src/img/'
		}
		]     
  	},
         viewspng: {
	   options:{
		optimizationLevel: 5
		},
	     files: [
		{
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['*.png'],
		 dest:'src/views/images/'	
		}
		]   

        },
      viewsjpg: {
	   options:{
		optimizationLevel: 5
		},
	     files: [
		{
                 expand: true,
                 cwd:'src/views/images/',
                 src: ['*.jpg'],
		 dest:'src/views/images/'	
		}
		]   

        }

},
// minify the javascript files
       uglify: {
	dist: {
          files: {
         'dist/views/js/main.min.js': ['src/views/js/main.js'],
      }
   }
},
// minify the views css
   cssmin: {
	dist: {
          files: {
         'dist/views/css/style.min.css': ['src/views/css/*.css'],
      }
   }
},

//concatinate the css files
	concat: {   
    	  dist: {
     	   src: [
            'src/css/style.css',
            'src/css/print.css'
      	    ],
      	   dest: 'dist/css/style.css',
   	 }
      },

// inline the css
     inlinecss: {
             main:{
	               files: {
              'dist/index.html' : 'src/index.html',
  //            'dist/views/pizza.html' : 'src/views/pizza.html'
           }

	}
       },
 // minify  the html files
   htmlmin: {
    dist: {
	options: {
         removeComments: true,
         collapseWhitespace: true
      },
      files: [{
         expand: true,
         cwd: 'src',
         src: '**/*.html',
         dest: 'dist/'
      }]
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean','mkdir','responsive_images','imagemin','copy','uglify','concat','cssmin','htmlmin','inlinecss']);

};


