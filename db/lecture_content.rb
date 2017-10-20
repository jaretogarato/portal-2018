def lecture_seed
  
    '<h1>Console / Input / Output Ruby</h1>
<p>
    <img src="http://www.unixstickers.com/image/data/stickers/ruby/ruby_badge.sh.png" height="296" width="200">
</p>
<p>Today is a very light day due to: getting to know you exercises, building tour, lunch, computer setup, canvas setup, canvas exploring.</p>
<p>&nbsp;</p>
<p>
    <strong>What we will learn today:</strong>
</p>
<ul>
    <li>What is ruby?</li>
    <li>Creating a Ruby Script</li>
    <li>Running a Ruby Script</li>
    <li>Getting and setting Variables</li>
    <li>Script output</li>
    <li>Getting User input</li>
    <li>Basic Array manipulation</li>
</ul>
<p>&nbsp;</p>
<p>
    <strong>What is Ruby?</strong>
</p>
<p>Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.</p>
<p>According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.[12] It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.&nbsp;
    <em>Learn More&nbsp;(</em>
    <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank" style="color: rgb(109, 82, 162);">
        <em>https://en.wikipedia.org/wiki/Ruby_(programming_language&nbsp;(Links to an external site.)</em>
    </a>
</p>
<p>
    <br>
</p>
<p>
    <em>)</em>
</p>
<p>&nbsp;</p>
<p>
    <strong>Creating a Ruby Script</strong>
</p>
<p>There are multiple ways of creating a file on your file system. Youve probably created a bunch of files on a file system before for example:</p>
<ul>
    <li>my-resume.doc</li>
    <li>budget.xlsx</li>
    <li>notes.txt</li>
</ul>
<p>Creating a Ruby Script is no different. The only thing that changes is the file extension(a file extension is .doc, .xlsx, .txt ect...). A Ruby Script has the file extension of&nbsp;
    <strong>.rb</strong>
</p>
<p>Now that you know about file extensions, lets create our first ruby script. There are multiple ways to create files on a file system:</p>
<ul>
    <li>Open your Terminal(iTerm2) and type in:</li>
    <li>touch hello_world.rb</li>
    <li>This creates a Ruby Script named hello_world in whatever current directory your terminal is in</li>
    <li>Another way to create a Ruby Script File is to:</li>
    <li>Open Sublime Text or Atom</li>
    <li>Navigate to your Desktop or any Directory on your Computer.</li>
    <li>Create a new File by Context(Right Clicking) on the Directory and select New File</li>
    <li>Name the file hello_world.rb</li>
</ul>
<p>&nbsp;</p>
<p>
    <strong>Running a Ruby Script</strong>
</p>
<p>As long as you have the Ruby Language installed on your computer (Mac comes with it installed by default), you can run Ruby Programs.</p>
<ul>
    <li>Open your Terminal(iTerm2)</li>
    <li>Navigate to where your Ruby Script is located (example: cd ~/Desktop/week1)</li>
    <li>The example above is assuming that I have a Directory called week1 on my Desktop and my hello_world.rb Ruby Script is inside of the week1 Directory</li>
    <li>type into Terminal:</li>
    <li>ruby hello_world.rb</li>
</ul>
<p>&nbsp;</p>
<ul>
    <li>
        <em>DevPoint Labs Highly recommends that you keep organized</em>
    </li>
    <li>
        <em>Create a new Directory on your Desktop called DevPoint</em>
    </li>
    <li>
        <em>Inside that new Directory create Directories for each week (example: week1, week2, week3 ...)</em>
    </li>
    <li>
        <em>Put all work for each week in specific Directories</em>
    </li>
    <li>
        <em>This will help keep you more&nbsp;efficient / organized&nbsp;when you need to find / run programs</em>
    </li>
    <li>
        <em>Refer to the bottom of this document for a more detailed example: (</em>
        <a href="https://canvas.devpointlabs.com/courses/42/pages/student-tips" target="_blank" style="color: rgb(109, 82, 162);">
            <em>https://canvas.devpointlabs.com$WIKI_REFERENCE$/pages/student-tips</em>
        </a>
        <em>)</em>
    </li>
</ul>
<p>&nbsp;</p>
<p>
    <strong>Getting and setting Variables</strong>
