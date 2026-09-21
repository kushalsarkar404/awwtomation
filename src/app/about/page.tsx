import Image from "next/image"

import { SpotIcon } from "@/components/mc/icons"
import { SectionIntro } from "@/components/mc/sections/intro"
import { TrustBadges } from "@/components/mc/sections/hero"
import { McButton } from "@/components/mc/button"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { aboutSeo } from "@/content/bespoke"
import { SIGNUP_URL } from "@/lib/brand"
import { absoluteUrl, buildBreadcrumbSchema, buildWebPageSchema, pageMetadata, SITE_URL } from "@/lib/seo"

const seo = { title: aboutSeo.title, description: aboutSeo.description, path: aboutSeo.path }

export const metadata = pageMetadata(seo)

const founders = [
  { name: "Prakhyat Shrestha", role: "Co-founder · Engineering", place: "Kathmandu, Nepal", image: "/team/prakhyat-shrestha.jpg", bg: "#fff200", linkedin: "https://www.linkedin.com/in/prakhyat-shrestha/" },
  { name: "Kushal Sarkar", role: "Co-founder · Data & Operations", place: "Atlanta, USA", image: "/team/kushal-sarkar.jpg", bg: "#96dae3", linkedin: "https://www.linkedin.com/in/ksarkar011/" },
]

const principles = [
  { title: "No password sharing", body: "Connect your channels directly and keep control of your account.", bg: "#3c42c4", light: true, icon: "bolt" as const },
  { title: "Honest about limits", body: "Instagram and Facebook only, and we say so.", bg: "#fb0df7", light: true, icon: "eyes" as const },
  { title: "Your data is yours", body: "Export anything, delete everything, any time.", bg: "#007257", light: true, icon: "heart" as const },
]

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema(seo),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
          ...founders.map((founder) => ({
            "@context": "https://schema.org",
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.role.replace(" · ", ", "),
            image: absoluteUrl(founder.image),
            sameAs: [founder.linkedin],
            worksFor: { "@id": `${SITE_URL}/#organization` },
          })),
        ]}
      />

      <section data-nav="dark" className="mc-grid bg-yellow px-5 pb-12 pt-28 lg:px-11 lg:pb-[66px] lg:pt-[142px]">
        <h1 className="mc-h1 max-w-[52rem]">We help businesses sell in the DMs</h1>
        <p className="mc-sub mt-5 max-w-[41rem] lg:mt-[27px]">
          Awwtomation is built in Kathmandu for the creators, shops and agencies who grow on Instagram and Facebook.
        </p>
        <div className="mt-9 flex flex-col gap-8 lg:mt-[43px] lg:flex-row lg:items-center lg:justify-between">
          <McButton href={SIGNUP_URL} variant="black" size="lg" className="self-start">
            Get started
          </McButton>
          <TrustBadges light={false} />
        </div>
      </section>

      <section className="bg-white pb-20 pt-28 lg:pb-[6.5vw] lg:pt-[11.8vw]">
        <SectionIntro
          icon="heart"
          color="#ff4c00"
          title="Every DM is a customer asking to buy"
          body="Most selling on social happens one message at a time. We automate the repetitive part, so people can focus on the conversations that matter."
        />
      </section>

      <section className="bg-white px-5 pb-32 sm:px-10 lg:pb-[8vw]">
        <h2 className="mc-h2 text-center">The team</h2>
        <div className="mx-auto mt-14 grid max-w-[1088px] gap-4 md:grid-cols-2 lg:mt-[4vw] xl:w-[77.8vw] xl:max-w-none xl:gap-[1.2vw]">
          {founders.map((founder) => (
            <div key={founder.name} className="overflow-hidden rounded-[28px] bg-fog">
              <div className="relative aspect-[4/3]" style={{ background: founder.bg }}>
                <Image src={founder.image} alt={`Portrait of ${founder.name}`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover mix-blend-multiply" />
              </div>
              <div className="flex items-end justify-between gap-4 p-7">
                <div>
                  <p className="mc-h4">{founder.name}</p>
                  <p className="mc-label-sm mt-3 text-mute">
                    {founder.role} · {founder.place}
                  </p>
                </div>
                <a href={founder.linkedin} rel="noopener" className="mc-label shrink-0 underline underline-offset-4">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 pb-32 sm:px-10 lg:pb-[10vw]">
        <div className="mx-auto grid max-w-[1088px] gap-4 md:grid-cols-3 xl:w-[77.8vw] xl:max-w-none xl:gap-[1.2vw]">
          {principles.map((principle) => (
            <div key={principle.title} className="flex min-h-[320px] flex-col rounded-[28px] p-8 text-white xl:min-h-[22vw] xl:rounded-[2vw] xl:p-[2.2vw]" style={{ backgroundColor: principle.bg }}>
              <SpotIcon name={principle.icon} className="size-12 text-white [&_path[fill='#fff']]:fill-current" />
              <p className="mc-h4 mt-auto">{principle.title}</p>
              <p className="mt-3 text-[1.0625rem] leading-snug text-white/85">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
