Simple News Ticker
================
All you need is jQuery library and one other .js file

Documentation
================
1. Include the latest jQuery library and the simpleNewsTicker.jquery.js file in your code
2. Enter HTML code :
<pre>
  &lt;div id="news">
		&lt;p>
			&lt;a href="http://www.examiner.com/article/the-second-war-of-independence-has-been-declared" target="_blank">The Second War of Independence has been declared&lt;/a>
		&lt;/p>
		&lt;p>
			&lt;a href="http://dailycaller.com/2013/01/11/hannity-foresees-states-leaving-union-if-federal-government-continues-radicalized-abusive-pattern-video/" target="_blank">Hannity foresees states leaving union&lt;/a>
		&lt;/p>
		&lt;p>
			&lt;a href="http://detroit.cbslocal.com/2013/01/12/riot-breaks-out-at-housing-assistance-event-in-taylor/" target="_blank">Riot Breaks Out At Housing Assistance Event&lt;/a>
		&lt;/p>
		&lt;p>
			&lt;a href="http://www.wnd.com/2013/01/civil-wars-a-brewin/" target="_blank">CIVIL WAR'S A-BREWIN'&lt;/a>
		&lt;/p>
	&lt;/div>
</pre>
3. And Finally jQuery :
<pre>
  &lt;script type="text/javascript">
    $(document).ready(function(){
		  $('#news').simpleNewsTicker();
	});
&lt;/script>
</pre>

4. To change default settings:
<pre>
  &lt;script type="text/javascript">
    $(document).ready(function(){
  	  $('#news').simpleNewsTicker({
        'delay': 2000,
  		'fadeSpeed': 500,
		'element' : 'img'
      });
	});
&lt;/script>
</pre>
