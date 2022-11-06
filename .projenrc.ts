import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  authorName: 'Arctarus Limited',
  authorOrganization: true,
  authorEmail: 'info@arctarus.co.uk',
  authorUrl: 'https://www.arctarus.co.uk',

  defaultReleaseBranch: 'main',
  name: '@akim/architect-k8s-crds',
  license: 'MIT',
  repository: 'https://github.com/ArctarusLimited/architect-k8s-crds.git',

  projenrcTs: true,

  // dependencies
  deps: [],

  devDeps: [
    '@types/node',
    '@kubernetes-models/crd-generate',
    '@kubernetes-models/openapi-generate',
  ],

  // add to gitignore
  gitignore: [".venv"],

  // tests are not required
  jest: false,
});

project.synth();
