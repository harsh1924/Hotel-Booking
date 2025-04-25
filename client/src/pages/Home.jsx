import React from 'react'
import { Hero } from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import { ExclusiveOffers } from '../components/ExclusiveOffers'

export const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
    </>
  )
}