import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

interface AlbumCardProps {
    title: string
    albumCover: string
    id: string
}

const AlbumCard = ({ title, albumCover, id }: AlbumCardProps) => {
    const navigate = useNavigate()
    return (
        <Card className="relative w-full h-full rounded-sm overflow-hidden">
        <div
            className="absolute inset-0"
            style={{
            backgroundImage: `url(${albumCover || '/empty-profile.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
        />
        <div className="absolute inset-0 bg-black/30 cursor-pointer hover:bg-black/40 transition-all" onClick={() => navigate(`/photos/${id}`)} />
        {/* your content goes here, above both layers */}
        <CardHeader className="z-10">
            <CardTitle className="text-lg font-medium text-white">{title}</CardTitle>
        </CardHeader>
        </Card>
    )
}

export default AlbumCard