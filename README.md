## Website Performance Optimization portfolio project

The challenge was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, I checked out the repository  and inspected the code.

#### The project is online at [https://sonalikatara.github.io/frontend-nanodegree-mobile-portfolio/dist/](https://sonalikatara.github.io/frontend-nanodegree-mobile-portfolio/dist/).


##### The source code is in the src folder of this repository.


### Getting started

####Part 1: To Optimize PageSpeed Insights score for index.html

1. I cloned the site from Udacity github

2. Moved the site to github pages to be able to run it through Pagespeed Insights! 

3. Checked the score on PageSpeeds and found it to be too low 27/100
   The images needed to be optimized (compressed) and  There was render-blocking JavaScript and CSS 

4. To optimize the images and minify the files I am using Grunt Task Manager.
    I moved the original image files from /img to /img/original folder so that Grunt can put the compressed files in the /img folder

  I used grunt-imageminto generate multi-resolution images .

5. I also optimized the rederblocking fonts by putting them at the end of the body andloading them async with the help of javascript.

6. Finally I optimized renderblocking css and javascript by inlining it using grunt-inline-css

##### The PageSpeed Insight score now is 99 !!

It can be brought up to 100 by setting the caching on deployment server.


####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I need to modify views/js/main.js until the frames per second rate is 60 fps or higher. 

There is a FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

1. At first I created two folders src and dist. As the names suggest src is where I worked on the code and dist is where I move the code for distribution so it has the  minimize and concatinated files.

 src/views/js/main.js is well documented with comments on all the placed I made the changes . These coments start with ///------ . While writing this I remember a better way might have been to add my initials to the coments.

2. I optimized the main and pizza image by reducing their size and compressing them using Grunt. 

3. The function updatePositions() was causing jank.
   I optimized the for loop by moving out the calculations that needed to be done only once.
   I replaced document.querySelectorAll() with document.getElementsByClassName() or document.getElementsById() to mahe the execution faster.
   The movement of pizzas was done thought javascript, I tried to optimize it by moving them using the css transform-translate property

   ` items[i].style.transform = 'translateX('+ left + ')';`
   
   The number of pizzas generated was 200, which is way more than the number of pizzas shown. I reduced it to 32. This reduced the jank a significantly.

4. The function changePizzaSizes() also causes jank.
   I optimized the for loop by moving out the calculations that needed to be done only once.
   I replaced document.querySelectorAll() with document.getElementsByClassName() or document.getElementsById() to mahe the execution faster.
   
5. I used layering and RequestAnimationFrame() to further optimize the page.
6. 
   `pizzaImage.transform= 'TranslateZ(0)';

   pizzaImage.style.webkitTransform = "transform";
   
   pizzaImage.style.willChange = "transform";        ///---- optimize by informing the browser to make layers for each pizza `
   
   
   `
   window.requestAnimationFrame(updatePositions);

   `

6. Finally I minimized the css and javascript files using Grunt.
  


The Grunt tasks used are :
`
     grunt-contrib-cssmin'
     grunt-contrib-uglify'  
     grunt-contrib-htmlmin'  
     grunt-contrib-copy'  
     grunt-responsive-images'  
     grunt-contrib-imagemin'  
     grunt-contrib-concat'  
     grunt-inline-css'  
     grunt-contrib-clean'  
     grunt-mkdir'
`

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