</p>
<p>Now that we know what the Ruby language&nbsp;is, file extensions are, creating a Ruby Script, and running Ruby Scripts, its time to start&nbsp;
    <strong>CODING!!!</strong>
</p>
<p>The very first thing we will learn is setting variables in Ruby.</p>
<p>In computer programming, a variable or scalar is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference
    the stored value.&nbsp;
    <em>Learn More (</em>
    <a href="https://en.wikipedia.org/wiki/Variable_(computer_science)" target="_blank" style="color: rgb(109, 82, 162);">
        <em>https://en.wikipedia.org/wiki/Variable_(computer_science)&nbsp;(Links to an external site.)</em>
    </a>
</p>
<p>
    <br>
</p>
<p>
    <em>)</em>
</p>
<p>Inside of our hello_world.rb file lets add a few lines of code:</p>
<pre spellcheck="false">first_name = \'your first name\'
</pre>
<ul>
    <li>This sets a variable named first_name to a string value of \'your first name\'</li>
</ul>
<pre spellcheck="false">last_name = \'your last name\'
</pre>
<ul>
    <li>This sets a variable named last_name to a string value of \'your last name\'</li>
</ul>
<pre spellcheck="false">world = \'world\'
</pre>
<ul>
    <li>This sets a variable named world to a string value of \'world\'</li>
</ul>
<pre spellcheck="false">first_number = 10
</pre>
<ul>
    <li>This sets a variable named first_number to a integer value of 10</li>
</ul>
<pre spellcheck="false">second_number = 2.0
</pre>
<ul>
    <li>This sets a variable named second_number to a float value of 2.0</li>
</ul>
<p>&nbsp;</p>
<p>
    <strong>Script output</strong>
</p>
<p>Now that we have a very basic understanding of setting variables. We need a way to show those values to the script user.</p>
<p>This is where the&nbsp;
    <strong>
        <em>puts&nbsp;</em>
    </strong>command comes in.</p>
<p>Inside of our hello_world.rb file lets add a few more lines of code:</p>
<pre spellcheck="false">puts first_name
</pre>
<ul>
    <li>This will output the&nbsp;
        <em>value&nbsp;</em>of the&nbsp;
        <em>first_name&nbsp;</em>variable</li>
    <li>\'your first name\'</li>
</ul>
<pre spellcheck="false">puts last_name
</pre>
<ul>
    <li>This will output the&nbsp;
        <em>value&nbsp;</em>of the last
        <em>_name&nbsp;</em>variable\'your last&nbsp;name\'</li>
</ul>
<pre spellcheck="false">puts world
</pre>
<ul>
    <li>This will output the&nbsp;
        <em>value&nbsp;</em>of the world
        <em>&nbsp;</em>variable\'world\'</li>
</ul>
<pre spellcheck="false">puts first_number
</pre>
<ul>
    <li>This will output the&nbsp;
        <em>value&nbsp;</em>of the&nbsp;first_number
        <em>&nbsp;</em>variable10</li>
</ul>
<pre spellcheck="false">puts second_number
</pre>
<ul>
    <li>This will output the&nbsp;
        <em>value&nbsp;</em>of the second_number
        <em>&nbsp;</em>variable2.0</li>
</ul>
<p>The&nbsp;
    <strong>
        <em>puts&nbsp;</em>
    </strong>command will&nbsp;
    <em>always&nbsp;</em>have a new line after the output value</p>
<p>There is another way to output in your Ruby Scripts and that is the&nbsp;
    <strong>
        <em>prints&nbsp;</em>
    </strong>command.</p>
<p>The&nbsp;
    <strong>
        <em>prints&nbsp;</em>
    </strong>command will do the same thing as&nbsp;
    <strong>
        <em>puts&nbsp;</em>
    </strong>but wont add the new line.</p>
<p>&nbsp;</p>
<p>
    <strong>Getting User input</strong>
</p>
<p>Now that we know how to output data to the user that is running the Ruby Script, it would be nice if we could receive input from that user. Lucky Ruby makes this super easy to do with the&nbsp;
    <strong>
        <em>gets&nbsp;</em>
    </strong>command.</p>
<p>
    <strong>
        <em>gets&nbsp;</em>
    </strong>command examples:</p>
<p>gets</p>
<ul>
    <li>Script stops and waits for user input</li>
