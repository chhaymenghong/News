// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  apiKey: 'ea3fe652fcac41fca1918dcd533b2a3b',
  baseUrl: 'https://newsapi.org/v1/',
  articlePath: 'articles',
  sourcePath: 'sources'
};
