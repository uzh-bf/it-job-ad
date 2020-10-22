import React from 'react'
import { Header, Image, Grid, Container } from 'semantic-ui-react'

import styles from './TeamColumn.module.scss'

interface Props {
  teamName: string
  imageSrc: string
  leaderName: string
  leaderPosition: string
  teamDescription: string
}

function TeamColumn({
  teamName,
  imageSrc,
  leaderName,
  leaderPosition,
  teamDescription,
}: Props) {
  return (
    <Grid.Column>
      <Header as="h3" textAlign="center" size="large">
        {teamName}
      </Header>

      <Container className={styles.teamInfo}>
        <Image src={imageSrc} className={styles.leaderPhoto} />

        <Header textAlign="center" as="h5" size="medium">
          {leaderName}
        </Header>

        <Header
          textAlign="center"
          as="h6"
          size="medium"
          className={styles.leaderPosition}
        >
          {leaderPosition}
        </Header>

        <p className={styles.teamDescription}>{teamDescription}</p>
      </Container>
    </Grid.Column>
  )
}

export default TeamColumn