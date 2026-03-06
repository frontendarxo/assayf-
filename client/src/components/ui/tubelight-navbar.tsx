import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const LABEL_WIDTH = 72
const SCROLL_SPY_ROOT_MARGIN = "-20% 0px -60% 0px"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

function getVisibleSectionUrl(items: NavItem[]): string | null {
  const viewportCenter = window.innerHeight / 2
  let best: { url: string; top: number } | null = null

  for (const item of items) {
    const el = document.querySelector(item.url)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
      if (!best || rect.top < best.top) best = { url: item.url, top: rect.top }
    }
  }
  if (best) return best.url
  for (const item of items) {
    const el = document.querySelector(item.url)
    if (!el) continue
    if (el.getBoundingClientRect().top >= 0) return item.url
  }
  return items[items.length - 1]?.url ?? null
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeUrl, setActiveUrl] = useState(items[0]?.url)

  useEffect(() => {
    const selectors = items.map((i) => i.url).filter(Boolean)
    const elements = selectors
      .map((url) => document.querySelector(url))
      .filter((el): el is Element => el != null)
    if (elements.length === 0) return

    const onIntersection: IntersectionObserverCallback = () => {
      const url = getVisibleSectionUrl(items)
      if (url) setActiveUrl(url)
    }

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: SCROLL_SPY_ROOT_MARGIN,
      threshold: [0, 0.1, 0.5, 1],
    })
    elements.forEach((el) => observer.observe(el))
    onIntersection([], observer)
    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    setActiveUrl(url)
    document.querySelector(url)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center gap-1 bg-background/60 border border-border shadow-lg py-1 px-1 rounded-full backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeUrl === item.url

          return (
            <a
              key={item.url}
              href={item.url}
              onClick={(e) => handleClick(e, item.url)}
              className={cn(
                "relative flex items-center cursor-pointer text-sm font-semibold px-3 py-2 rounded-full transition-colors min-h-[40px]",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <Icon size={22} strokeWidth={2} className="shrink-0" aria-hidden />
              <motion.div
                initial={false}
                animate={{
                  width: isActive ? `${LABEL_WIDTH}px` : "0px",
                  opacity: isActive ? 1 : 0,
                  marginLeft: isActive ? "8px" : "0px",
                }}
                transition={{
                  width: { type: "spring", stiffness: 350, damping: 32 },
                  opacity: { duration: 0.19 },
                  marginLeft: { duration: 0.19 },
                }}
                className="overflow-hidden flex items-center max-w-[72px]"
              >
                <span
                  className={cn(
                    "font-medium text-xs whitespace-nowrap select-none overflow-hidden text-ellipsis",
                    isActive ? "text-primary" : "opacity-0",
                  )}
                  title={item.name}
                >
                  {item.name}
                </span>
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="tubelight-lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
