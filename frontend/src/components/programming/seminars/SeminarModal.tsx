import { useState, useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export interface SeminarModalProps {
    url: string

}

const SeminarModal = ({ url }: SeminarModalProps) => {
    const videoId = useMemo(() => {
        return url?.split('?v=')[1]
    }, [url])

    return (
        <>
                <iframe 
                src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-full" 
                allowFullScreen
                />
           </>
    )
    
}

export default SeminarModal