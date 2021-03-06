import intro from './intro.mdx'
import variables from './variables'
import templateLiterals from './template-literals';
import objects from './objects';
export { default as theme } from './theme'

export default [
    ...intro,
    ...variables,
    ...templateLiterals,
    ...objects
]