</ul>
<pre spellcheck="false">user_input = gets
</pre>
<ul>
    <li>Script stops and waits for user input, after user presses return the value of the user input gets stored in the&nbsp;
        <em>user_input&nbsp;</em>variable</li>
</ul>
<pre spellcheck="false">first_name = gets
</pre>
<ul>
    <li>Script stops and waits for user input, after user presses return the value of the user input gets stored in the&nbsp;first_name
        <em>&nbsp;</em>variable</li>
</ul>
<pre spellcheck="false">last_name = gets
</pre>
<ul>
    <li>Script stops and waits for user input, after user presses return the value of the user input gets stored in the&nbsp;last_name
        <em>&nbsp;</em>variable</li>
</ul>
<p>&nbsp;</p>
<p>
    <strong>Arrays:</strong>
</p>
<p>For tonights assignment we are going to need to have some very basic knowledge of a data structure in Ruby called an Array.</p>
<p>
    <strong>Array Definition:</strong>
</p>
<p>Arrays are ordered, integer-indexed collections of any object.&nbsp;Array indexing starts at 0. A negative index is assumed to be relative to the end of the array—that is, an index of -1 indicates the last element of the array, -2 is the next to last
    element in the array, and so on.&nbsp;
    <em>Learn More (</em>
    <a href="http://docs.ruby-lang.org/en/2.0.0/Array.html" target="_blank" style="color: rgb(109, 82, 162);">
        <em>http://docs.ruby-lang.org/en/2.0.0/Array.html&nbsp;(Links to an external site.)</em>
    </a>
</p>
<p>
    <br>
</p>
<p>
    <em>)</em>
</p>
<p>
    <strong>Basic Array Usage:</strong>
</p>
<pre spellcheck="false">number_array = []
</pre>
<ul>
    <li>This sets a variable named&nbsp;
        <em>number_array&nbsp;</em>to an empty array</li>
</ul>
<pre spellcheck="false">number_array &lt;&lt; 1
</pre>
<ul>
    <li>This adds (pushes) a new item onto the&nbsp;
        <em>number_array</em>
    </li>
</ul>
<pre spellcheck="false">number_array &lt;&lt; 2
</pre>
<ul>
    <li>This adds (pushes) a new item onto the&nbsp;
        <em>number_array</em>
    </li>
</ul>
<pre spellcheck="false">number_array &lt;&lt; 50
</pre>
<ul>
    <li>This adds (pushes) a new item onto the&nbsp;
        <em>number_array</em>
    </li>
</ul>
<p>
    <strong>number_array now looks like this:
        <em>&nbsp;[1,2,50]</em>
    </strong>
</p>
<ul>
    <li>Items in an array are separated&nbsp;by commas</li>
</ul>
<p>
    <strong>Getting specific values from an array:</strong>
</p>
<pre spellcheck="false">number_array.first
</pre>
<ul>
    <li>This will return&nbsp;the first item in the array</li>
    <li>In our case the first item in the&nbsp;
        <em>number_array&nbsp;</em>is: 1</li>
</ul>
<pre spellcheck="false">number_array.last
</pre>
<ul>
    <li>This will return&nbsp;the last&nbsp;item in the array</li>
    <li>In our case the first item in the&nbsp;
        <em>number_array&nbsp;</em>is: 50</li>
</ul>
<pre spellcheck="false">number_array[0]
</pre>
<ul>
    <li>This will return&nbsp;the item at index 0&nbsp;in the array</li>
    <li>In our case the 0 index&nbsp;item in the&nbsp;
        <em>number_array&nbsp;</em>is: 1</li>
</ul>
<pre spellcheck="false">number_array[1]
</pre>
<ul>
    <li>This will return&nbsp;the item at index 1&nbsp;in the array</li>
    <li>In our case the 1 index&nbsp;item in the&nbsp;
        <em>number_array&nbsp;</em>is: 2</li>
</ul>
<pre spellcheck="false">number_array[2]
</pre>
<ul>
    <li>This will return&nbsp;the item at index 2&nbsp;in the array</li>
    <li>In our case the 2 index&nbsp;item in the&nbsp;
        <em>number_array&nbsp;</em>is: 50</li>
</ul>
<pre spellcheck="false">number_array[3]
</pre>
<ul>
    <li>This will return&nbsp;
        <strong>
            <em>nil</em>
        </strong>. We do not currently have a 4th item in our array</li>
</ul>
<p>
    <br>
</p>'

end
