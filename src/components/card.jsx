import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import imgCard1 from './card1.svg'
import imgCard2 from './card2.svg'
import imgCard3 from './card3.svg'
import imgCard4 from './card4.svg'

const BaseCard = styled(animated.img)`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
`

const Card1 = styled(BaseCard)`
  min-width: 60ch;
  min-height: 60ch;
  width: 45vw;
  height: 45vw;
  max-width: 100ch;
  max-height: 100ch;
`

const Card2 = styled(BaseCard)`
  width: 25ch;
  height: 25ch;
`

const Card3 = styled(BaseCard)`
  opacity: 0.9;
  width: 25ch;
  height: 25ch;
`

const Card4 = styled(BaseCard)`
  width: 25ch;
  height: 25ch;
`

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Card1 src={imgCard1} style={{ transform: props.xy.interpolate(trans1) }} />
      <Card2 src={imgCard2} style={{ transform: props.xy.interpolate(trans2) }} />
      <Card3 src={imgCard3} style={{ transform: props.xy.interpolate(trans3) }} />
      <Card4 src={imgCard4} style={{ transform: props.xy.interpolate(trans4) }} />
    </Container>
  )
}

export default Card
