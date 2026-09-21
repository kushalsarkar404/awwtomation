import { PhotoSlot } from "@/components/mc/placeholder"
import { Reveal } from "@/components/site/reveal"
import type { UseCasePage, UseCaseStep } from "@/content/mc-types"
import { cn } from "@/lib/utils"

const tones = ["bg-yellow", "bg-lavender", "bg-purple"]
const badge = ["bg-ink text-yellow", "bg-ink text-lavender", "bg-white text-purple"]
/* At 1800px the cards are 498 x 200, each 411px right of and 143px below the one before. */
const positions = ["md:left-0 md:top-0", "md:left-[31.1%] md:top-[10.8vw] lg:top-[7.95vw]", "md:left-[62.2%] md:top-[21.6vw] lg:top-[15.9vw]"]
const artText = "text-[1.25rem] leading-[1.25] lg:text-[clamp(1.125rem,1.5vw,1.75rem)]"

function Art({ art, index }: { art: UseCaseStep["art"]; index: number }) {
  return (
    <div className={cn("relative h-[180px] overflow-hidden rounded-[28px] lg:h-[11.1vw] lg:rounded-[2vw]", tones[index])}>
      <span
        className={cn(
          "absolute left-4 top-4 z-10 flex size-10 items-center justify-center rounded-full text-[1.25rem] font-bold lg:left-[1vw] lg:top-[1vw] lg:size-[2.4vw] lg:text-[clamp(1.125rem,1.4vw,1.625rem)]",
          badge[index],
        )}
      >
        {index + 1}
      </span>
      {art.kind === "keyword" ? (
        <>
          <PhotoSlot tone="warm" label="Post" hideLabel className="absolute left-[23%] top-[12%] h-[110%] w-[37%] rotate-[-4deg] rounded-2xl" />
          <span className={cn("absolute left-[48.8%] top-[50%] flex h-[28%] items-center rounded-full bg-white/90 px-[4%] text-ink", artText)}>
            {art.text}
          </span>
        </>
      ) : null}
      {art.kind === "bubble" ? (
        <p className={cn("absolute left-1/2 top-[19%] w-1/2 -translate-x-1/2 rounded-[20px] bg-ink px-[4.4%] py-[3.5%] text-white", artText)}>
          {art.text}
        </p>
      ) : null}
      {art.kind === "list" ? (
        <>
          <div className="absolute left-[27.7%] top-[14%] h-full w-[46%] rotate-[2deg] rounded-t-2xl bg-white pt-[4%] text-center">
            <p className={cn("font-semibold text-ink", artText)}>{art.title}</p>
          </div>
          <p
            className={cn(
              "absolute left-[20.9%] top-[52.5%] flex h-[32.5%] w-[58.2%] items-center justify-center gap-3 rounded-full bg-[linear-gradient(90deg,#d8bee3,#fff_85%)] text-ink",
              artText,
            )}
          >
            {art.value}
            <span className="flex size-5 items-center justify-center rounded-full bg-green text-[0.625rem] text-white lg:size-[1.3vw]">✓</span>
          </p>
        </>
      ) : null}
    </div>
  )
}

/** Three step cards cascading diagonally down the page. */
export function CascadeSteps({ page }: { page: UseCasePage }) {
  return (
    <section className="bg-white px-5 pb-28 sm:px-10 lg:px-0 lg:pb-[8vw]">
      <div className="text-center">
        <h2 className="mc-h2 mx-auto max-w-[36rem] lg:max-w-[36vw]">{page.steps.title}</h2>
        <p className="mc-sub mx-auto mt-6 max-w-[40rem] lg:mt-[2vw] lg:max-w-[40vw]">{page.steps.body}</p>
      </div>
      <div className="relative mx-auto mt-16 md:h-[62vw] lg:mt-[5.9vw] lg:h-[40vw] lg:w-[73.3vw]">
        {page.steps.items.map((step, index) => (
          <Reveal key={step.title} delay={index * 150} className={cn("mt-12 first:mt-0 md:absolute md:mt-0 md:w-[37.8%]", positions[index])}>
            <Art art={step.art} index={index} />
            <h3 className="mt-6 max-w-[18rem] text-[1.75rem] font-bold leading-[1.03] tracking-[-0.01em] lg:mt-[1.83vw] lg:max-w-[16.1vw] lg:text-[clamp(1.5rem,1.78vw,2.25rem)]">
              {step.title}
            </h3>
            <p className="mt-4 max-w-[20rem] text-[1.0625rem] leading-[1.32] lg:mt-[1.4vw] lg:max-w-[17.8vw] lg:text-[clamp(1rem,1.03vw,1.25rem)]">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
