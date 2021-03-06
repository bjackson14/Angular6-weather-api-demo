<h1>Angular6-weather-api-demo</h1>
<p>This is my demo for any recruiter looking for a full MEAN stack developer using Angular version 6. The purpose of this application is to login and search for a city and state using the weather.gov API.</p>

<h1>Installation</h1>
<br>
<h2>Database and Rest Client</h2>
<br>
<ol>
<li>Download MongoDB version 4 from <a href="https://www.mongodb.com/download-center/community">www.mongodb.com/download-center/community</a> and install it. Make sure it is running on port 27017. Alternativley, a MongoDB Cloud database can be used, but the connection in <strong>server.js</strong> will need to be changed so it can connect.</li>
<li>Download a rest client such as ARC from <a href="https://install.advancedrestclient.com/install">install.advancedrestclient.com/install</a> or PostMan from <a href="https://www.getpostman.com/downloads/">www.getpostman.com/downloads/</a> to test the backend end points.</li>
</ol>
<h2>Front End Installation</h2>
<br>
<ol>
<li>Download <strong>Node.js version 8.11.4</strong> from <a href="https://nodejs.org/download/release/v8.11.4/">nodejs.org/download/release/v8.11.4</a> and install. Please select the version for your system. I developed this on Windows 10, so I used the win64 msi file.</li>
<li>Run <code>npm -v</code> to make sure <strong>npm version 5.6.0</strong> is installed. This is the version packaged with Node.js version 8.11.4.</li>
<li>Run <code>npm install @angular/cli@6.2.9</code> to install <strong>Angular CLI version 6.2.9</strong>.</li>
<li>Run <code>npm install ajv@6.9.1</code> to install <strong>ajv version 6.9.1</strong> because it is a dependency of ajv-keywords which is a dependency of Angular Materials. Angular Materials will install ajv-keywords, so you will not have to install that yourself.</li>
<li>Run <code>npm install --save bootstrap@3.4.1 jquery@3.4.1</code> to install <strong>Bootstrap version 3.4.1</strong> and <strong>jQuery version 3.4.1</strong> to allow reponsive veiwing for mobile applications. jQuery is a depenedency of Bootstrap.</li>
<li>Run the server with <code>ng serve</code>.</li>
</ol>
<br>
<h2>Back End Installation</h2>
<br>
<ol>
<li>Run <code>npm install --save-dev babel-cli@6.26.0 @babel/preset-env@7.5.5</code> to use <strong> babel-cli version 6.26.0</strong> and <strong> babel-preset-env version 1.7.0</strong>. The babel transpiler is used so ECMAScript 6 functuonality can be utilized.</li>
<li>Run <code>npm install --save-dev babel-watch@7.0.0 @babel/core@7.0.0</code> to install <strong>babel-watch version 7.0.0</strong> and <strong>@babel/core version 7.0.0</strong> so the server will restart when any changes are made to the applicaton.</li>
<li>Run <code>npm install express@4.17.1</code> to install <strong>Express.js version 4.17.1</strong>. This is the middleware for the back end server.</li>
<li>Run <code>npm install mongoose@5.6.5</code> to install <strong>mongoose version 5.6.5</strong> so express can connect to the mongo database.</li>
<li>Run <code>npm install cors@2.8.5</code> to install <strong>CORS version 2.8.5</strong> to handle the cross origin support.</li>
<li>Run <code>npm install braces@2.3.1</code> to install <strong>braces version 2.3.1</strong> because any version below 2.3.1 causes security errors with RegEx.</li>
<li>Run the server with <code>npm run dev</code> for ECMA6 compatability</li>
</ol>
