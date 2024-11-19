import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {AlarmClockCheck} from "lucide-react";

export const PickDate = ({deadline, setDeadline}) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className="w-[278px] pl-3 text-left font-normal"
                >
                    <span>{deadline?.toLocaleDateString()}</span>
                    <AlarmClockCheck className="ml-auto h-4 w-4 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={deadline}
                    onSelect={setDeadline}
                    disabled={(deadline) =>
                        deadline > new Date() || deadline < new Date("1900-01-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}