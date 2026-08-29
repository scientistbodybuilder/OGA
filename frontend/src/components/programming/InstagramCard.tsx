import {
  Dialog,
  DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const getInstagramEmbedUrl = (postUrl: string) => {
	const url = new URL(postUrl)
	url.search = ''
	url.pathname = `${url.pathname.replace(/\/$/, '')}/embed`
	return url.toString()
}


const InstagramCard = ({ url }: { url: string }) => {

    return(
        <Dialog>
            <DialogTrigger className="cursor-pointer">
                {/* <div className="relative h-full w-full cursor-pointer"> */}
                    <iframe
                    // title={`Instagram post`}
                    src={getInstagramEmbedUrl(url)}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    // tabIndex={-1}
                    />
                    {/* Transparent overlay — this is what actually receives the click */}
                    <div className="absolute inset-0" />
                {/* </div> */}
                
            </DialogTrigger>
            <DialogContent className=" w-full h-full sm:w-[500px] sm:h-[650px] lg:w-[700px] lg:h-[800px] !max-w-none">
                {/* <DialogHeader>
                    <DialogTitle>Instagram Post</DialogTitle>
                    <DialogDescription>
                        Preview of the Instagram post.
                    </DialogDescription>
                </DialogHeader> */}
                <iframe
                    // title={`Instagram post ${index + 1}`}
                    src={getInstagramEmbedUrl(url)}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                />
            </DialogContent>
        </Dialog>
    )


}

export default InstagramCard