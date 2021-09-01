import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './schema';

// Reusable function
function addExclamation(value: string): string {
  return value + '!';
}

export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        addExclamation
      })
    ]);

    console.log(tree);

    return mergeWith(sourceParametrizedTemplates);
  };
}
