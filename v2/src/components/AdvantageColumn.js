import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

function AdvantageColumn({
  iconName,
  iconColor,
  advantageTitle,
  advantageText,
}) {
  return (
    <Grid.Column>
      <div style={{ margin: '0 auto', width: '120px' }}>
        <Icon circular inverted color={iconColor} size="huge" name={iconName} />
      </div>
      <Header as="h3" textAlign="center" style={{ fontSize: '2em' }}>
        {advantageTitle}
      </Header>
      <p style={{ fontSize: '1.33em' }}>{advantageText}</p>
    </Grid.Column>
  )
}

export default AdvantageColumn
