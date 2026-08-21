import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CalendarDays, CircleDollarSign, Leaf, Scale, Sparkles, Sprout } from 'lucide-react'

export interface SeminarCardProps {
    date: string
    title: string
    description: string
    action: string
    category: string
    icon?: 'sparkles' | 'scale' | 'leaf' | 'sprout' | 'calendar' | 'finance'
    image?: string
}

const SeminarCard = ({
    date,
    title,
    description,
    action,
    category,
    icon,
    image,
}: SeminarCardProps) => {
    const icons = {
        sparkles: Sparkles,
        scale: Scale,
        leaf: Leaf,
        sprout: Sprout,
        calendar: CalendarDays,
        finance: CircleDollarSign,
    }
    const Icon = icon ? icons[icon] : null

    return (
        <Card className="h-full min-h-[280px] rounded-none border border-[#e5ddd7] bg-white py-0 shadow-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(96,68,24,0.08)]">
            {image ? (
                <div className="relative h-[94px] w-full overflow-hidden">
                    <img src={image} alt="" className="h-full w-full object-cover object-center" />
                    <span className="absolute left-2 top-2 bg-(--accent-color) px-2 py-1 font-body text-[8px] font-bold uppercase text-white">{date}</span>
                </div>
            ) : (
                <CardHeader className="flex flex-row items-start justify-between px-5 pt-5 pb-0">
                    <span className="bg-[#f3ede7] px-2 py-1 font-body text-[9px] font-bold uppercase text-(--accent-color)">
                        {date}
                    </span>
                    {Icon && <Icon aria-hidden="true" className="h-4 w-4 text-[#cdbda9]" strokeWidth={1.5} />}
                </CardHeader>
            )}
            <CardContent className="flex h-full flex-col px-5 pt-7 pb-5">
                <div>
                    <p className="mb-2 font-body text-[9px] uppercase tracking-[0.08em] text-(--accent-color)">{category}</p>
                    <CardTitle className="max-w-[220px] font-heading text-[18px] leading-[1.12] font-medium text-black">{title}</CardTitle>
                    <p className="mt-3 font-body text-[10px] leading-[1.55] text-[#5f554f]">{description}</p>
                </div>
                <div className="mt-auto border-t border-[#d8c7b4] pt-3">
                    <Button className="h-7 w-full rounded-none bg-(--accent-color) font-body text-[10px] uppercase tracking-[0.04em] text-white hover:bg-(--accent-hover)">
                        {action}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default SeminarCard