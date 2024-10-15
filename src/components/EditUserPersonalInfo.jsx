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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import React from "react";

function EditUserPersonalInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-7 py-6 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          variant="outline"
        >
          EDIT PROFILE
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>EDIT PROFILE</DialogTitle>
          <DialogDescription>
            Make change to your profile here . Click save when you done.
          </DialogDescription>
          <div className="grid gap-4 py-4">
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="firstName" className="text-right">
                FIRST NAME :
              </Label>
              <Input
                id="firstName"
                value="user's firstName"
                className="col-span-3"
              />
            </div>
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="LastName" className="text-right">
                Last Name :
              </Label>
              <Input id="LastName" value="ded" className="col-span-3" />
            </div>
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="email" className="text-right">
                Email :
              </Label>
              <Input id="email" value="user's email" className="col-span-3" />
            </div>
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="dateOfBirth" className="text-right">
                Date of Birth (YYYY/MM/DD)
              </Label>
              <Input
                id="dateOfBirth"
                value="user's birth date"
                className="col-span-3"
              />
            </div>
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="gender" className="text-right">
                Gender :
              </Label>
              <div>
                <Select>
                  <SelectTrigger className="w-[340px]">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>gender</SelectLabel>
                      <SelectItem value="MALE">MALE</SelectItem>
                      <SelectItem value="FEMALE">FEMALE</SelectItem>
                      <SelectItem value="ETC">ETC</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlfor="paymentMethod" className="text-right">
                Payment Method :
              </Label>
              <div>
                <Select>
                  <SelectTrigger className="w-[340px]">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>payment method</SelectLabel>
                      <SelectItem value="CASH">CASH</SelectItem>
                      <SelectItem disable value="CREDIT">
                        CREDIT(Not available)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Change</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserPersonalInfo;
