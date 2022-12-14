import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new typescript.TypeScriptProject({
  authorName: 'Arctarus Limited',
  authorOrganization: true,
  authorEmail: 'info@arctarus.co.uk',
  authorUrl: 'https://www.arctarus.co.uk',

  defaultReleaseBranch: 'main',
  name: '@arctarus/architect-k8s-crds',
  license: 'MIT',
  repository: 'https://github.com/ArctarusLimited/architect-k8s-crds.git',

  projenrcTs: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,

  // dependencies
  deps: [
    'kubernetes-models',
    '@kubernetes-models/apimachinery',
    '@kubernetes-models/base',
    '@kubernetes-models/validate',
  ],

  devDeps: [
    '@types/node',
    '@kubernetes-models/crd-generate',
    '@kubernetes-models/openapi-generate',
  ],

  // add to gitignore
  gitignore: ['.venv'],

  // tests are not required
  jest: false,

  // do not eslint as generated code is not conformant
  eslint: false,
});

project.synth();
