def lecture_seed
  [
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
</p>',

    '<h1>Course</h1>
<p>In this course, you will learn how to build web applications using HTML, CSS, JavaScript, Frameworks, Databases, &amp; Servers.</p>
<p>&nbsp;</p>
<p>At the completion of this course, you will be able to build dynamic web applications with rich content.&nbsp;You will be able to create apis for use with multi-platform applications (mobile &amp; web) with a single codebase for the API.</p>
<p>More importantly, you will learn to think like a programmer.&nbsp;Along with instruction on how to use new tools and techniques you will understand the development process.&nbsp;</p>
<p>To succeed in this course you should be able to:</p>
<p>1. Follow along</p>
<p>2. Ask questions</p>
<p>3. Learn from constructive feedback from the instructors, mentors, &amp; peers</p>
<p>4.&nbsp;You will have access to all course content.&nbsp;It is not necessary to be taking notes constantly (especially during follow along exercises)</p>
<p>5. Work outside of class to strengthen concepts</p>
<p>6. Practice, practice, practice</p>
<p>7. Do not memorize.&nbsp;Learn the concept, not the syntax</p>
<p>8. Participate in lesson discussions</p>
<p>9. Watch for announcements on Canvas</p>
<p>&nbsp;</p>
<p>This course content is delivered in an organized way at a relatively fast pace.&nbsp;Stay away from distractions (Facebook, Reddit, etc) during class.&nbsp;Do your best not to miss time in this course. It will be incredibly difficult to catch up as each
    day builds on the previous.&nbsp;If you have to miss time let the instructors know ahead of time and try to sync up with another student to help you catch up.</p>",

"<h1>Git / Github</h1>
<h3>About</h3>
<p>Git is a free open source distributed version control system.&nbsp;Git was created by LinusTorvalds&nbsp;in 2005.&nbsp;</p>
<p>Git is a secure way to store your project files and easily collaborate on them with others.</p>
<p>NOTE:&nbsp;Git and Github are 2 separate things.&nbsp;Git is the technology that we use and Github is a website where youc an upload a copy of your Git repository.&nbsp;Github is a Git repository hosting service.&nbsp;Bit Bucket is an alternative to GitHub.</p>
<h3>Installation: (mac)</h3>
<pre spellcheck=\"false\">$ brew install git
</pre>
<p>Next you will want to generate an ssh key ( you may already have one ).&nbsp;An SSH key is a way to securely connect to a remote machine.&nbsp;By using an SSH key you won\'t be required to enter your username and password every time you want to interact
    with hosted Git Repositories.</p>
<h4>Check if you have an SSH key</h4>
<pre spellcheck=\"false\">$ find ~/.ssh -name *id_rsa.pub*
</pre>
<p>If you see a directory then you already have a public key.&nbsp;If you see nothing then you need to create a key.</p>
<h4>Create an SSH key (skip if you already have one)</h4>
<pre spellcheck=\"false\">$ ssh-keygen -t rsa -b 4096 -C \"PUT YOUR EMAIL HERE\"
</pre>
<p>Hit enter a few times until you see some ascii art.&nbsp;NOTE:&nbsp;You do not need a passphrase.&nbsp;You can just hit enter to skip the passphrase.</p>
<h3>Create a GitHub&nbsp;account (
    <a href=\"https://github.com/\" target=\"_blank\" style=\"color: rgb(109, 82, 162);\">https://github.com&nbsp;(Links to an external site.)</a>
</h3>
<h3>
    <br>
</h3>
<h3>)</h3>
<h4>Add your ssh key to&nbsp;GitHub</h4>
<p>First we want to copy the key to our clipboard exactly as it is in the file:</p>
<pre spellcheck=\"false\">$ pbcopy &lt; ~/.ssh/id_rsa.pub
</pre>
<p>Login to GitHub</p>
<p>Click on your avatar in the top right corner and select settings</p>
<p>Click on SSH and GPG keys from the left navigation.</p>
<p>Click New SSH Key</p>
<p>Give it a Title and paste the key into the body.</p>
<p>
    <br>
</p>
<p>Now that you are setup we can begin to learn to work with Git and GitHub.</p>
<h4>Objectives:</h4>
<ul>
    <li>Git configuration</li>
    <li>Creating a new repository</li>
    <li>Status and Log</li>
    <li>Staging and committing files</li>
    <li>Branching and merging</li>
    <li>Create a new repository on GitHub</li>
    <li>Push to GitHub</li>
    <li>Cloning an existing repository</li>
    <li>Ammending a commit</li>
    <li>Fixing merge conflicts</li>
    <li>Unstaging and resetting</li>
    <li>Stashing a commit</li>
    <li>Rebasing</li>
    <li>Pull requests</li>
    <li>File diffing</li>
    <li>Ignoring files</li>
</ul>
<h4>Git Config</h4>
<p>The first time you are setting up a new machine you will want to set some global config options for git</p>
<pre spellcheck=\"false\">$ git config --global user.name \"John Doe\" $ git config --global user.email johndoe@example.com $ git config --global core.editor vim $ git config --global core.excludesfile ~/.gitignore
</pre>
<p>You will have .gitignore files in each individual repo but it is also nice to have a global gitignore file for system and IDE files so they are not tracked by Git</p>
<p>Open ~/.gitignore (note if this is a new computer to you, you may need to enable viewing hidden files (defaults write com.apple.finder AppleShowAllFiles YES)</p>
<p>~/.gitignore</p>
<pre spellcheck=\"false\"># Mac .DS_Store #VSCODE .vscode/

</pre>
<p>It is considered bad practice to ignore system files in individual repositories.</p>
<h3>Warnings!!!!</h3>
<p>1.&nbsp;Never make a system directory a git repository (Downloads, Desktop, Users/username, etc...)</p>
<p>2.&nbsp;Never create a git repository inside of a git repository.&nbsp;</p>
<p>3.&nbsp;Each project for us going forward will be in a folder, each folder will be it\'s own git repository</p>
<p>4.&nbsp;If you accidentally create a git repo where you shouldn\'t have you can remove the .git/ folder in that directory</p>
<p>&nbsp;</p>
<h4>LOCAL GIT - Creating a repository</h4>
<p>Navigate in the terminal to where you keep your course projects</p>
<pre spellcheck=\"false\">$ mkdir git_practice $ cd git_practice $ git init
</pre>
<p>You should see the following output:</p>
<p>Initialized empty Git repository in /path/to/your/project/git_practice/.git/</p>
<p>The hidden folder called .git/ contains several files and configurations for this local git repository.</p>
<p>Now create some files so we have something to track:</p>
<pre spellcheck=\"false\">$ touch main.rb passwords.txt
</pre>
<p>Next we will see what git knows about and doesn\'t know about</p>
<pre spellcheck=\"false\">$ git status Initial commit Untracked files: (use \"git add &lt;file&gt;...\" to include in what will be committed) main.rb passwords.txt nothing added to commit but untracked files present (use \"git add\" to track)
</pre>
<p>Currently we have 2 untracked files.&nbsp;Git does not yet know about these files but it does know they are in the directory.</p>
<p>We don\'t want git to know about sensitive data.&nbsp;If we were to publish passwords.txt to GitHub in a public directory other people would be able to view it.</p>
<p>Create a file to tell git which files not to track:</p>
<pre spellcheck=\"false\">$ touch .gitignore
</pre>
<p>.gitignore</p>\
<pre spellcheck=\"false\">passwords.txt $ git status Initial commit Untracked files: (use \"git add &lt;file&gt;...\" to include in what will be committed) .gitignore main.rb nothing added to commit but untracked files present (use \"git add\" to track)
</pre>
<p>Next we want to tell git to track these two files.&nbsp;We can add files to git with git add &lt;filename&gt; or git add &lt;directory name&gt; or git add . (the . means all)</p>
<p>It is common to git add . but if you make a habit of this make sure that your .gitignore file is set up properly first.</p>
<pre spellcheck=\"false\">$ git add . $ git status Initial commit Changes to be committed: (use \"git rm --cached &lt;file&gt;...\" to unstage) new file: .gitignore new file: main.rb
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">What we have done is staged these files to be committed.&nbsp;</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Now let\'s commit.&nbsp;Committing creates a snapshot of your changes in your repository each time the project reaches a state you want to record.</span>
</p>
<pre spellcheck=\"false\">$ git commit -m \'initial commit\'
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">We have now committed our changes and given a commit message of \"initial commit\"</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">NOTE:&nbsp;Use the following guidelines when creating a commit message:</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">1.&nbsp;Keep messages short &lt; 50 characters</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">2.&nbsp;Keep messages in the present tense ( add feature chat window / fix regression bug )</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">3.&nbsp;Use useful commit messages that identify the work done in the commit</span>
</p>
<pre spellcheck=\"false\">$ git status On branch master nothing to commit, working tree clean
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">We can see a log of all the commits in the repository by typing git log</span>
</p>
<pre spellcheck=\"false\">$ git log commit d8e1bdccceb8a7e1a6a7abd442d3936169133570 Author: David Jungst &lt;djungst@gmail.com&gt; Date: Mon Jul 24 11:56:57 2017 -0600 initial commit
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">The first line is the SHA of the commit this can be useful if you are trying to revert to a specific commit.</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Sometimes you will want to see less information about the commits and just get a list of commits</span>
</p>
<pre spellcheck=\"false\">$ git log --oneline d8e1bdc initial commit
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Let\'s add some code to main.rb</span>
</p>
<pre spellcheck=\"false\">def puts_git(cmd) puts `git #{cmd} -h` menu end def menu puts \'1: Enter git command\' puts \'2: Exit\' choice = gets.to_i case choice when 1 puts \'Enter git command\' puts_git(gets.strip) menu when 2 exit else puts \'Invalid choice\' menu end end menu $ git
    status Changes not staged for commit: (use \"git add &lt;file&gt;...\" to update what will be committed) (use \"git checkout -- &lt;file&gt;...\" to discard changes in working directory) modified: main.rb no changes added to commit (use \"git add\" and/or
    \"git commit -a\")
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Since git knows about main.rb we can see that it has been modified.</span>
</p>
<pre spellcheck=\"false\">$ git add main.rb
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Now let\'s see what happens if we try to commit without adding the -m</span>
</p>
<pre spellcheck=\"false\">$ git commit 1 2 # Please enter the commit message for your changes. Lines starting 3 # with \'#\' will be ignored, and an empty message aborts the commit. 4 # On branch master 5 # Changes to be committed: 6 # modified: main.rb 7 #
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">We are now in VIM</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">
        <img src=\"https://canvas.devpointlabs.com/courses/42/files/4337/preview\" alt=\"Screen Shot 2017-07-24 at 12.13.43 PM.png\">
    </span>
</p>
<p>&nbsp;</p>
<p>VIM has 3 modes:&nbsp;</p>
<p>1.&nbsp;Command mode</p>
<p>2.&nbsp;Insert Mode</p>
<p>3.&nbsp;Visual Mode</p>
<p>Right now we are in command mode and we need to get into insert mode so we can add a commit message</p>
<p>First type: i</p>
<p>At the bottom of your terminal you should see:</p>
<pre spellcheck=\"false\">-- INSERT --
</pre>
<p>Now you can type your commit message</p>
<pre spellcheck=\"false\">1 add git help menu
</pre>
<p>Now we need to get out of insert mode</p>
<p>type: esc</p>
<p>Next we want to save and close the file using write / quite</p>
<p>:wq</p>
<p>Let\'s make sure our commit message shows up</p>
<pre spellcheck=\"false\">$ git log --oneline 193ddd8 add git help menu d8e1bdc initial commit
</pre>
<p>Now add some more code</p>
<pre spellcheck=\"false\">$ touch Gemfile
</pre>
<p>Gemfile</p>
<pre spellcheck=\"false\">gem \'colorize\' $ bundle
</pre>
<p>main.rb</p>
<pre spellcheck=\"false\">require \'colorize\' def puts_git(cmd) puts `git #{cmd} -h` menu end def menu puts \'MAIN MENU\'.colorize(:cyan) puts \'1: Enter git command\'.colorize(:cyan) puts \'2: Exit\'.colorize(:cyan) choice = gets.to_i case choice when 1 puts \Enter git command\'.colorize(:green)
    puts_git(gets.strip) menu when 2 exit else puts \'Invalid choice\'.colorize(:red) menu end end menu $ git add . $ git commit -m \'add colorize gem\'
</pre>
<h4>Un-Staging commits</h4>
<p>main.rb</p>
<pre spellcheck=\"false\">puts \'MAIN MENU\'.colorize(:black) $ git add . $ git status
</pre>
<p>There are several ways to un-stage the changes that we just added.</p>
<p>1.&nbsp;I just want to unstage it but keep the file unaltered\</p>
<pre spellcheck=\"false\">$ git reset HEAD main.rb
</pre>
<p>2.&nbsp;I want to go back to the most recent version of the file (changes will be lost)</p>
<pre spellcheck=\"false\">$ git checkout main.rb
</pre>
<p>3.&nbsp;I want to blow away all changes and revert to the last commit</p>
<pre spellcheck=\"false\">$ git reset --hard HEAD
</pre>
<h4>Branching</h4>
<p>Often you will be working on multiple features at the same time and we can move work into different branches</p>
<p>Creating a new branch:</p>
<pre spellcheck=\"false\">$ git branch foo NOTE to list branches: $ git branch foo * master
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">Notice we are on the master branch.</span>
</p>
<p>
    <span style=\"color: rgb(0, 0, 0);\">To move to a branch called foo:</span>
</p>
<pre spellcheck=\"false\">$ git checkout foo $ git branch * foo master
</pre>
<p>
    <span style=\"color: rgb(0, 0, 0);\">To delete a branch you must first move off of the branch you want to delete</span>
</p>
<pre spellcheck=\"false\">$ git checkout master $ git branch -D foo
</pre>
<p>To create a branch and switch to it at the same time:</p>
<pre spellcheck=\"false\">$ git checkout -b my_feature
</pre>
<p>When you create a branch you always are creating it from the branch you are on.&nbsp;Because of this it\'s a good idea to not work on master and keep master up to date.&nbsp;You can then create the branch while on the master branch.</p>
<p>Let\'s do some work on the my_feature_branch:</p>
<p>main.rb</p>
<pre spellcheck=\"false\">require \'colorize\' require_relative \'git\' class Main include Git def self.menu puts \'MAIN MENU\'.colorize(:cyan) puts \'1: Enter git command\'.colorize(:cyan) puts \'2: Exit\'.colorize(:cyan) choice = gets.to_i case choice when 1 puts \'Enter git command\'.colorize(:green)
    Git.puts_git(gets.strip) when 2 exit else puts \'Invalid choice\'.colorize(:red) end menu end end Main.menu $ touch git.rb
</pre>
<p>git.rb</p>
<pre spellcheck=\"false\">module Git def self.puts_git(cmd) puts `git #{cmd} -h` end end
</pre>
<p>Try to switch to the master branch</p>
<pre spellcheck=\"false\">$ git add . $ git commit -m \'move git helper to a module\'
</pre>
<p>Switch back to the master branch:</p>
<pre spellcheck=\"false\">$ git checkout master
</pre>
<p>Notice that git.rb doesn\'t exist and main.rb is the code from before.&nbsp;Notice our last commit is not here:</p>
<pre spellcheck=\"false\">$ git log --oneline 6e4520e add colorize gem 193ddd8 add git help menu d8e1bdc initial commit
</pre>
<p>Don\'t worry your work is not lost.&nbsp;This branch doesn\'t know about the code on the other branch.</p>
<p>To be sure you didn\'t lose your work:</p>
<p>
    <br>
</p>
<pre spellcheck=\"false\">$ git checkout my_feature $ git log --oneline
</pre>
<p>Now let\'s merge this branch into master</p>
<p>There are 2 ways to combine branches merging and rebasing.&nbsp;They each come with their own set of advantages.</p>
<p>First we will look at merge:</p>
<pre spellcheck=\"false\">$ git checkout master $ git merge my_feature Fast-forward git.rb | 5 +++++ main.rb | 39 ++++++++++++++++++++------------------- 2 files changed, 25 insertions(+), 19 deletions(-) create mode 100644 git.rb
</pre>
<p>You can see all of your branches and the last commit on each branch with the following command:</p>
<pre spellcheck=\"false\">$ git branch -v
</pre>
<p>This shows as that both branches are current</p>
<p>Now that all of the code from my_feature is on master it\'s a good idea to delete the my_feature branch</p>
<pre spellcheck=\"false\">$ git branch -D my_feature
</pre>
<h4>GitHub</h4>
<p>Go to&nbsp;
    <a href=\"https://github.com/\" target=\"_blank\" style=\"color: rgb(109, 82, 162);\">GitHub&nbsp;(Links to an external site.)</a>
</p>
<p>
    <br>
</p>
<p>&nbsp;and sign in.</p>
<p>Click the + icon in the top right nav bar and select \"New Repository\"</p>
<p>Give the repository a name \"git-practice\"</p>
<p>Click on Create Repository:</p>
<p>You will see some instructions on the screen:
    <img src=\"https://canvas.devpointlabs.com/courses/42/files/4338/preview\" alt=\"Screen Shot 2017-07-24 at 12.55.45 PM.png\">
</p>
<p>Paste the line of code you have copied into the terminal</p>
<pre spellcheck=\"false\">$ git remote add &lt;name of remote&gt; &lt;github url&gt;
</pre>
<p>List remotes</p>
<pre spellcheck=\"false\">$ git remote -v
</pre>
<p>Push our local repository to github</p>
<pre spellcheck=\"false\">$ git push origin master
</pre>
<p>Refresh your page on Github and you should see your code.</p>
<p>Let\'s add some more code to emphasize the difference between local git and a git remote (in this case github)</p>
<pre spellcheck=\"false\">$ git checkout -b git_config_menu origin/master
</pre>
<p>Notice we added origin/master this means create a new branch from the tip of the branch on Github</p>
<p>git.rb</p>
<pre spellcheck=\"false\">module Git def self.puts_git(cmd) puts `git #{cmd} -h` end def self.config puts `git config -l` end end
</pre>
<p>main.rb</p>
<pre spellcheck=\"false\">def self.menu puts \'MAIN MENU\'.colorize(:cyan) puts \'1: Enter git command\'.colorize(:cyan) puts \'2: View git config\'.colorize(:cyan) puts \'3: Exit\'.colorize(:cyan) choice = gets.to_i case choice when 1 puts \'Enter git command\'.colorize(:green) Git.puts_git(gets.strip)
    when 2 Git.config when 3 exit else puts \'Invalid choice\'.colorize(:red) end menu end $ git add . $ git commit -m \'display git config\'
</pre>
<p>Notice this is not on GitHub but it is on our local machine.</p>
<p>If we want to push this to GitHub we have 2 choices we can push to master or we can push to a remote branch</p>
<pre spellcheck=\"false\">To push to a remote branch $ git push origin git_config_menu To push to master $ git push origin git_config_menu:master
</pre>
<p>Before we push let\'s do some work on master to create a merge conflict</p>
<pre spellcheck=\"false\">$ git checkout master
</pre>
<p>git.rb</p>
<pre spellcheck=\"false\">module Git def self.git_cmd(cmd) puts `git #{cmd} -h` end end
</pre>
<p>main.rb</p>
<pre spellcheck=\"false\">when 1 puts \'Enter git command\'.colorize(:green) Git.git_cmd(gets.strip) $ git add . $ git commit -m \'change puts_git to git_cmd\' $ git push origin master
</pre>
<p>An alternative to merging branches is to rebase branches.&nbsp;This comes with it\'s own set of tradeoffs.</p>
<p>Let\'s try to rebase:</p>
<pre spellcheck=\"false\">$ git checkout git_config_menu
</pre>
<p>Now let\'s intentionally cause a merge conflict by editing a line that was just pushed to master:</p>
<p>git.rb</p>
<pre spellcheck=\"false\">def self.display_cmd(cmd)
</pre>
<p>main.rb</p>
<pre spellcheck=\"false\">Git.display_cmd(gets.strip)
</pre>
<p>Next lets add our changes:</p>
<pre spellcheck=\"false\">$ git add . $ git commit --amend //NOTE since we haven\'t pushed this commit we can choose to just amend it rather than creating a new commit
</pre>
<p>Back in VIM land!</p>
<p>esc :wq</p>
<p>Before we push we want to make sure we are up to date with what is currently on the master branch from github</p>
<pre spellcheck=\"false\">$ git fetch origin master $ git rebase origin/master CONFLICT (content): Merge conflict in main.rb CONFLICT (content): Merge conflict in git.rb
</pre>
<p>We have two conflicts that need to be fixed before we can finish our rebase:</p>
<p>NOTE:&nbsp;</p>
<pre spellcheck=\"false\">$ git branch * (no branch, rebasing git_config_menu)
</pre>
<p>We are not on a branch right now because we are fixing conflicts</p>
<pre spellcheck=\"false\">$ git status ou are currently rebasing branch \'git_config_menu\' on \'0cf2f40\'. (fix conflicts and then run \"git rebase --continue\") (use \"git rebase --skip\" to skip this patch) (use \"git rebase --abort\" to check out the original branch) Unmerged paths:
    (use \"git reset HEAD &lt;file&gt;...\" to unstage) (use \"git add &lt;file&gt;...\" to mark resolution) both modified: git.rb both modified: main.rb no changes added to commit (use \"git add\" and/or \"git commit -a\")
</pre>
<p>These are the files where conflicts exist we need to fix the conflicts and then continue the rebase</p>
<p>git.rb</p>
<pre spellcheck=\"false\">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD def self.git_cmd(cmd) ======= def self.display_cmd(cmd) &gt;&gt;&gt;&gt;&gt;&gt;&gt; display git config
</pre>
<p>These lines conflict.&nbsp;We need to decide which one to keep and remove the comments</p>
<pre spellcheck=\"false\">def self.git_cmd(cmd) puts `git #{cmd} -h` end
</pre>
<p>Now we need to fix our other conflicts</p>
<p>main.rb</p>
<pre spellcheck=\"false\">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD Git.git_cmd(gets.strip) ======= Git.display_cmd(gets.strip) &gt;&gt;&gt;&gt;&gt;&gt;&gt; display git config #Change to Git.git_cmd(gets.strip)
</pre>
<p>Now that conflicts are resolved add the files and continue the rebase</p>
<pre spellcheck=\"false\">$ git add . $ git rebase --continue
</pre>
<p>IMPORTANT:&nbsp;While rebasing never use git commit you should only use git rebase --continue | git rebase --skip | git rebase --abort</p>
<p>Now let\'s push this branch to a remote branch so we can continue working on it</p>
<pre spellcheck=\"false\">$ git push origin git_config_menu
</pre>
<p>Notice on GitHub you now have two branches.&nbsp;We can continue to work on this branch and when we are done we can push it in to master.</p>
<pre spellcheck=\"false\">$ git push origin git_config_menu:master
</pre>
<p>Now that everything is up to date let\'s clean up our branches</p>
<pre spellcheck=\"false\">$ git checkout master $ git fetch $ git rebase origin/master $ git branch -D git_config_menu
</pre>
<p>Now on GitHub click the branches link</p>
<p>Click the trash icon to delete the remote branch.</p>
<h3>Cloning a repository</h3>
<p>First go back to where you keep your projects for the course</p>
<pre spellcheck=\"false\">$ cd ..
</pre>
<p>Next clone the shopping app solution from my github</p>
<pre spellcheck=\"false\">git clone git@github.com:wdjungst/ruby_class_example.git
</pre>
<p>Now you have access to all of the code from the shopping_app solution.</p>
<p>Alternatively you can fork the repository which will make a copy for you in your own github.</p>
<p>A nice feature to forking is that you can change some code and submit a pull_request to the original repository.&nbsp;If your pull request is accepted it will become part of the code base.</p>'
]
end
