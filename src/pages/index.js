import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionWarranty from '../components/SectionWarranty'
import SectionAbout from '../components/SectionAbout'
import SectionContact from '../components/SectionContact'
import SectionBenefits from '../components/SectionBenefits'
import SectionHome from '../components/SectionHome'
import FloatingButtons from '../components/FloatingButtons'
import SectionFaq from '../components/SectionFaq'

export default function Index({location}) {
    const url = location.href ? location.href : '';

    return (
        <Layout>
            <Header pageUrl={url} />
            <FloatingButtons pageUrl={url} />
            <SectionHome />
            <SectionAbout />
            <SectionBenefits />
            <SectionWarranty />
            <SectionFaq />
            <SectionContact />
            <Footer />
        </Layout>
    )
}
