import { SpotIcon, spotIconSize, type SpotIconName } from "@/components/mc/icons"
import { cn } from "@/lib/utils"

/** Spot icon, big centred heading and one line of lead text above a section. */
export function SectionIntro({
  icon,
  color,
  title,
  body,
  dark = false,
  className,
  as: Tag = "h2",
}: {
  icon?: SpotIconName
  color: string
  title: string
  body?: string
  dark?: boolean
  className?: string
  as?: "h1" | "h2"
}) {
  return (
    <div className={cn("mx-auto max-w-[30rem] px-5 text-center lg:max-w-[63vw] lg:px-0", dark ? "text-white" : "text-ink", className)}>
      {icon ? (
        <span style={{ color }} className="inline-block">
          <SpotIcon name={icon} className={cn("mx-auto size-14", spotIconSize[icon])} />
        </span>
      ) : null}
      <Tag className="mc-h2 mt-4 lg:mt-4">{title}</Tag>
      {body ? <p className="mc-sub mx-auto mt-5 max-w-[40rem] lg:mt-6">{body}</p> : null}
    </div>
  )
}
