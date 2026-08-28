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
//   CardHeader,
//   CardTitle,
} from '@/components/ui/card'
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TeamCardProps {
    name: string
    position: string
    profile?: string
}

const TeamCard = ({ name, position, profile }: TeamCardProps) => {

    return (
        <Card className="w-full rounded-sm bg-transparent! border-none! ring-0!">
            <CardContent className="flex flex-col items-center justify-center p-4 gap-2">
                <Dialog>
                    <DialogTrigger>
                        <div className="flex cursor-pointer items-center justify-center p-1 border-muted-foreground border rounded-md">
                            <div className="bg-gray-200 border rounded-md flex items-center justify-center w-32 h-32 border-(--accent-color)">
                                <img className="w-full h-full object-cover rounded-md" src={profile || '/empty-profile.png'} alt={name} />
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{name}</DialogTitle>
                            <DialogDescription className="text-(--accent-color)">
                                {position}
                            </DialogDescription>
                        </DialogHeader>
                        <p className="text-center">
                                <img className="w-full h-full object-cover rounded-md" src={profile || '/empty-profile.png'} alt={name} />
                        </p>
                        <div className="">
                            <h3 className="text-lg font-semibold text-(--accent-color)">Background</h3>
                            <p className="text-xs text-muted-foreground">
                                John Doe is the Director of Programming at our organization, responsible for overseeing all programming initiatives and ensuring their successful execution.
                            </p>
                        </div>
                        <div className="w-full mt-4 flex items-center justify-center">
                            <Link to={'https://www.linkedin.com/company/our-golden-age/'}><FaLinkedin className="font-body inline-block h-5 w-5 text-(--accent-light)" /></Link>
                        </div>
                    </DialogContent>
                </Dialog>
                
                <h3 className="text-base md:text-lg font-medium text-center mv-0">{name}</h3>
                <h4 className="text-sm: md:text-base text-(--accent-color) text-center mv-0">{position.toUpperCase()}</h4>

                <p className="text-center text-xs text-muted-foreground">
                    John Doe is the Director of Programming at our organization, responsible for overseeing all programming initiatives and ensuring their successful execution.
                </p>
                <div className="mt-4">
                        <Link to={'https://www.linkedin.com/company/our-golden-age/'}><FaLinkedin className="font-body inline-block h-5 w-5 text-(--accent-light)" /></Link>
                </div>
            </CardContent>
        </Card>
    )

}

export default TeamCard