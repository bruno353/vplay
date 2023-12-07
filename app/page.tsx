/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'

import L3AContributors from '@/components/About/L3AContributors'
import Categories2 from '@/components/Categories2'
import ScrollUp from '@/components/Common/ScrollUp'
import Contribute2 from '@/components/Contribute2'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import SocialMedia from '@/components/SocialMedia'
import TallyForms from '@/components/TallyForms'
import Techs from '@/components/Techs'
import { Inter } from '@next/font/google'
import { useRef } from 'react'
import { RevealWrapper } from 'next-reveal'
import Hero5 from '@/components/Hero5'
import Hero6 from '@/components/Hero6'
import Hero7 from '@/components/Hero7'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)
  const tallyFormsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <section className="bg-[#000] text-[#fff]">
        <div>
          <img src={`/images/1.svg`} alt="image" className={`w-full`} />
        </div>
        <div className="mx-auto justify-center pt-[160px] pb-[80px] text-center text-[48px]">
          <div>Browse and Play from GameFi Insights</div>
          <div>Search Coins, Tokens & NFT's In Natural Language</div>
          <div>Buy/Sell/Trade Directly from Search Results</div>
        </div>
        <div>
          <img src={`/images/2.png`} alt="image" className={`w-full`} />
        </div>
        <div>
          <img src={`/images/3.svg`} alt="image" className={`w-full`} />
        </div>
        <div>
          <img src={`/images/5.svg`} alt="image" className={`w-full`} />
        </div>
        <div>
          <img src={`/images/6.svg`} alt="image" className={`w-full`} />
        </div>
      </section>
      {/* <Hero />
      <Hero2 />
      <RevealWrapper>
        <Hero3 />
      </RevealWrapper>
      <RevealWrapper>
        <Hero4 />
      </RevealWrapper>
      <RevealWrapper>
        <Hero5 />
      </RevealWrapper>
      <RevealWrapper>
        <Hero6 />
      </RevealWrapper>
      <RevealWrapper>
        <Hero7 />
      </RevealWrapper> */}
      {/*
      <RevealWrapper>
        <Techs />
      </RevealWrapper>
      <RevealWrapper>
        <Categories2 />
      </RevealWrapper> */}
      {/* <Testimonials /> */}
      {/* <CTA scrollIntoView={contributorsRef} /> */}
      {/* <AboutL3A />
      <Categories /> */}
      {/* <RevealWrapper>
        <div ref={contributorsRef}>
          <L3AContributors />
        </div>
      </RevealWrapper>
      <Contribute2 scrollIntoView={tallyFormsRef} />
      <div ref={tallyFormsRef}>
        <TallyForms />
      </div> */}
      {/* <SocialMedia /> */}
    </>
  )
}
