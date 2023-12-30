import React from "react"
import Head from "next/head"
import Stepper from "@local/components/Home/Stepper"
import GotQuestions from "@local/components/Home/gotQuestions"
import PowerfulProducts from "@local/components/Home/powerfulProducts"
import HeroSection from "@local/components/Home/HeroSection"
import CounterSection from "@local/components/Home/CounterSection"
import ChooseUs from "@local/components/Home/chooseUs"

function Index() {
  const stepArray = [
    {
      id: 1,
      title: "Define Your Vision",
      content:
        "Share your ideas and business objectives with us. Our team will help refine your concept to align with market trends and user expectations.",
      imgURL: "/images/icons/first_step.svg"
    },
    {
      id: 2,
      title: "Choose Template",
      content:
        "Our design experts will create a prototype of your app, ensuring that the user interface is intuitive and engaging.",
      imgURL: "/images/icons/first_step.svg"
    },
    {
      id: 3,
      title: "Customise Feature",
      content:
        "We bring your vision to life with robust coding, followed by thorough testing to guarantee a seamless user experience.",
      imgURL: "/images/icons/first_step.svg"
    },
    {
      id: 4,
      title: "Plan Delivery",
      content: "We bring Strategic roadmap crafted,Efficient execution unleashed.",
      imgURL: "/images/icons/first_step.svg"
    }
  ]
  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI</title>
      </Head>
      <HeroSection />
      <Stepper stepArray={stepArray} />
      <CounterSection />
      <ChooseUs />
      <PowerfulProducts />
      <GotQuestions />
    </React.Fragment>
  )
}

export default Index
