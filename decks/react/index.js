import intro from './00-intro.mdx'
import components from './01-components.mdx'
import props from './02-props.mdx'
import composition from './03-composition.mdx'
import mediaCard from './04-exercise-1-media-card.mdx'
import dataFlow from './05-react-state-and-data-flow.mdx';
import lifeCycle from './06-react-life-cycle.mdx';

export { default as theme } from '../../theme'

export default [
  ...intro,
  ...components,
  ...props,
  ...composition,
  ...mediaCard,
  ...dataFlow,
  ...lifeCycle
]
