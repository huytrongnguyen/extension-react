import React, { Component } from 'react'
import { Route, Container } from '@/rext'

@Route('*')
export default class NotFound extends Component {
  render() {
    return <Container>
      <h1>Not Found</h1>
    </Container>
  }
}