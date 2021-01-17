<h1 id="aws-serverless-application-model-node-js--vue-3-ts">AWS Serverless Application Model Node JS &amp; Vue 3 TS</h1>
<p>This application is exactly what the title suggests, is a Entire Crud Application. A Todo Application that uses Vue JS 3 on the client side to build a Single Page Web Application, with a completely server-less back-end architecture.</p>
<h1 id="client-application">Client Application</h1>
<p>The client Application lives in the client folder, built with the Vue CLI 4.5.10 with the following features.<br>
<strong>Vue CLI v4.5.10</strong><br>
? <strong>Please pick a preset:</strong> <code>Manually select features</code><br>
? <strong>Check the features needed for your project</strong>: <code>Choose Vue version, Babel, TS, Router, Vuex, Linter</code><br>
? <strong>Choose a version of Vue.js that you want to start the project with</strong> <code>3.x (Preview)</code><br>
? <strong>Use class-style component syntax</strong>? <code>No</code><br>
? <strong>Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?</strong> <code>Yes</code><br>
? <strong>Use history mode for router? (Requires proper server setup for index fallback in production)</strong> <code>Yes</code><br>
? <strong>Pick a linter / formatter config</strong>: <code>Basic</code><br>
? <strong>Pick additional lint features</strong>: <code>Lint on save</code><br>
? <strong>Where do you prefer placing config for Babel, ESLint, etc.?</strong> <code>In dedicated config files</code><br>
? <strong>Save this as a preset for future projects?</strong> <code>No</code><br>
? <strong>Pick the package manager to use when installing dependencies</strong>: <code>Yarn</code></p>
<h1 id="serverless-backend">Serverless Backend</h1>
<p><img src="https://i.ibb.co/J7txDFL/layer.png" alt="enter image description here"><br>
This back-end application lives in the server-less folder, where we define the logic and data store layers of our application.<br>
The only module that it contains is the <a href="https://github.com/aws/aws-sdk-js-v3">aws-sdk v3</a>, which is what lamdba will use to communicate with the database.<br>
The serve-less application is composed of micro services, and each micro service contains it’s own project.<br>
Here is a look at each microservice in detail</p>
<p><img src="https://i.ibb.co/LY1xqLV/micro.png" alt="enter image description here"><br>
Using AWS SAM Template we are going to define four (one for each operation)<br>
<code>AWS::Serverless:Function</code>, and one <code>AWS::Serverless::SimpleTable</code>.</p>

