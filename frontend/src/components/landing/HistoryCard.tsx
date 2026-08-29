import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface HistoryCardProps {
    date: string
    summary: string
}

const HistoryCard = ({ date, summary }: HistoryCardProps) => {
    return (
        <Card className="h-full min-h-[280px] w-full rounded-sm border border-(--accent-hover) bg-(--accent-color)/90 shadow-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(96,68,24,0.08)] py-0">
            <CardHeader className="flex flex-row items-start justify-between px-5 pt-5 pb-0">
                <CardTitle className="text-white font-semibold font-heading text-lg md:text-xl">{date}</CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col px-5 pt-7 pb-5">
                <p className="text-white text-sm xs:text-xs sm:text-sm md:text-base">{summary}</p>
            </CardContent>
        </Card>
    )
}

export default HistoryCard