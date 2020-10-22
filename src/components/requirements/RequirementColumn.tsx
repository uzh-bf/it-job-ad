import React from 'react'
import { Grid, Header, List } from 'semantic-ui-react'

import styles from './RequirementColumn.module.scss'

interface Props {
  header: string
  must: string[]
}

function RequirementColumn({ header, must }: Props) {
  return (
    <Grid.Column width={7}>
      <Header as="h2" textAlign="center" size="large">
        {header}
      </Header>

      <List as="ul">
        {must.map((item) => (
          <List.Item as="li">{item}</List.Item>
        ))}
      </List>
    </Grid.Column>
  )
}

export default RequirementColumn