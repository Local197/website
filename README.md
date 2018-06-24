# United Brotherhood of Carpenter's Website
The official website of the United Brotherhood of Carpenter's Local 197. Visit the [docs](https://local197.github.io/website/).

## Run Dev

1. `npm install` installs all the dependencies needed to build the site.
2. `npm run start:dev` builds your static assets and places them on the `dist/` folder.
3. Head to the URL on your command line to see the website, make changes for real-time updates.

## AWS Mobile set-up

* Clone the repo.
* Go to aws-mobile and download the `aws-exports.json` file. Copy this file into `website/src`.
* Install aws mobile with `$ npm install -g awsmobile-cli`
* cd into `website` run `awsmobile init <aws_project_id>` (he id `aws_project_id` can be found in the `aws-exports.json` file.)
* After the project has bee linked, run `awsmobile run` to test locally, and `awsmobile publish` to publish.

## Remote Demos

To run with tunneling for demos, make sure ngrok is installed. Then run `$ awsmobile run`, and in another tab run `$ ngrok http 8080 -host-header="localhost:8080" -hostname="<hostname>"`.
