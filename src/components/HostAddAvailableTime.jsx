import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { createAvailableTime } from "../api/host";
import useAuthStore from "../stores/auth-store";

function HostAddAvailableTime({
  hotelId,
  freeTime,
  setFreeTime,
  getAvailableTime,
}) {
  const token = useAuthStore((state) => state.token);

  // State variables
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [price, setPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Control dialog visibility
  const [error, setError] = useState(""); // Error message state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation: Check if all fields are filled
    if (!startDate || !endDate || !startTime || !endTime || !price) {
      setError("All fields are required.");
      return; // Prevent form submission if validation fails
    }

    // Gather form data
    const formData = {
      startDate: startDate ? format(startDate, "PPP") : null,
      endDate: endDate ? format(endDate, "PPP") : null,
      startTime,
      endTime,
      price,
      hotelId,
    };

    console.log("Form submitted:", formData);

    await createAvailableTime(token, formData);

    // Clear the form fields after submission
    setStartDate(null);
    setEndDate(null);
    setStartTime("");
    setEndTime("");
    setPrice("");
    setError(""); // Clear error message

    // Close the dialog after submission
    setIsOpen(false);

    await getAvailableTime(token, hotelId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="border-4 bg-MyBg border-MainOrange text-MainOrange text-xl font-bold font-bebas px-3 py-5 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          variant="outline"
        >
          Add
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Available Time</DialogTitle>
          <DialogDescription>
            Select start and end dates and time, then click save when you're
            done.
          </DialogDescription>

          {/* Form starts here */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* Start Date */}
            <div>
              <Label htmlFor="startDate" className="text-right">
                Start Date:
              </Label>
              <div className="flex gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span>Pick a start date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      disabled={(date) =>
                        date < new Date().setHours(0, 0, 0, 0)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Select
                  name="startTime"
                  value={startTime}
                  onValueChange={setStartTime}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select start time..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Start time</SelectLabel>
                      {[...Array(24).keys()].map((i) => (
                        <SelectItem key={i} value={`${i}.00`}>
                          {`${i < 10 ? "0" : ""}${i}.00`}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* End Date */}
            <div>
              <Label htmlFor="endDate" className="text-right">
                End Date:
              </Label>
              <div className="flex gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick an end date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) =>
                        date < new Date().setHours(0, 0, 0, 0)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Select
                  name="endTime"
                  value={endTime}
                  onValueChange={setEndTime}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select end time..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>End time</SelectLabel>
                      {[...Array(24).keys()].map((i) => (
                        <SelectItem key={i} value={`${i}.00`}>
                          {`${i < 10 ? "0" : ""}${i}.00`}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price */}
            <div>
              <Label htmlFor="price" className="text-right">
                Price:
              </Label>
              <Input
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price here..."
                className="col-span-3"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default HostAddAvailableTime;
